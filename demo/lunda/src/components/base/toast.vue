<template>
    <transition name='fade'>
    <div v-show='visible' :class='position' class='toast'>
         <i>{{message}}</i>
    </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                visible: false,
                message : '',
                position : ''
            };
        }
    }
</script>


<style>
.toast {
    position: fixed;
    left:50%;
    transform:translate(-50%,-50%) scale(1);
    word-wrap:break-word;
    padding:10px;
    text-align: center;
    z-index:9999;
    font-size:.3rem;
    max-width:80%;
    color: #fff;
    border-radius: 5px;
    background: rgba(0,0,0,0.7);
    overflow: hidden;
}
.toast.middle{
    top:50%;
}
.toast.top{
    top:10%;
}
.toast.bottom{
    top:90%;
}
.fade-enter-active, .fade-leave-active {
  transition: transform .5s
}
.fade-enter, .fade-leave-active {
  transform:translate(-50%,-50%) scale(0);
}
</style>