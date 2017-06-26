/*
 *----------------------------
 * 路由配置
 *----------------------------
 * @author likaixuan
 * @date 2017/04/24
 * 
 */
import Vue from 'vue'
import Router from 'vue-router'

import index from "./page/index.vue"
import login from "./page/login.vue"
import register from "./page/register.vue"
import map from "./page/map.vue"
import selectMap from "./page/selectMap.vue"
import rankingList from "./page/rankingList.vue"

Vue.use(Router)

export default new Router({
  routes: [ 
    { path: '/', redirect: '/selectMap' },
    { path: '/login', component: login }, 
    { path: '/reg', component: register },
    {path: '/selectMap', component: selectMap},
    { path: '/map', component:map },
    { path: '/rankingList', component:rankingList },
    ]
})


