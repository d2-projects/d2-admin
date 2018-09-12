import Vue from 'vue'
import VueRouter from 'vue-router'

// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'

import store from '@/store/index'

import util from '@/libs/util.js'

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
  // 这里暂时将cookie里是否存有token作为验证是否登录的条件
  // 请根据自身业务需要修改
  // 获取当前用户的 token
  const token = util.cookies.get('token')
  // 检验逻辑
  if (token && token !== 'undefined') {
    // token 存在 代表当前用户已经登陆
    if (to.path === '/login') {
      next('/')
      NProgress.done()
    } else {
      if (store.state.d2admin.menu.header.length === 0) {
        // vuex 中不存在可以打开的页面池（一般是刚刷新）
        store.dispatch('d2admin/user/getUserInfo')
          .then(() => {
            router.addRoutes(store.state.d2admin.router.addRoutes)
            next({ ...to, replace: true })
            NProgress.done()
          }).catch(err => {
            console.log(err)
            Message.error('Token失效，重新登录')
            store.dispatch('d2admin/account/logout', { vm: router.app })
            NProgress.done()
          })
      } else {
        next()
      }
    }
  } else {
    // token 不存在 代表当前用户登陆状态不合法
    if (to.path === '/login') {
      next()
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
