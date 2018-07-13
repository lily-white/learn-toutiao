import {footerList, menuList} from './menu.js'
import axios from '@/utils/fetch.js'
import Vue from 'vue'

const DEL_MENU = 'DEL_MENU'
const ADD_MENU = 'ADD_MENU'
const GET_HOME_LIST = 'GET_HOME_LIST'

const home = {
	state: {
		footerList,
	    menuList: menuList.slice(0, 12),
	    menuIndex: 0,
	    newsList: null
	},
	actions: {
		delMenu({commit}, menu) {
			commit(DEL_MENU, menu);
		},
		addMenu({commit}, menu) {
			commit(ADD_MENU, menu);
		},
		getHomeList({commit, state}) {
			axios.get('home/list', state.menuList[state.menuIndex])
				 .then(res => {
				 	commit(GET_HOME_LIST, res.data.data.list)
				 })
		}
	},
	mutations: {
		[DEL_MENU](state, menu) {
			const index = state.menuList.findIndex(item => item.title === menu.title);
			state.menuList.splice(index, 1);
		},
		[ADD_MENU](state, menu) {
			state.menuList.push(menu);
		},
		[GET_HOME_LIST](state, list) {
			state.newsList = list;

			// Vue.$set(state.menuList, state.menuIndex, list);
		}
	}
}

export default home