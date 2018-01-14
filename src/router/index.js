import Vue from 'vue'
import VueRouter from 'vue-router'

// 在菜单中显示的那部分路由
import { router } from '@/router/menu/index.js'
// 不在菜单中显示的那部分路由
import invisibleRouter from './invisible/index.js'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    ...router,
    ...invisibleRouter
  ]
})
