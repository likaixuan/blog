<template>
    <div>
        <div class="map">
            <button @click="randomSelection" v-show="isPlay" class="map-play">开始游戏</button>
            <button @click="gameover" v-show="!isPlay" class="gameover">结束游戏</button>
            <img :src="map.backSrc" alt="">
            <div class="item" v-for="item in user" :style="{top:item.y+'px',left:item.x+'px'}"><span>{{item.name}}</span><img :src="item.headerSrc" alt=""></div>
            <div class="modal" v-show="isChoice">
                <div class="top" v-if="oldUserIndex!==-1">
                    <div class="img-box">
                        <img :src="user[oldUserIndex].headerSrc" alt="">
                    </div>
                    <h3>
                        {{user[oldUserIndex].name}}
                    </h3>
                    <div class="countdown">{{countdown}}s</div>
                </div>
                <div class="content" v-if="problemIndex!==-1">
                    <span>问题:</span>
                    <h3>{{problems[problemIndex].title}}</h3>
                    <span>答案:</span>
                    <div class="answer">
                         <p v-for="(item,key) in problems[problemIndex].list">
                            <input class="magic-radio" type="radio" v-model="radioAnswer" :value="key" :id="'mapradio'+key"> 
                            <label :for="'mapradio'+key">{{key}}:{{item}}</label> 
                         </p>
                    </div>
                    <div class="btn-box">
                        <button class="ok" @click="submit()">确定</button>
                        <button class="cancel" @click="randomSelection(false)">放弃</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    /*
     *----------------------------
     * 主布局(layout)
     *----------------------------
     * @author likaixuan
     * @date 2017/05/26
     * 
     */
    import { map } from "../data/map.js"
    import { problems } from "../data/problem.js"
    import { virtualPlayers } from "../data/virtualPlayer.js"
    let  COUNTDOWN = 30
    export default {
        data() {
            return {
                user: [
                    { name: "李良辰", x: 330, y: 562 },
                ],
                problems: [],
                isChoice: false,
                isPlay: true,
                map: {},
                userWidth: 80,
                flag: true,
                radioAnswer:"",
                oldUserIndex: 0,
                problemIndex: -1,
                timerId:"",
                countdown:COUNTDOWN,
                startObj: {
                    x: 0,
                    y: 0,
                    sum: 0,
                    sumMax: 100
                }
            }
        },
        methods: {
            hide() {
                this.isPlay = false;
                this.isChoice = false;
            },
            gameover (){
                //游戏结束
                 this.endCountdown();
                 this.problemIndex = -1;
                 lib.ls.set("rankingList",this.user);
                 this.$router.replace('/rankingList');
            }
            ,
            startCountdown () {
                //倒计时
                this.endCountdown();
                this.countdown = COUNTDOWN;
                this.timerId = setInterval(()=>{
                    console.log(this.countdown)
                    this.countdown--;
                    if(this.countdown<=0) {
                        this.randomSelection(false);
                        clearInterval(this.timerId);
                    }
                },1000)
            },
            endCountdown () {
                   clearInterval(this.timerId);
            }
            ,
            submit () {
                //提交答案
                if(this.radioAnswer==="") {
                    alert("答案不能为空");
                    return;
                }
                if(this.problems[this.problemIndex].correct === this.radioAnswer) {
                     this.user[this.oldUserIndex].score += 1;
                     this.problems[this.problemIndex]
                     alert("回答正确");
                } else {
                       this.user[this.oldUserIndex].score -= 1;
                    alert("回答错误");
                }
            

               this.randomSelection();
            },
            randomSelection(isDel=true) {
                //随机选择答题人

                //清空答案
                this.radioAnswer = "";
                //隐藏开始游戏
                this.hide();
                if (this.problemIndex !== -1&&isDel) {
                    //删除回答过的问题
                    this.problems.splice(this.problemIndex, 1);
                }
                if (this.problems.length > 0) {
                    this.problemIndex = Math.floor(Math.random() * this.problems.length);
                } else {
                   this.gameover();
                    return;
                }
                console.log(this.problemIndex, "我是问题")
                //随机选择哪位答题
                let rad = 0;
                do {
                    rad = Math.floor(Math.random() * this.user.length);
                }
                while (rad === this.oldUserIndex);

                this.oldUserIndex = rad;

                console.log(this.user[rad].name)
                if (this.flag) {
                    //寻址不能被打断
                    this.flag = false;
                    this.flight(rad);
                }
            },
            flight(rad) {
                //准备飞行

                let x, y;
                //初始坐标
                this.startObj.sum = 0;
                this.startObj.y = document.body.scrollTop;
                this.startObj.x = document.body.scrollLeft;

                console.log("当前地址x=" + this.startObj.x + ",y=" + this.startObj.y);
                console.log("目标地址x=" + this.user[rad].x + ",y=" + this.user[rad].y);

                //设置y轴步长 需区分移动方向
                y = this.startObj.y - this.user[rad].y;
                if (y > 0) {
                    //向上走

                    //说明不靠近边界
                    let vh = parseInt(document.body.clientHeight / 2) - 50;
                    y = (y + vh) / -this.startObj.sumMax;
                } else {
                    //向下走
                    let vh = parseInt(document.body.clientHeight / 2) - 50;
                    y = (Math.abs(y) - vh) / this.startObj.sumMax;
                }

                //设置y轴步长 需区分移动方向
                x = this.startObj.x - this.user[rad].x
                if (x > 0) {
                    //往左走
                    let vw = parseInt(document.body.clientWidth / 2) - 50;

                    x = (x + vw) / -this.startObj.sumMax;
                } else {
                    let vw = parseInt(document.body.clientWidth / 2) - 50;
                    x = (Math.abs(x) - vw) / this.startObj.sumMax;
                }


                console.log("step x=" + x + ",y=" + y);
                requestAnimationFrame(this.animate.bind(this, { x: x, y: y }));
            },
            animate(step) {
                
                this.startObj.sum++;
                scrollBy(step.x, step.y);
                if (this.startObj.sum < this.startObj.sumMax) {
                    //行走中
                    console.log("1")
                    requestAnimationFrame(this.animate.bind(this, step));
                } else {
                    //到达目的地
                    console.log(this.startObj.sumMax * step.y, 6666);
                    this.flag = true;
                    this.isChoice = true;
                    //开始计时
                    this.startCountdown();

                }

            },
            load(mapName, number) {
                //加载地图、 分配玩家位置

                //随机下标数组
                let mapRandom = [];
                let virtualPlayersRandom = [];

                this.user = [];
                Object.assign(this.map, map[mapName]);
                if (number <= this.map.location.length) {

                    //生成地图下标数组 并打乱
                    for (let i = this.map.location.length - 1; i >= 0; i--) {
                        mapRandom.push(i);
                    }
                    mapRandom.sort(function () {
                        return Math.random() - 0.5;
                    })

                    //生成人物下标数组 并打乱
                    for (let i = virtualPlayers.length - 1; i >= 0; i--) {
                        virtualPlayersRandom.push(i);
                    }
                    virtualPlayersRandom.sort(function () {
                        return Math.random() - 0.5;
                    })


                    //根据打乱后的下标讲人物添加到地图上
                    for (let i = 0; i < number; i++) {
                        var obj = {score:0};
                        Object.assign(obj, this.map.location[mapRandom[i]], virtualPlayers[virtualPlayersRandom[i]]);
                        this.user.push(obj);
                        console.log("名字:" + obj.name + ",x=" + obj.x + ",y" + obj.y);
                    }

                }
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                let map = lib.ls.get("map")
                vm.load(map.englishName, map.location.length);
                vm.problems = JSON.parse(JSON.stringify(problems));
                console.log(vm.problems, 412)
            })
        },
        beforeRouteLeave(to, from, next) {
            //离开时初始化样式
            this.hide();
            this.endCountdown();
            this.isPlay = true;
            this.isChoice = false;
            this.oldUserIndex = 0;
            this.problemIndex = -1;
            
            next();
        }
    }
</script>

<style lang="less">

    @charset "utf-8";
    @import "../assets/css/library.less";
    .map-play {
        position:fixed;
        border:0px;
        color:@white;
        background:@Primary;
        padding:3*@gird 5*@gird;
        border-radius:@border-radius;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        font-size:1.5rem;
        z-index:1000;
    }
    .gameover {
        border:0px;
        color:@white;
        background:@Primary;
        padding:1*@gird 2*@gird;
        background:@Marked;
        position:fixed;
        right:2*@gird;
        top:2*@gird;
        font-size:1.5rem;
        z-index:1000;
    }
    .item {
        width:100px;
        height:100px;
        position:absolute;
        border-radius:100px;
        text-align:center;
        background:rgba(0,0,0,0.5);
        z-index:100;
        img {
            max-width:80%;
            max-height:80%;
            position:absolute;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
        }
        span {
            position:absolute;
            width:100%;
            top:-20%;
            left:0;
            text-align:center;
            z-index:500;
            color:white;
            font-size:1.2rem;
            font-weight:900;
        }
    }
  
    .modal {
       
        position:fixed;
        width:80%;
        height:45*@gird;
        background:@white;
        z-index:600;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        .top {
            height:7*@gird;
            background:@Primary;
            line-height:7*@gird;
            color:@white;
            display:flex;
            position:relative;
            .img-box {
                width:7*@gird;
                padding-top:7*@gird;
                position:relative;
                border-radius:100%;
                img{
                    width:100%;
                    height:100%;
                    position:absolute;
                    top:0px;
                    left:0px;
                    padding:4px;
                }
            }
            .countdown {
                color:@white;
                position:absolute;
                font-size:1.5rem;
                right:0px;
                padding-right:3*@gird;
                font-weight:900;
            }
        }
        .content {
            padding:1*@gird;
            font-size:1.1rem;
            height:38*@gird;
            overflow:hidden;
            overflow-y:auto;
            h3 {
                text-indent:2em;
            }
            .answer {   
                display:flex;
                flex-wrap:wrap;
                justify-content:space-between;
                 p{             
                     margin-bottom:3*@gird;
                     width:50%;                  
                 }
            }
            span{
                display:block;
                margin:1*@gird 0;
            }
            .btn-box {
             
                button {
                    float:right;
                    margin:2*@gird 3*@gird 2*@gird 0;
                    border-radius:@border-radius;
                    border:0;
                    color:@white;
                    padding:1*@gird 2*@gird;
                    outline:none;
                }
                .ok {
                    background:@Primary;
                }
                .cancel {
                    background:@LightGray;
                    color:rgba(0,0,0,0.48);
                }
            }
        }
    }
    @keyframes hover-color {
  from {
    border-color: #c0c0c0; }
  to {
    border-color: #3e97eb; } }

.magic-radio,
.magic-checkbox {
  position: absolute;
  display: none; }

.magic-radio[disabled],
.magic-checkbox[disabled] {
  cursor: not-allowed; }

.magic-radio + label,
.magic-checkbox + label {
  position: relative;
  display: block;
  padding-left: 30px;
  cursor: pointer;
  height:22px;
  line-height:20px;
  vertical-align: middle; }
  .magic-radio + label:hover:before,
  .magic-checkbox + label:hover:before {
    animation-duration: 0.4s;
    animation-fill-mode: both;
    animation-name: hover-color; }
  .magic-radio + label:before,
  .magic-checkbox + label:before {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 20px;
    height: 20px;
    content: '';
    border: 1px solid #c0c0c0; }
  .magic-radio + label:after,
  .magic-checkbox + label:after {
    position: absolute;
    display: none;
    content: ''; }

.magic-radio[disabled] + label,
.magic-checkbox[disabled] + label {
  cursor: not-allowed;
  color: #e4e4e4; }
  .magic-radio[disabled] + label:hover, .magic-radio[disabled] + label:before, .magic-radio[disabled] + label:after,
  .magic-checkbox[disabled] + label:hover,
  .magic-checkbox[disabled] + label:before,
  .magic-checkbox[disabled] + label:after {
    cursor: not-allowed; }
  .magic-radio[disabled] + label:hover:before,
  .magic-checkbox[disabled] + label:hover:before {
    border: 1px solid #e4e4e4;
    animation-name: none; }
  .magic-radio[disabled] + label:before,
  .magic-checkbox[disabled] + label:before {
    border-color: #e4e4e4; }

.magic-radio:checked + label:before,
.magic-checkbox:checked + label:before {
  animation-name: none; }

.magic-radio:checked + label:after,
.magic-checkbox:checked + label:after {
  display: block; }

.magic-radio + label:before {
  border-radius: 50%; }

.magic-radio + label:after {
  top: 7px;
  left: 7px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3e97eb; }

.magic-radio:checked + label:before {
  border: 1px solid #3e97eb; }

.magic-radio:checked[disabled] + label:before {
  border: 1px solid #c9e2f9; }

.magic-radio:checked[disabled] + label:after {
  background: #c9e2f9; }

.magic-checkbox + label:before {
  border-radius: 3px; }

.magic-checkbox + label:after {
  top: 2px;
  left: 7px;
  box-sizing: border-box;
  width: 6px;
  height: 12px;
  transform: rotate(45deg);
  border-width: 2px;
  border-style: solid;
  border-color: #fff;
  border-top: 0;
  border-left: 0; }

.magic-checkbox:checked + label:before {
  border: #3e97eb;
  background: #3e97eb; }

.magic-checkbox:checked[disabled] + label:before {
  border: #c9e2f9;
  background: #c9e2f9; }

</style>