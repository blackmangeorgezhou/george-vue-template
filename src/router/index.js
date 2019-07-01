import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: '主页',
      path: '/index',
      component: HomePage
    },
    {
      path: '/',
      redirect: '/index'
    }
  ]
})
