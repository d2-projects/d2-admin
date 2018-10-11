import playground from './modules/playground'
import frame from './modules/frame'
import d2Crud from './modules/d2-crud'
import plugins from './modules/plugins'
import charts from './modules/charts'
import components from './modules/components'
import element from './modules/element'
import business from './modules/business'

import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      {
        path: 'index',
        name: 'index',
        meta,
        component: () => import('@/pages/index')
      }
    ]
  },
  playground,
  frame,
  d2Crud,
  plugins,
  charts,
  components,
  element,
  business
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 页面重定向使用 必须保留
  {
    path: '/redirect/:path*',
    component: {
      beforeCreate () {
        const path = this.$route.params.path
        this.$router.replace(JSON.parse(path))
      },
      render: function (h) {
        return h()
      }
    }
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  // 404
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/error-page-404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
