import Vue from 'vue'
import Vuex from 'vuex'
import {footerList, menuList} from './modules/menu.js'

Vue.use(Vuex);

const state = {
	footerList,
    menuList: menuList.slice(0, 12),
    menuIndex: 0
};

export default new Vuex.Store({state})