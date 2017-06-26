/**
 *
 全局注册组件 2017/04/24
 *
 @author likaixuan
 */
import Vue from 'vue'

import kxHeader from './components/base/kxHeader.vue'
import kxModal from './components/base/kxModal.vue'

Vue.component("kxHeader",kxHeader);


Vue.component("kxModal",kxModal);


// 圆点坐标：(x0,y0) 
// 半径：r 
// 角度：a0 

// 则圆上任一点为：（x1,y1） 
// x1   =   x0   +   r   *   cos(ao   *   3.14   /180   ) 
// y1   =   y0   +   r   *   sin(ao   *   3.14   /180   ) 