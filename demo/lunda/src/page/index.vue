<template>
    <div>
        <div class="header">
            <div class="user-box">
                <div class="user-header">
                    <img src="../assets/img/header.png" alt="">
                </div>
                <div class="user-info">
                    <div class="name">
                        LuoYuFeng
                    </div>
                    <div class="address">
                        莲花乡小二楼
                    </div>
                </div>
            </div>
            <i class="iconfont">&#xe631;</i>
        </div>
        <div class="content1">
            <img src="../assets/img/back.png" alt="">
            <!--<div class="data">
                <div class="">
                    <i class="iconfont">
                        &#xe6d6;
                    </i>
                    室外
                </div>
            </div>-->
        </div>
        <div class="content2">
            <div class="list" v-for="item in list" @click="emit">
                <div class="title">
                    <img :src="item.src" alt="">
                    <div style=" "> </div>
                </div>
                <div class="info">
                    <h2>客厅</h2>
                    <div class="data">
                        <div>温度&nbsp:&nbsp{{item.temperature}}</div>
                        <div>湿度&nbsp:&nbsp{{item.humidity}}</div>
                        <div class="co2">CO2&nbsp:&nbsp{{item.co2}}</div>
                        <div>PM2.5&nbsp:&nbsp{{item.pm2}}</div>
                    </div>
                </div>
                <div class="triangle" style="border-top:2.5rem solid #AED581;">
                    <span>···</span>
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
    import test from "../components/test.vue";
    export default {

        name: 'app',
        data() {
            return {
                list:[{
                    src:require("../assets/img/list3.png"),
                    temperature:"33℃",
                    co2:"222ppm",
                    humidity:"33℃",
                    pm2:"320㎎/m³"
                },{
                    src:require("../assets/img/list1.png"),
                    temperature:"33℃",
                    co2:"222ppm",
                    humidity:"33℃",
                    pm2:"320㎎/m³"
                },{
                    src:require("../assets/img/list2.png"),
                    temperature:"33℃",
                    co2:"222ppm",
                    humidity:"33℃",
                    pm2:"320㎎/m³"
                }]
            }
        }, components: {
            "kx": test
        },
        methods: {
            fun(index) {
                alert(index);
            },
            emit() {
           this.$socket.emit("login",{"pwd":"fuck you!"});
            }
                },
        mounted: function () {
           this.$socket.on("login",req=> {
  console.log(req);
});

             
        }
    }
</script>

<style lang="less">

 @charset "utf-8";
 @import "../assets/css/library.less";
 

 .content1 {
     height:auto;
     img{
         width:100%;
         max-height:200px;
     }
 }
 .content2 {
     padding:1*@gird;
     .list{
         height:6.5rem;
         border-radius:@border-radius;
         background:@white;
         margin-bottom:2*@gird;
         display:flex;
         align-items: center;
         box-shadow:@Shadow1;
         position: relative;
         .title{
             width:5.5rem;
             padding-top:5.5rem;
             position: relative;
             margin:0px 1*@gird 0px 1*@gird;
             img {
                  position: absolute;
                  width:100%;
                  height:100%;
                  top:0px;
             }
             /*height:100%;
             width:25%;
             color:@white;
             display:flex;
             justify-content:center;
              box-sizing: border-box;
             align-items: center;
              padding:1*@gird;
               position: relative;
             div {
                 position: absolute;
                 left:1*@gird;
                 right:1*@gird;
                 top:1*@gird;
                 bottom:1*@gird;
                 display:flex;
                 justify-content:center;
                 align-items: center;
             }
             img {
                 height:100%;
                 width:100%;
                
             }*/
          
         }
         .info {
             font-size:0.8rem;
             width:75%;
             display:flex;
             align-content: center;
             flex-wrap:wrap;
             h2{
                 font-weight:400;
                 font-size:1.2rem;
                 width:100%;
                 margin:0px;
             }
            .data {
                margin-top:1*@gird;
                 display:flex;
                 justify-content:space-between;
                 flex-wrap:wrap;
              
                 >div {
                     width:50%;
                     text-align:left;
                 }
              
             }
         }
         .triangle {
            width: 0;
            height: 0;
            border-top:2.5rem solid #CDDC39;
            border-left:2.5rem solid transparent; 
            position:absolute;
            text-align:center;
            right:0px;
            top:0px;
            span{
                 position:absolute;
                 top:-2.5rem;
                 right:0.5rem;
                 color:@white;
                 font-weight:500;
            }
         }
     }

 }

</style>