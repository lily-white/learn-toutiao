import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/Layout/index.vue'
import Index from '@/pages/Index/index.vue'
import Search from '@/pages/Search/index.vue'
import Video from '@/pages/Video/index.vue'
import Article from '@/pages/Article/index.vue'
import Account from '@/pages/Account/index.vue'
import Record from '@/pages/record/index.vue'

Router.prototype.animate = 0;
Vue.use(Router)

/*
** slide 页面切换动画
*/
const routes = [
    {
      path: '/',
      name: 'index',
      component: Layout,
      children: [
      	{path: '', component: Index}
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        slide: 1
      }
    },
    {
      path: '/video',
      name: 'video',
      component: Layout,
      children: [
        {path: '', component: Video}
      ]
      
    },
    {
      path: '/article/:articleId',
      name: 'article',
      component: Article,
      meta: {
        slide: 1
      }
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      meta: {
        slide: 1
      }
    },
    {
      path: '/record',
      name: 'record',
      component: Record,
      meta: {
        slide: 1
      }
    }
];

export default new Router({
  routes: routes
})
