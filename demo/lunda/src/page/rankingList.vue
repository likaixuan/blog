<template>
    <div class="rankingList">
        <kx-header>
            <div slot="left">
                 <i class="iconfont" onclick="window.history.back()">&#xe660;</i>  
            </div>
            <div>
               排行榜
            </div>
            <!--<div slot="right">
               <i class="iconfont">&#xe631;</i>
            </div>-->
        </kx-header>
        <div class="container">
            <div class="list" v-for="(item,index) in virtualPlayers">
                <div class="img-box">
                    <img :src="item.headerSrc" alt="" class="src">
                </div>
                <div class="info">
                    <h3> {{item.name}}</h3>
                    <p>
                        <template v-if="item.score>0">
                            答对&nbsp{{item.score}}&nbsp道题
                        </template>
                          <template v-else-if="item.score===0">
                            没有答过题
                        </template>
                          <template v-else>
                            答错&nbsp{{item.score*-1}}&nbsp道题
                        </template>
                    </p>
                </div>
                <div class="ranking" :class="{ranking1:index===0,ranking2:index===1,ranking3:index===2}">
                       {{index*1+1}}
                </div>
            </div>
        </div>
      
</div>
</template>

<script>
    /*
     *----------------------------
     * 排行榜单
     *----------------------------
     * @author likaixuan
     * @date 2017/06/12
     * 
     */

    import {virtualPlayers} from "../data/virtualPlayer.js"
    console.log(virtualPlayers)
    export default {

        name: 'app',
        data() {
            return {
                virtualPlayers:[]
            }
        }, 
        methods: {
           
        },
        mounted: function () {

        
             
        },beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.virtualPlayers = lib.ls.get("rankingList");
                console.log( vm.virtualPlayers)
                vm.virtualPlayers.sort( function (a,b)
                    {
                    return b.score - a.score;
                    })
                })
                window.scrollTo(0,0);
        },
    }
</script>
<style lang="less" scoped>
   @import "../assets/css/library.less";
    .rankingList {
        min-height:100%;
        background:@white;
    }
    .list {
       margin:2*@gird 1*@gird 0;
       display:flex;
       align-items: center;
       justify-content:space-between;
       
       height:7*@gird;
        .img-box {
            min-width:18%;
            max-width:18%;
            padding-top:18%;
            position:relative;
            img {
                position:absolute;
                height:100%;
                width:100%;
                top:0px;
                left:0px;
                /*box-shadow:@Shadow1;*/
                border-radius:100%;
            
            }
        }
        .info {
            min-width:70%;
            padding:0 3*@gird 0 2*@gird;
            font-size:1.1rem;
            p{
                margin-top:1*@gird;
                color:@Gray;
            }
        }
        .ranking {
              
                min-width:3*@gird;
                height:3*@gird;
                border-radius:100%;
                text-align:center;
                line-height:3*@gird;
                font-weight:600;
                  background:@LightGray;
          
            }
     
       .ranking1{
           background:@DarkMarked;
           color:@white;
       }
       .ranking2{
           background:@Primary;
           color:@white;
       }
       .ranking3{
           background:@Fresh;
           color:@white;
       }
    }
</style>