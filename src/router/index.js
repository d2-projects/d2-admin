import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'

Vue.use(VueRouter)

const res = require.context('@/pages/demo/plugins', true, /page\.vue$/)
console.log(res.keys().map(res))

let router = new VueRouter({
  routes: [
    // 首页
    {
      path: '/',
      redirect: { name: 'index' },
      component: resolve => { require(['@/components/core/MainLayout/index.vue'], resolve) },
      children: [
        {
          path: 'index',
          name: 'index',
          meta: { requiresAuth: true },
          component: resolve => { require(['@/pages/core/index/index.vue'], resolve) }
        }
      ]
    },
    {
      path: '/demo/plugins',
      name: 'demo-plugins',
      meta: { requiresAuth: true },
      redirect: { name: 'demo-plugins-index' },
      component: resolve => { require(['@/components/core/MainLayout/index.vue'], resolve) },
      children: [
        {
          path: 'index',
          name: 'demo-plugins-index',
          meta: { requiresAuth: true },
          component: resolve => { require(['@/pages/demo/plugins/index/index.vue'], resolve) }
        }
      ]
    },
    // 登陆
    {
      path: '/login',
      name: 'login',
      component: resolve => { require(['@/pages/core/login/index.vue'], resolve) }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 需要身份校验
  if (to.meta.requiresAuth) {
    // 这里暂时将cookie里是否存有token作为验证是否登陆的条件
    // 请根据自身业务需要修改
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
