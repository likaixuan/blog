/*
 *----------------------------
 * 主入口
 *----------------------------
 * @author likaixuan
 * @date 2017/04/24
 * 
 */
import Vue from 'vue'



import * as lib from "./lib.js"
import App from './App'
import "./components.js"
import router from './router.js'
import "./assets/css/iconfont.css"
import './axios.js'




window.lib = lib;

//静态资源服务器
import { host } from "./config"
window.staticHost = host;



//引入vuex
//import store from './store/index.js'

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})

