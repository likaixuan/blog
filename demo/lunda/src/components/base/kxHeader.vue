<template>
  <div class="header">
      <div class="header-left">
          <slot name="left"></slot>
      </div>
      <div class="header-center">
           <slot></slot>
      </div>
      <div class="header-right">
           <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
  /*
   *----------------------------
   * 导航组件
   *----------------------------
   * @author likaixuan
   * @date 2017/06/12
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

    },
    mounted: function () {
     
      
    }
  }
</script>

<style lang="less">
@charset "utf-8";
@import "../../assets/css/library.less";
 .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  /*.header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
 .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }
  .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     display:flex;
     padding:1*@gird 2*@gird;
     justify-content:space-between;
     align-items: center;
     font-size:1.3rem;
     .header-left {
         min-width:4*@gird;
           text-align:center;
     }
     .header-center {
      
     }
     .header-right {
         min-width:4*@gird;
         text-align:center;
     }
     i {
        vertical-align:middle;
     }
 }*/
</style>