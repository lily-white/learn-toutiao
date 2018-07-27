const getters = {
	/*首页*/
	footerList: state => state.home.footerList,
    menuList: state => state.home.menuList,
    menuIndex: state => state.home.menuIndex,
    newsList: state => state.home.newsList,

    /*搜索页*/
    keyword: state => state.search.keyword,
    updateKeyword: state => state.search.updateKeyword
}

export default getters