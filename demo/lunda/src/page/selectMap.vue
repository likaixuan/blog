<template>
    <div>
        <div class="header">
           <div slot="left">
                 <!--<i class="iconfont">&#xe660;</i>  -->
            </div>
            <div>
               选择副本
            </div>
            <div slot="right">
               <!--<i class="iconfont">&#xe631;</i>-->
            </div>
        </div>
        <div class="content">
            <div class="list" v-for="(item,key) in map" @click="play(key)">
                <img :src="item.backSrc" alt="">
                <div>
                    <div class="title">{{item.name}} <span>x&nbsp{{item.location.length}}人</span></div>
                    <div class="introduce">
                        {{item.introduce}}
                    </div>
                </div>

            </div>
        </div>
</div>
</template>

<script>
    /*
     *----------------------------
     * 选择副本
     *----------------------------
     * @author likaixuan
     * @date 2017/06/12
     * 
     */

    import { map } from "../data/map.js"
    export default {
        data() {
            return {
               map:map
            }
        }, 
        methods: {
            play(key) {
                lib.ls.set("map",this.map[key]);
                this.$router.push("/map");
            }
        },
        mounted: function () {


             
        }
    }
</script>

<style lang="less">

 @charset "utf-8";
 @import "../assets/css/library.less";
 

 .content {
   
     .list {
         display:flex;
         height:12*@gird;
         box-shadow:@Shadow1;
         margin:2*@gird;
         background:@white;
          overflow:hidden;
         img {
             width:30%;
             height:100%;
             padding:1*@gird;
         }
         >div {
            padding:1*@gird;
      
            color:@DarkGray;
             .title {
                 font-weight:100;
                 font-size:1.4rem;
                 span {
                     color:@Gray;
                     font-size:1rem;
                 }
             }
            .introduce {
                margin-top:1*@gird;
                color:@Gray;
                padding-bottom:1*@gird;
            }
             
         }
     }
 } 

 

</style>