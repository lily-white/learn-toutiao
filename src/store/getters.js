const getters = {
	/*首页*/
	footerList: state => state.home.footerList,
    menuList: state => state.home.menuList,
    menuIndex: state => state.home.menuIndex,
    newsList: state => state.home.newsList
}

export default getters