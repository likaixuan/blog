/**
 *
 axios配置 2017/05/16
 *
 @author likaixuan
 */

import {devUrl} from "./config"

const BASE = devUrl;

import router from './router.js'
import Vue from 'vue';
import axios from 'axios';
import Qs from 'qs'
import loading from "./components/base/loading"
Vue.use(loading);

Vue.prototype.$http = axios.create({
    baseURL: BASE,
    timeout: 60000,
    transformRequest: [function (data) {
        if(data instanceof FormData) {
            return data;
        }
        return Qs.stringify(data);
    }]
});

// //拦截请求
Vue.prototype.$http.interceptors.request.use(config => {
    loading.open();
    return config;
}, error => {
    loading.close();
    return Promise.reject(error);
});

//拦截响应
Vue.prototype.$http.interceptors.response.use(response => {
    loading.close();
    if (response.data.errMessage === "未登陆或你的操作被终止，请重新登陆！") {
        //未登录跳转到登陆
        router.replace('/')
    }
    return response;
}, error => {
      loading.close();
    return Promise.reject(error);
});