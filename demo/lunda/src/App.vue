<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
    mounted: function () {

    }
  }
</script>

<style lang="less">

 @import "./assets/css/library.less";
 html,
 body,
 ul,
 li,
 img,
 p,
 h1,
 h2,
 h3,
 h4,
 h5,
 h6,div{
  padding:0px;
  margin:0px;
  border:0px;
  font-family:"微软雅黑";
  box-sizing: border-box;
  word-break:break-all;
}
html,body,#app{
  height:100%;
  width:100%;
  background:@LightGray;
}
 ::-webkit-scrollbar{width: 0;}
 
@media screen and (min-width:300px) and (max-width:375px) {
  html {
    font-size: 11px
  }
}

@media screen and (min-width:376px) and (max-width:414px) {
  html {
    font-size: 12px
  }
}

@media screen and (min-width:415px) and (max-width:639px) {
  html {
    font-size: 15px
  }
}

@media screen and (min-width:640px) and (max-width:719px) {
  html {
    font-size: 20px
  }
}



</style>