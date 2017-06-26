/**
 * 
 * 加载lodding
 * 
 * Created by likaixuan on 2017/6/22.
 */

import Vue from "vue"
import zfToast from './src/toast';

let obj = {};

zfToast.install = function (Vue) {

  obj = new ( Vue.extend(zfToast) )({
    el: document.createElement('div'),
  });


  zfToast.open =  ()=> {
      obj.show = true;
  }
  zfToast.close =  ()=> {
      obj.show = false;
  }

  document.body.appendChild(obj.$el);
};

export default zfToast
