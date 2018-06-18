import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'

const meta = { requiresAuth: true }

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    redirect: { name: 'index' },
    component: () => import('@/components/core/d2-layout-main/index.vue'),
    children: [
      {
        path: 'index',
        name: 'index',
        meta,
        component: () => import('@/pages/core/index/index.vue')
      }
    ]
  },
  {
    path: '/demo/business',
    name: 'demo-business',
    meta,
    redirect: { name: 'demo-business-index' },
    component: () => import('@/components/core/d2-layout-main/index.vue'),
    children: (pre => [
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/business/index/index.vue'), meta }
    ])('demo-business-')
  },
  {
    path: '/demo/chart',
    name: 'demo-chart',
    meta,
    redirect: { name: 'demo-chart-index' },
    component: () => import('@/components/core/d2-layout-main/index.vue'),
    children: (pre => [
      { path: 'all', name: `${pre}all`, component: () => import('@/pages/demo/chart/all/index.vue'), meta },
      { path: 'demo/areaBase', name: `${pre}demo-areaBase`, component: () => import('@/pages/demo/chart/demo/areaBase.vue'), meta },
      { path: 'demo/barBase', name: `${pre}demo-barBase`, component: () => import('@/pages/demo/chart/demo/barBase.vue'), meta },
      { path: 'demo/columnBase', name: `${pre}demo-columnBase`, component: () => import('@/pages/demo/chart/demo/columnBase.vue'), meta },
      { path: 'demo/lineBase', name: `${pre}demo-lineBase`, component: () => import('@/pages/demo/chart/demo/lineBase.vue'), meta },
      { path: 'demo/lineStep', name: `${pre}demo-lineStep`, component: () => import('@/pages/demo/chart/demo/lineStep.vue'), meta },
      { path: 'demo/nightingaleRoseBase', name: `${pre}demo-nightingaleRoseBase`, component: () => import('@/pages/demo/chart/demo/nightingaleRoseBase.vue'), meta },
      { path: 'demo/PieBase', name: `${pre}demo-PieBase`, component: () => import('@/pages/demo/chart/demo/PieBase.vue'), meta },
      { path: 'demo/radarBase', name: `${pre}demo-radarBase`, component: () => import('@/pages/demo/chart/demo/radarBase.vue'), meta },
      { path: 'dynamicSize', name: `${pre}dynamicSize`, component: () => import('@/pages/demo/chart/dynamicSize/index.vue'), meta },
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/chart/index/index.vue'), meta }
    ])('demo-chart-')
  },
  {
    path: '/demo/plugins',
    name: 'demo-plugins',
    meta,
    redirect: { name: 'demo-plugins-index' },
    component: () => import('@/components/core/d2-layout-main/index.vue'),
    children: (pre => [
      { path: 'build', name: `${pre}build`, component: () => import('@/pages/demo/plugins/build/index.vue'), meta },
      { path: 'clipboard-polyfill', name: `${pre}clipboard-polyfill`, component: () => import('@/pages/demo/plugins/clipboard-polyfill/index.vue'), meta },
      { path: 'day', name: `${pre}day`, component: () => import('@/pages/demo/plugins/day/index.vue'), meta },
      { path: 'export/table', name: `${pre}export-table`, component: () => import('@/pages/demo/plugins/export/table.vue'), meta },
      { path: 'export/txt', name: `${pre}export-txt`, component: () => import('@/pages/demo/plugins/export/txt.vue'), meta },
      { path: 'i18n/demo1', name: `${pre}i18n-demo1`, component: () => import('@/pages/demo/plugins/i18n/demo1.vue'), meta },
      { path: 'i18n/demo2', name: `${pre}i18n-demo2`, component: () => import('@/pages/demo/plugins/i18n/demo2.vue'), meta },
      { path: 'import/csv', name: `${pre}import-csv`, component: () => import('@/pages/demo/plugins/import/csv.vue'), meta },
      { path: 'import/xlsx', name: `${pre}import-xlsx`, component: () => import('@/pages/demo/plugins/import/xlsx.vue'), meta },
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/plugins/index/index.vue'), meta },
      { path: 'js-cookie', name: `${pre}js-cookie`, component: () => import('@/pages/demo/plugins/js-cookie/index.vue'), meta },
      { path: 'mock/ajax', name: `${pre}mock-ajax`, component: () => import('@/pages/demo/plugins/mock/ajax.vue'), meta },
      { path: 'mock/dpd', name: `${pre}mock-dpd`, component: () => import('@/pages/demo/plugins/mock/dpd.vue'), meta },
      { path: 'mock/dtd', name: `${pre}mock-dtd`, component: () => import('@/pages/demo/plugins/mock/dtd.vue'), meta }
    ])('demo-plugins-')
  },
  {
    path: '/demo/components',
    name: 'demo-components',
    meta,
    redirect: { name: 'demo-components-index' },
    component: () => import('@/components/core/d2-layout-main/index.vue'),
    children: (pre => [
      { path: 'bigdata-table', name: `${pre}bigdata-table`, component: () => import('@/pages/demo/components/bigdata-table/index.vue'), meta },
      { path: 'container/full', name: `${pre}container-full`, component: () => import('@/pages/demo/components/container/full.vue'), meta },
      { path: 'container/ghost', name: `${pre}container-ghost`, component: () => import('@/pages/demo/components/container/ghost.vue'), meta },
      { path: 'container/card', name: `${pre}container-card`, component: () => import('@/pages/demo/components/container/card.vue'), meta },
      { path: 'countup', name: `${pre}countup`, component: () => import('@/pages/demo/components/countup/index.vue'), meta },
      { path: 'editor-quill', name: `${pre}editor-quill`, component: () => import('@/pages/demo/components/editor-quill/index.vue'), meta },
      { path: 'editor-simpleMDE', name: `${pre}editor-simpleMDE`, component: () => import('@/pages/demo/components/editor-simpleMDE/index.vue'), meta },
      { path: 'highlight', name: `${pre}highlight`, component: () => import('@/pages/demo/components/highlight/index.vue'), meta },
      { path: 'icon/icon', name: `${pre}icon-icon`, component: () => import('@/pages/demo/components/icon/icon.vue'), meta },
      { path: 'icon/list', name: `${pre}icon-list`, component: () => import('@/pages/demo/components/icon/list.vue'), meta },
      { path: 'icon/select', name: `${pre}icon-select`, component: () => import('@/pages/demo/components/icon/select.vue'), meta },
      { path: 'icon/svg', name: `${pre}icon-svg`, component: () => import('@/pages/demo/components/icon/svg.vue'), meta },
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/components/index/index.vue'), meta },
      { path: 'layout/grid', name: `${pre}layout-grid`, component: () => import('@/pages/demo/components/layout/grid.vue'), meta },
      { path: 'layout/splitpane', name: `${pre}layout-splitpane`, component: () => import('@/pages/demo/components/layout/splitpane.vue'), meta },
      { path: 'markdown/source', name: `${pre}markdown-source`, component: () => import('@/pages/demo/components/markdown/source.vue'), meta },
      { path: 'markdown/url', name: `${pre}markdown-url`, component: () => import('@/pages/demo/components/markdown/url.vue'), meta },
      { path: 'scrollbar', name: `${pre}scrollbar`, component: () => import('@/pages/demo/components/scrollbar/index.vue'), meta }
    ])('demo-components-')
  },
  {
    path: '/demo/element',
    name: 'demo-element',
    meta,
    redirect: { name: 'demo-element-index' },
    component: () => import('@/components/core/d2-layout-main/index.vue'),
    children: (pre => [
      { path: 'basic-layout', name: `${pre}basic-layout`, component: () => import('@/pages/demo/element/basic-layout/index.vue'), meta },
      { path: 'basic-container', name: `${pre}basic-container`, component: () => import('@/pages/demo/element/basic-container/index.vue'), meta },
      { path: 'basic-color', name: `${pre}basic-color`, component: () => import('@/pages/demo/element/basic-color/index.vue'), meta },
      { path: 'basic-typography', name: `${pre}basic-typography`, component: () => import('@/pages/demo/element/basic-typography/index.vue'), meta },
      { path: 'basic-icon', name: `${pre}basic-icon`, component: () => import('@/pages/demo/element/basic-icon/index.vue'), meta },
      { path: 'basic-button', name: `${pre}basic-button`, component: () => import('@/pages/demo/element/basic-button/index.vue'), meta },
      { path: 'form-radio', name: `${pre}form-radio`, component: () => import('@/pages/demo/element/form-radio/index.vue'), meta },
      { path: 'form-checkbox', name: `${pre}form-checkbox`, component: () => import('@/pages/demo/element/form-checkbox/index.vue'), meta },
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/element/index/index.vue'), meta }
    ])('demo-element-')
  },
  // 登陆
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/core/login/index.vue')
  }
]

let router = new VueRouter({ routes })

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

export default router
