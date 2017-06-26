/**
 * 
 * 加载lodding
 * 
 * Created by likaixuan on 2017/6/22.
 */

import Vue from "vue"
import zfLoading from './src/loading';

let obj = {};

zfLoading.install = function (Vue) {

  obj = new ( Vue.extend(zfLoading) )({
    el: document.createElement('div'),
  });


  zfLoading.open =  ()=> {
      obj.show = true;
  }
  zfLoading.close =  ()=> {
      obj.show = false;
  }

  document.body.appendChild(obj.$el);
};

export default zfLoading
