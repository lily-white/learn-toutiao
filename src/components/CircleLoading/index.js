import Vue from 'vue'
import CircleLoading from './index.vue'

const LoadingConstructor = Vue.extend(CircleLoading);

let initComponent;

export const showCircleLoading = (options = {}) => {
	initComponent = new LoadingConstructor();
	initComponent.$mount();
	document.querySelector(options.container || 'body').appendChild(initComponent.$el);
}

export const hideCircleLoading = (options = {}) => {
	initComponent.$el.parentNode.removeChild(initComponent.$el);
}