import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.js'
import search from './modules/search.js'
import getters from './getters.js'

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		home,
		search
	},
	getters
});

export default store