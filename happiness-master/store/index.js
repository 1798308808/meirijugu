import Vuex from 'vuex'
import Vue from 'vue'
import common from './common.js'
import user from './user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		common,
		user
	},
})

export default store
