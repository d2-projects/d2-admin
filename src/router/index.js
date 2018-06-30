import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'

import util from '@/libs/util.js'

// 路由数据
import routes from './routes'

Vue.use(VueRouter)

let router = new VueRouter({ routes })

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach((to, from, next) => {
  // 验证当前路由所有的匹配中是否需要有登陆验证的
  if (to.matched.some(r => r.meta.requiresAuth)) {
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

// TODO: 路由跳转后自动滚动到顶部
router.afterEach(to => {
  // 需要的信息
  const app = router.app
  const { name, params, query } = to
  // dev
  console.group('router.afterEach')
  console.log('app: ', app)
  console.log('name: ', name)
  console.log('params: ', params)
  console.log('query: ', query)
  console.groupEnd()
  // 多页控制 打开新的页面
  util.openNewPage(app, name, params, query)
})

export default router
