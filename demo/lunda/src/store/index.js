/*
 *----------------------------
 * VUEX入口
 *----------------------------
 * @author likaixuan
 * @date 2017/04/25
 * 
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//根
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

//子数据仓库
import user from './module/user.js'
import manage from './module/manage.js'

export default new Vuex.Store({
	modules: {
		user,
		manage
	},
	actions,
	mutations,
	getters

});