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
    path: '/demo/components',
    name: 'demo-components',
    meta: { requiresAuth: true },
    redirect: { name: 'demo-components-index' },
    component: () => import('@/components/core/MainLayout/index.vue'),
    children: ((pre) => [
      { path: 'container/full', name: `${pre}container-full`, component: () => import('@/pages/demo/components/container/full.vue') },
      { path: 'container/ghost', name: `${pre}container-ghost`, component: () => import('@/pages/demo/components/container/ghost.vue') },
      { path: 'container/normal', name: `${pre}container-normal`, component: () => import('@/pages/demo/components/container/normal.vue') },
      { path: 'countup', name: `${pre}countup`, component: () => import('@/pages/demo/components/countup/index.vue') },
      { path: 'editor-quill', name: `${pre}editor-quill`, component: () => import('@/pages/demo/components/editor-quill/index.vue') },
      { path: 'editor-simpleMDE', name: `${pre}editor-simpleMDE`, component: () => import('@/pages/demo/components/editor-simpleMDE/index.vue') },
      { path: 'highlight', name: `${pre}highlight`, component: () => import('@/pages/demo/components/highlight/index.vue') },
      { path: 'icon/icon', name: `${pre}icon-icon`, component: () => import('@/pages/demo/components/icon/icon.vue') },
      { path: 'icon/list', name: `${pre}icon-list`, component: () => import('@/pages/demo/components/icon/list.vue') },
      { path: 'icon/select', name: `${pre}icon-select`, component: () => import('@/pages/demo/components/icon/select.vue') },
      { path: 'icon/svg', name: `${pre}icon-svg`, component: () => import('@/pages/demo/components/icon/svg.vue') },
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/components/index/index.vue') },
      { path: 'layout/grid', name: `${pre}layout-grid`, component: () => import('@/pages/demo/components/layout/grid.vue') },
      { path: 'layout/splitpane', name: `${pre}layout-splitpane`, component: () => import('@/pages/demo/components/layout/splitpane.vue') },
      { path: 'markdown', name: `${pre}markdown`, component: () => import('@/pages/demo/components/markdown/index.vue') }
    ])('demo-components-')
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
      { path: 'import/csv', name: `${pre}import-csv`, component: () => import('@/pages/demo/plugins/import/csv.vue') },
      { path: 'import/xlsx', name: `${pre}import-xlsx`, component: () => import('@/pages/demo/plugins/import/xlsx.vue') },
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/plugins/index/index.vue') },
      { path: 'js-cookie', name: `${pre}js-cookie`, component: () => import('@/pages/demo/plugins/js-cookie/index.vue') },
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

routes[1].children.forEach(e => {
  console.log(`{ path: \`\${pre}${e.path}\`, title: 'title' }`)
})

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
