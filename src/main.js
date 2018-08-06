import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './utils/rem.js'
import './styles/index.css'

import './utils/iconfont.js'

import InstallComponents from './components/install-components.js'
Vue.use(InstallComponents)

Vue.config.productionTip = false
Vue.prototype.back = (route) => {
	route.animate = 2;
	route.go(-1);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
