<template>
  <div class="yeye" id="yeye">
    <div class="baba">
      <div class="erzi">
        <div class="sunzi">

        </div>
      </div>
    </div>
    <div class="nav nav1" id="a">1</div>
    <div class="nav nav2" id="b">2</div>
    <div class="nav nav3" id="c">3</div>
    <div class="nav nav4" id="d">4</div>
    <div class="nav nav5" id="e">5</div>
    <div class="nav nav6" id="f">6</div>
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

      }
    },
    mounted: function () {
      
      let R = parseInt(yeye.offsetWidth/2);
      var nav = document.getElementsByClassName("nav");
      console.log(R);

      let ox = 214,oy =214;
      

      for(var i = 0;i<nav.length;i++) {
          console.log((i+1)*60);
          var x =ox+ R * Math.cos(i*60*Math.PI/180);
          var y =oy+ R * Math.sin(i*60*Math.PI/180);
          nav[i].style.left = x +"px";
          nav[i].style.top = y +"px";
          nav[i].style.background = "blue";
           nav[i].style.transform="translate(-50%,-50%)";
      }

     
    }
  }
</script>
<style lang="less" scoped> 
  .yeye {
				width:30%;
				padding-top:30%;
				background:red;
        position:absolute;
        left:50%;
        top:50%;
        border-radius:100%;
        transform:translate(-50%,-50%);
        .baba {
          	width:75%;
            padding-top:75%;
            background:blue;
            position:absolute;
            left:50%;
            top:50%;
            border-radius:100%;
            transform:translate(-50%,-50%);
            .erzi {
                width:70%;
                padding-top:70%;
                background:green;
                position:absolute;
                left:50%;
                top:50%;
                border-radius:100%;
                transform:translate(-50%,-50%);
                .sunzi {
                    width:70%;
                    padding-top:70%;
                    background:gold;
                    position:absolute;
                    left:50%;
                    top:50%;
                    border-radius:100%;
                    transform:translate(-50%,-50%);
                  }
                }
                
             } 
             .nav{
               width:100px;
               height:100px;
              
               position:absolute;
             
               border-radius:100%;
             }
             .nav1 {
                background:green;
                left:0px;
                top:0px;
               transform:translate(0%,0);
             }
             .nav2 {
                background:lightcoral;
                right:0px;
                top:50%;
                transform:translate(50%,-50%);
             }
              .nav3 {
                background:lightcoral;
                right:50%;
                top:0;
                transform:translate(50%,-50%);
             }
              .nav4 {
                background:lightcoral;
                right:50%;
                bottom:0;
                transform:translate(50%,50%);
             }
               .nav5 {
                background:lightcoral;
                right:0;
                bottom:0;
                transform:translate(0,-50%);
             }
			}
</style>