import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'

import _path from 'path'
import _get from 'lodash.get'
import _replace from 'lodash.replace'

Vue.use(VueRouter)

const maker = ({publicPath, namePrefix, req}) => {
  return req.keys().map(req).map(page => {
    const path = _replace(_path.dirname(page.default.__file), publicPath, '')
    const name = namePrefix + path.split(_path.sep).join('-')
    return {
      path: `${path}${_get(page, 'router.pathSuffix', '')}`,
      name,
      ...page.router,
      meta: { requiresAuth: true },
      component: page.default
    }
  })
}

const routes = [
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
      ...maker({
        publicPath: 'src/pages/demo/plugins/',
        namePrefix: 'demo-plugins-',
        req: require.context('@/pages/demo/plugins', true, /page\.vue$/)
      })
    ]
  },
  // 登陆
  {
    path: '/login',
    name: 'login',
    component: resolve => { require(['@/pages/core/login/index.vue'], resolve) }
  }
]

console.log(routes)

let router = new VueRouter({
  routes
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
