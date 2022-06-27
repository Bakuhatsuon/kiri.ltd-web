import Vue from 'vue'
import Router from 'vue-router'

import Index from '../Index'
import Login from '../Login'
import IllustsDetail from '../components/IllustsDetail'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/illusts/:illustsId',
      name: 'IllustsDetail',
      component: IllustsDetail
    },
  ]
})
