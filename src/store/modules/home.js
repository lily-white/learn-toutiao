import {footerList, menuList} from './menu.js'
const DEL_MENU = 'DEL_MENU'
const ADD_MENU = 'ADD_MENU'

const home = {
	state: {
		footerList,
	    menuList: menuList.slice(0, 12),
	    menuIndex: 0
	},
	actions: {
		delMenu({commit}, menu) {
			commit(DEL_MENU, menu);
		},
		addMenu({commit}, menu) {
			commit(ADD_MENU, menu);
		}

	},
	mutations: {
		[DEL_MENU](state, menu) {
			const index = state.menuList.findIndex(item => item.title === menu.title);
			state.menuList.splice(index, 1);
		},
		[ADD_MENU](state, menu) {
			state.menuList.push(menu);
		}
	}
}

export default home