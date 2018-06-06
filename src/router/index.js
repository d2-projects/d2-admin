import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'

// import _path from 'path'
import pathPosix from 'path-posix'
import _get from 'lodash.get'
// import _replace from 'lodash.replace'

console.log(pathPosix)

Vue.use(VueRouter)

const path2Posix = pathString => pathString.split(pathPosix.sep).join('/')

const routesMaker = ({publicPath, namePrefix, req}) => {
  return req.keys().map(req).map(page => {
    // 每个文件的路径
    const pagePath = pathPosix.dirname(page.default.__file)
    console.log('pagePath', pagePath)
    // 每个文件的路径 => posix 风格
    const pagePathPosix = path2Posix(pagePath)
    console.log('pagePathPosix', pagePathPosix)
    // 路由中使用的路径
    const path = pagePathPosix.replace(publicPath, '').replace(new RegExp(`${pathPosix.sep}page${pathPosix.sep}`, 'g'), pathPosix.sep)
    console.log('path', path)
    const name = namePrefix + path.split(pathPosix.sep).join('-').replace(/-page-/g, '-')
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
    children: routesMaker({
      publicPath: 'src/pages/demo/plugins/',
      namePrefix: 'demo-plugins-',
      req: require.context('@/pages/demo/plugins', true, /page\.vue$/)
    })
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
