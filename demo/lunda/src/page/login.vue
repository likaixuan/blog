<template>
  
  <div class="yeye" id="yeye">
    <div class="border" @click="aaa">112233</div>
    <kx-modal :show="isModal">

    </kx-modal>
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
    data() {
      return {
        isModal:false
      }
    },
    methods:{
      aaa () {
        this.isModal =true;
      }
    },
    mounted: function () {
    

     
    }
  }
</script>
<style lang="less" scoped> 
.border{
    position: relative;
    border: 4px solid transparent;
    border-radius: 16px;
    background: linear-gradient(orange, violet);
    background-clip: padding-box;
    padding: 10px;
    /* just to show box-shadow still works fine */
    box-shadow: 0 3px 9px black, inset 0 0 9px white;
}
.border::after{
    position: absolute;
    top: -4px; bottom: -4px;
    left: -4px; right: -4px;
    background: linear-gradient(red, blue);
    content: '';
    z-index: -1;
    border-radius: 16px;
}
 
</style>