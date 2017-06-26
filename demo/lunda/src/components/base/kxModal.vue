<template>
    <div class="kxModal">
        <div class="modal-wrap" @click.stop="isShow()" v-show="show">

        </div>
        <transition name="fade">
            <div class="modal-content" :style="{width:width,padding:padding,background:bgColor}" v-show="show">
                <slot>
                </slot>
            </div>
        </transition>
    </div>
</template>

<script>
    /*
     *----------------------------
     * 模态窗组件
     *----------------------------
     * @author likaixuan
     * @date 2017/04/27
     * 
     */
    export default {
        props: {
            show: {
                default: false
            },
            width: {
                type: String,
                default: "80%"
            },
            bgColor: {
                type: String,
                default: "white"
            },
            padding: {
                type: String,
                default: "1rem"
            }
        },
        computed: {
        },
        methods: {
            isShow: function () {
                this.$emit("close");
            }
        },
        watch: {

        }
    }
</script>

<style lang="less" scoped>
  .modal-wrap{
      position:fixed;
      top:0px;
      bottom:0px;
      left:0px;
      right:0px;
      z-index:1000;
      background:rgba(0,0,0,0.2);
     
  }
   .modal-content {
        position:fixed;
         top:20%;
         left:50%;
         transform:translateX(-50%);
         height:auto;
         z-index:1001;
          
      }
  .fade-enter-active ,.fade-leave-active{
  transition:all .5s ease;
}
.fade-enter, .fade-leave-active{
  transform: translateY(-500px);
}

</style>