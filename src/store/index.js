import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.js'
import getters from './getters.js'

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		home
	},
	getters
});

export default store