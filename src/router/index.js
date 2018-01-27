import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'

// 在菜单中显示的那部分路由
import * as menu from '@/router/menu/index.js'
// 不在菜单中显示的那部分路由
import invisible from './invisible/index.js'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    ...menu.router,
    ...invisible
  ]
})

router.beforeEach((to, from, next) => {
  // 需要身份校验
  if (to.meta.requiresAuth) {
    // 这里暂时将cookie里是否存有token作为验证是否登陆的条件 请根据自身业务需要修改
    if (Cookies.get('token')) {
      next()
    } else {
      // 没有登陆的时候跳转到登陆界面
      next({
        name: 'login'
      })
    }
  } else {
    // 不需要身份校验 直接通过
    next()
  }
})

export default router
