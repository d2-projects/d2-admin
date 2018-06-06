import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    redirect: { name: 'index' },
    component: () => import('@/components/core/MainLayout/index.vue'),
    children: [
      {
        path: 'index',
        name: 'index',
        meta: { requiresAuth: true },
        component: () => import('@/pages/core/index/index.vue')
      }
    ]
  },
  {
    path: '/demo/plugins',
    name: 'demo-plugins',
    meta: { requiresAuth: true },
    redirect: { name: 'demo-plugins-index' },
    component: () => import('@/components/core/MainLayout/index.vue'),
    children: ((pre) => [
      { path: 'build', name: `${pre}build`, component: () => import('@/pages/demo/plugins/build/index.vue') },
      { path: 'clipboard-polyfill', name: `${pre}clipboard-polyfill`, component: () => import('@/pages/demo/plugins/clipboard-polyfill/index.vue') },
      { path: 'export/table', name: `${pre}export-table`, component: () => import('@/pages/demo/plugins/export/table.vue') },
      { path: 'export/txt', name: `${pre}export-txt`, component: () => import('@/pages/demo/plugins/export/txt.vue') },
      { path: 'i18n/demo1', name: `${pre}i18n-demo1`, component: () => import('@/pages/demo/plugins/i18n/demo1.vue') },
      { path: 'i18n/demo2', name: `${pre}i18n-demo2`, component: () => import('@/pages/demo/plugins/i18n/demo2.vue') },
      { path: 'i18n/doc', name: `${pre}i18n-doc`, component: () => import('@/pages/demo/plugins/i18n/doc.vue') },
      { path: 'import/csv', name: `${pre}import-csv`, component: () => import('@/pages/demo/plugins/import/csv.vue') },
      { path: 'import/xlsx', name: `${pre}import-xlsx`, component: () => import('@/pages/demo/plugins/import/xlsx.vue') },
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/plugins/index/index.vue') },
      { path: 'js-cookie', name: `${pre}js-cookie`, component: () => import('@/pages/demo/plugins/js-cookie/index.vue') },
      { path: 'layout/grid', name: `${pre}layout-grid`, component: () => import('@/pages/demo/plugins/layout/grid.vue') },
      { path: 'layout/splitpane', name: `${pre}layout-splitpane`, component: () => import('@/pages/demo/plugins/layout/splitpane.vue') },
      { path: 'mock/ajax', name: `${pre}mock-ajax`, component: () => import('@/pages/demo/plugins/mock/ajax.vue') },
      { path: 'mock/dpd', name: `${pre}mock-dpd`, component: () => import('@/pages/demo/plugins/mock/dpd.vue') },
      { path: 'mock/dtd', name: `${pre}mock-dtd`, component: () => import('@/pages/demo/plugins/mock/dtd.vue') },
      { path: 'timeago', name: `${pre}timeago`, component: () => import('@/pages/demo/plugins/timeago/index.vue') }
    ])('demo-plugins-')
  },
  // 登陆
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/core/login/index.vue')
  }
]

console.log(routes)

let router = new VueRouter({ routes })

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
