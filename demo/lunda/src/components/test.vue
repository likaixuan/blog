<template>
  <div>
      <div class="header" @click="bbb">我是一个导航</div>
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

  export default {
    
    name: 'app',
    data() {
      return {
       
      }
    },
    props:{
        nnn:{
            default:"lkx"
        }
    },
    methods:{
       bbb() {
             this.$emit("dddd","11111");
       }
    },
    mounted: function () {
     
      
    }
  }
</script>

<style lang="less" scoped>
@charset "utf-8";
/*@import "../assets/css/library.less";
div{
 
}*/
.header{
    background:red;
    height:500px;
    width:400px;
}

</style>