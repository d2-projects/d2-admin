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
    component: () => import('@/components/core/d2-layout-main'),
    children: [
      {
        path: 'index',
        name: 'index',
        meta,
        component: () => import('@/pages/core/index')
      }
    ]
  },
  {
    path: '/demo/business',
    name: 'demo-business',
    meta,
    redirect: { name: 'demo-business-index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: (pre => [
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/business/index'), meta }
    ])('demo-business-')
  },
  {
    path: '/demo/chart',
    name: 'demo-chart',
    meta,
    redirect: { name: 'demo-chart-index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: (pre => [
      { path: 'all', name: `${pre}all`, component: () => import('@/pages/demo/chart/all'), meta },
      { path: 'demo/areaBase', name: `${pre}demo-areaBase`, component: () => import('@/pages/demo/chart/demo/areaBase.vue'), meta },
      { path: 'demo/barBase', name: `${pre}demo-barBase`, component: () => import('@/pages/demo/chart/demo/barBase.vue'), meta },
      { path: 'demo/columnBase', name: `${pre}demo-columnBase`, component: () => import('@/pages/demo/chart/demo/columnBase.vue'), meta },
      { path: 'demo/lineBase', name: `${pre}demo-lineBase`, component: () => import('@/pages/demo/chart/demo/lineBase.vue'), meta },
      { path: 'demo/lineStep', name: `${pre}demo-lineStep`, component: () => import('@/pages/demo/chart/demo/lineStep.vue'), meta },
      { path: 'demo/nightingaleRoseBase', name: `${pre}demo-nightingaleRoseBase`, component: () => import('@/pages/demo/chart/demo/nightingaleRoseBase.vue'), meta },
      { path: 'demo/PieBase', name: `${pre}demo-PieBase`, component: () => import('@/pages/demo/chart/demo/PieBase.vue'), meta },
      { path: 'demo/radarBase', name: `${pre}demo-radarBase`, component: () => import('@/pages/demo/chart/demo/radarBase.vue'), meta },
      { path: 'dynamicSize', name: `${pre}dynamicSize`, component: () => import('@/pages/demo/chart/dynamicSize'), meta },
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/chart/index'), meta }
    ])('demo-chart-')
  },
  {
    path: '/demo/plugins',
    name: 'demo-plugins',
    meta,
    redirect: { name: 'demo-plugins-index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: (pre => [
      { path: 'better-scroll/base', name: `${pre}better-scroll-base`, component: () => import('@/pages/demo/plugins/better-scroll/base.vue'), meta },
      { path: 'better-scroll/to', name: `${pre}better-scroll-to`, component: () => import('@/pages/demo/plugins/better-scroll/to.vue'), meta },
      { path: 'build', name: `${pre}build`, component: () => import('@/pages/demo/plugins/build'), meta },
      { path: 'clipboard-polyfill', name: `${pre}clipboard-polyfill`, component: () => import('@/pages/demo/plugins/clipboard-polyfill'), meta },
      { path: 'day', name: `${pre}day`, component: () => import('@/pages/demo/plugins/day'), meta },
      { path: 'export/table', name: `${pre}export-table`, component: () => import('@/pages/demo/plugins/export/table.vue'), meta },
      { path: 'export/txt', name: `${pre}export-txt`, component: () => import('@/pages/demo/plugins/export/txt.vue'), meta },
      { path: 'i18n/demo1', name: `${pre}i18n-demo1`, component: () => import('@/pages/demo/plugins/i18n/demo1.vue'), meta },
      { path: 'i18n/demo2', name: `${pre}i18n-demo2`, component: () => import('@/pages/demo/plugins/i18n/demo2.vue'), meta },
      { path: 'import/csv', name: `${pre}import-csv`, component: () => import('@/pages/demo/plugins/import/csv.vue'), meta },
      { path: 'import/xlsx', name: `${pre}import-xlsx`, component: () => import('@/pages/demo/plugins/import/xlsx.vue'), meta },
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/plugins/index'), meta },
      { path: 'js-cookie', name: `${pre}js-cookie`, component: () => import('@/pages/demo/plugins/js-cookie'), meta },
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
    component: () => import('@/components/core/d2-layout-main'),
    children: (pre => [
      { path: 'bigdata-table', name: `${pre}bigdata-table`, component: () => import('@/pages/demo/components/bigdata-table'), meta },
      { path: 'container/full', name: `${pre}container-full`, component: () => import('@/pages/demo/components/container/full.vue'), meta },
      { path: 'container/ghost', name: `${pre}container-ghost`, component: () => import('@/pages/demo/components/container/ghost.vue'), meta },
      { path: 'container/card', name: `${pre}container-card`, component: () => import('@/pages/demo/components/container/card.vue'), meta },
      { path: 'contextmenu/simple', name: `${pre}contextmenu-simple`, component: () => import('@/pages/demo/components/contextmenu/simple.vue'), meta },
      { path: 'contextmenu/divier', name: `${pre}contextmenu-divier`, component: () => import('@/pages/demo/components/contextmenu/divier.vue'), meta },
      { path: 'contextmenu/group', name: `${pre}contextmenu-group`, component: () => import('@/pages/demo/components/contextmenu/group.vue'), meta },
      { path: 'contextmenu/submenu', name: `${pre}contextmenu-submenu`, component: () => import('@/pages/demo/components/contextmenu/submenu.vue'), meta },
      { path: 'contextmenu/disabled', name: `${pre}contextmenu-disabled`, component: () => import('@/pages/demo/components/contextmenu/disabled.vue'), meta },
      { path: 'countup', name: `${pre}countup`, component: () => import('@/pages/demo/components/countup'), meta },
      { path: 'editor-quill', name: `${pre}editor-quill`, component: () => import('@/pages/demo/components/editor-quill'), meta },
      { path: 'editor-simpleMDE', name: `${pre}editor-simpleMDE`, component: () => import('@/pages/demo/components/editor-simpleMDE'), meta },
      { path: 'highlight', name: `${pre}highlight`, component: () => import('@/pages/demo/components/highlight'), meta },
      { path: 'icon/icon', name: `${pre}icon-icon`, component: () => import('@/pages/demo/components/icon/icon.vue'), meta },
      { path: 'icon/list', name: `${pre}icon-list`, component: () => import('@/pages/demo/components/icon/list.vue'), meta },
      { path: 'icon/select', name: `${pre}icon-select`, component: () => import('@/pages/demo/components/icon/select.vue'), meta },
      { path: 'icon/svg', name: `${pre}icon-svg`, component: () => import('@/pages/demo/components/icon/svg.vue'), meta },
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/components/index'), meta },
      { path: 'layout/grid', name: `${pre}layout-grid`, component: () => import('@/pages/demo/components/layout/grid.vue'), meta },
      { path: 'layout/splitpane', name: `${pre}layout-splitpane`, component: () => import('@/pages/demo/components/layout/splitpane.vue'), meta },
      { path: 'markdown/source', name: `${pre}markdown-source`, component: () => import('@/pages/demo/components/markdown/source.vue'), meta },
      { path: 'markdown/url', name: `${pre}markdown-url`, component: () => import('@/pages/demo/components/markdown/url.vue'), meta },
      { path: 'scrollbar', name: `${pre}scrollbar`, component: () => import('@/pages/demo/components/scrollbar'), meta }
    ])('demo-components-')
  },
  {
    path: '/demo/element',
    name: 'demo-element',
    meta,
    redirect: { name: 'demo-element-index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: (pre => [
      { path: 'basic-layout', name: `${pre}basic-layout`, component: () => import('@/pages/demo/element/basic-layout'), meta },
      { path: 'basic-container', name: `${pre}basic-container`, component: () => import('@/pages/demo/element/basic-container'), meta },
      { path: 'basic-color', name: `${pre}basic-color`, component: () => import('@/pages/demo/element/basic-color'), meta },
      { path: 'basic-typography', name: `${pre}basic-typography`, component: () => import('@/pages/demo/element/basic-typography'), meta },
      { path: 'basic-icon', name: `${pre}basic-icon`, component: () => import('@/pages/demo/element/basic-icon'), meta },
      { path: 'basic-button', name: `${pre}basic-button`, component: () => import('@/pages/demo/element/basic-button'), meta },
      { path: 'form-radio', name: `${pre}form-radio`, component: () => import('@/pages/demo/element/form-radio'), meta },
      { path: 'form-checkbox', name: `${pre}form-checkbox`, component: () => import('@/pages/demo/element/form-checkbox'), meta },
      { path: 'form-input', name: `${pre}form-input`, component: () => import('@/pages/demo/element/form-input'), meta },
      { path: 'form-input-number', name: `${pre}form-input-number`, component: () => import('@/pages/demo/element/form-input-number'), meta },
      { path: 'form-select', name: `${pre}form-select`, component: () => import('@/pages/demo/element/form-select'), meta },
      { path: 'form-cascader', name: `${pre}form-cascader`, component: () => import('@/pages/demo/element/form-cascader'), meta },
      { path: 'form-switch', name: `${pre}form-switch`, component: () => import('@/pages/demo/element/form-switch'), meta },
      { path: 'form-slider', name: `${pre}form-slider`, component: () => import('@/pages/demo/element/form-slider'), meta },
      { path: 'form-time-picker', name: `${pre}form-time-picker`, component: () => import('@/pages/demo/element/form-time-picker'), meta },
      { path: 'form-date-picker', name: `${pre}form-date-picker`, component: () => import('@/pages/demo/element/form-date-picker'), meta },
      { path: 'form-datetime-picker', name: `${pre}form-datetime-picker`, component: () => import('@/pages/demo/element/form-datetime-picker'), meta },
      { path: 'form-upload', name: `${pre}form-upload`, component: () => import('@/pages/demo/element/form-upload'), meta },
      { path: 'form-rate', name: `${pre}form-rate`, component: () => import('@/pages/demo/element/form-rate'), meta },
      { path: 'form-color-picker', name: `${pre}form-color-picker`, component: () => import('@/pages/demo/element/form-color-picker'), meta },
      { path: 'form-transfer', name: `${pre}form-transfer`, component: () => import('@/pages/demo/element/form-transfer'), meta },
      { path: 'form-form', name: `${pre}form-form`, component: () => import('@/pages/demo/element/form-form'), meta },
      { path: 'data-table', name: `${pre}data-table`, component: () => import('@/pages/demo/element/data-table'), meta },
      { path: 'data-tag', name: `${pre}data-tag`, component: () => import('@/pages/demo/element/data-tag'), meta },
      { path: 'data-progress', name: `${pre}data-progress`, component: () => import('@/pages/demo/element/data-progress'), meta },
      { path: 'data-tree', name: `${pre}data-tree`, component: () => import('@/pages/demo/element/data-tree'), meta },
      { path: 'data-pagination', name: `${pre}data-pagination`, component: () => import('@/pages/demo/element/data-pagination'), meta },
      { path: 'data-badge', name: `${pre}data-badge`, component: () => import('@/pages/demo/element/data-badge'), meta },
      { path: 'notice-alert', name: `${pre}notice-alert`, component: () => import('@/pages/demo/element/notice-alert'), meta },
      { path: 'notice-loading', name: `${pre}notice-loading`, component: () => import('@/pages/demo/element/notice-loading'), meta },
      { path: 'notice-message', name: `${pre}notice-message`, component: () => import('@/pages/demo/element/notice-message'), meta },
      { path: 'notice-message-box', name: `${pre}notice-message-box`, component: () => import('@/pages/demo/element/notice-message-box'), meta },
      { path: 'notice-notification', name: `${pre}notice-notification`, component: () => import('@/pages/demo/element/notice-notification'), meta },
      { path: 'navigation-menu', name: `${pre}navigation-menu`, component: () => import('@/pages/demo/element/navigation-menu'), meta },
      { path: 'navigation-tabs', name: `${pre}navigation-tabs`, component: () => import('@/pages/demo/element/navigation-tabs'), meta },
      { path: 'navigation-breadcrumb', name: `${pre}navigation-breadcrumb`, component: () => import('@/pages/demo/element/navigation-breadcrumb'), meta },
      { path: 'navigation-dropdown', name: `${pre}navigation-dropdown`, component: () => import('@/pages/demo/element/navigation-dropdown'), meta },
      { path: 'navigation-steps', name: `${pre}navigation-steps`, component: () => import('@/pages/demo/element/navigation-steps'), meta },
      { path: 'others-dialog', name: `${pre}others-dialog`, component: () => import('@/pages/demo/element/others-dialog'), meta },
      { path: 'others-tooltip', name: `${pre}others-tooltip`, component: () => import('@/pages/demo/element/others-tooltip'), meta },
      { path: 'others-popover', name: `${pre}others-popover`, component: () => import('@/pages/demo/element/others-popover'), meta },
      { path: 'others-card', name: `${pre}others-card`, component: () => import('@/pages/demo/element/others-card'), meta },
      { path: 'others-carousel', name: `${pre}others-carousel`, component: () => import('@/pages/demo/element/others-carousel'), meta },
      { path: 'others-collapse', name: `${pre}others-collapse`, component: () => import('@/pages/demo/element/others-collapse'), meta },
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/element/index'), meta }
    ])('demo-element-')
  },
  // 登陆
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/core/login')
  },
  // 404
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/core/404')
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
