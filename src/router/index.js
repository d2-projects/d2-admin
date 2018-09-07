import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store/index'

import util from '@/libs/util.js'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css'// 进度条样式

// 路由数据
import routes from './routes'

NProgress.configure({ showSpinner: false }) // 进度条配置

Vue.use(VueRouter)

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  routes
})

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach((to, from, next) => {
  NProgress.start() // 进度条开始
  // 关闭搜索面板
  store.commit('d2admin/search/set', false)
  // 验证当前路由所有的匹配中是否需要有登录验证的
  if (to.matched.some(r => r.meta.requiresAuth)) {
    // 这里暂时将cookie里是否存有token作为验证是否登录的条件
    // 请根据自身业务需要修改
    const token = util.cookies.get('token')
    if (token && token !== 'undefined') {
      if (store.state.d2admin.menu.pool.length === 0) {
        store.dispatch('d2admin/user/getUserInfo').then(res => {
          // 用户登录后从数据库加载一系列的设置
          store.commit('d2admin/account/load')
          next({ ...to, replace: true })
        }).catch((err) => {
          console.log(err)
          Message.error('Token失效，重新登录')
          store.dispatch('d2admin/account/logout', { vm: router.app })
        })
      } else {
        // 判断用户是否有浏览此路径的权限
        // 根据菜单路径判断
        if (store.state.d2admin.menu.pool.indexOf(to.fullPath) >= 0) {
          next()
        } else {
          next({ path: '/401', replace: true })
          NProgress.done()
        }
        // 可删 ↑
      }
    } else {
      // 将当前预计打开的页面完整地址临时存储 登录后继续跳转
      // 这个 cookie(redirect) 会在登录后自动删除
      util.cookies.set('redirect', to.fullPath)
      // 没有登录的时候跳转到登录界面
      next({
        name: 'login'
      })
      NProgress.done()
    }
  } else {
    // 不需要身份校验 直接通过
    next()
  }
})

router.afterEach(to => {
  NProgress.done()
  // 需要的信息
  const { name, params, query } = to
  // 多页控制 打开新的页面
  store.commit('d2admin/page/open', { name, params, query })
  // 更改标题
  util.title(to.meta.title)
})

export default router
