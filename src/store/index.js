import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	footerList: [
        {title: '首页', icon: 'home', path: '/home'},
        {title: '西瓜视频', icon: 'video', path: '/video'},
        {title: '微头条', icon: 'comment', path: '/headline'},
        {title: '我的', icon: 'account', path: '/account'}
    ]
};

export default new Vuex.Store({state})