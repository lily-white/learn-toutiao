import {footerList, menuList} from './menu.js'

const home = {
	state: {
		footerList,
	    menuList: menuList.slice(0, 12),
	    menuIndex: 0
	}
}

export default home