const meta = { requiresAuth: true }

const alive = true

/**
 * 在主框架内显示
 */
const frameIn = [
  // 首页
  {
    path: '/',
    redirect: { name: 'index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: [
      {
        path: 'index',
        name: 'index',
        meta: { ...meta, title: '首页' },
        component: () => import('@/pages/core/index')
      }
    ]
  },
  {
    path: '/core/setting',
    name: 'core-setting',
    meta,
    redirect: { name: 'core-setting-index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: (pre => [
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/core/setting/index'), meta: { ...meta, title: '首页' } },
      { path: 'theme/theme', name: `${pre}theme-theme`, component: () => import('@/pages/core/setting/theme/theme.vue'), meta: { ...meta, title: '首页' } },
      { path: 'theme/custom', name: `${pre}theme-custom`, component: () => import('@/pages/core/setting/theme/custom.vue'), meta: { ...meta, title: '首页' } }
    ])('core-setting-')
  },
  {
    path: '/demo/business',
    name: 'demo-business',
    meta,
    redirect: { name: 'demo-business-index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: (pre => [
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/business/index'), meta: { ...meta, title: '首页' } }
    ])('demo-business-')
  },
  {
    path: '/demo/playground',
    name: 'demo-playground',
    meta,
    redirect: { name: 'demo-playground-index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: (pre => [
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/playground/index'), meta: { ...meta, title: '首页' } },
      { path: 'theme', name: `${pre}theme`, component: () => import('@/pages/demo/playground/theme'), meta: { ...meta, title: '首页' } },
      { path: 'fullscreen', name: `${pre}fullscreen`, component: () => import('@/pages/demo/playground/fullscreen'), meta: { ...meta, title: '首页' } },
      { path: 'gray', name: `${pre}gray`, component: () => import('@/pages/demo/playground/gray'), meta: { ...meta, title: '首页' } },
      { path: 'page-cache/on', name: `${pre}page-cache-on`, component: () => import('@/pages/demo/playground/page-cache/on.vue'), meta: { ...meta, alive, title: '首页' } },
      { path: 'page-cache/off', name: `${pre}page-cache-off`, component: () => import('@/pages/demo/playground/page-cache/off.vue'), meta: { ...meta, title: '首页' } }
    ])('demo-playground-')
  },
  {
    path: '/demo/plugins',
    name: 'demo-plugins',
    meta,
    redirect: { name: 'demo-plugins-index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: (pre => [
      { path: 'better-scroll/base', name: `${pre}better-scroll-base`, component: () => import('@/pages/demo/plugins/better-scroll/base.vue'), meta: { ...meta, title: '首页' } },
      { path: 'better-scroll/to', name: `${pre}better-scroll-to`, component: () => import('@/pages/demo/plugins/better-scroll/to.vue'), meta: { ...meta, title: '首页' } },
      { path: 'build', name: `${pre}build`, component: () => import('@/pages/demo/plugins/build'), meta: { ...meta, title: '首页' } },
      { path: 'clipboard-polyfill', name: `${pre}clipboard-polyfill`, component: () => import('@/pages/demo/plugins/clipboard-polyfill'), meta: { ...meta, title: '首页' } },
      { path: 'day', name: `${pre}day`, component: () => import('@/pages/demo/plugins/day'), meta: { ...meta, title: '首页' } },
      { path: 'export/table', name: `${pre}export-table`, component: () => import('@/pages/demo/plugins/export/table.vue'), meta: { ...meta, title: '首页' } },
      { path: 'export/txt', name: `${pre}export-txt`, component: () => import('@/pages/demo/plugins/export/txt.vue'), meta: { ...meta, title: '首页' } },
      { path: 'i18n/demo1', name: `${pre}i18n-demo1`, component: () => import('@/pages/demo/plugins/i18n/demo1.vue'), meta: { ...meta, title: '首页' } },
      { path: 'i18n/demo2', name: `${pre}i18n-demo2`, component: () => import('@/pages/demo/plugins/i18n/demo2.vue'), meta: { ...meta, title: '首页' } },
      { path: 'import/csv', name: `${pre}import-csv`, component: () => import('@/pages/demo/plugins/import/csv.vue'), meta: { ...meta, title: '首页' } },
      { path: 'import/xlsx', name: `${pre}import-xlsx`, component: () => import('@/pages/demo/plugins/import/xlsx.vue'), meta: { ...meta, title: '首页' } },
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/plugins/index'), meta: { ...meta, title: '首页' } },
      { path: 'js-cookie', name: `${pre}js-cookie`, component: () => import('@/pages/demo/plugins/js-cookie'), meta: { ...meta, title: '首页' } },
      { path: 'mock/ajax', name: `${pre}mock-ajax`, component: () => import('@/pages/demo/plugins/mock/ajax.vue'), meta: { ...meta, title: '首页' } },
      { path: 'mock/dpd', name: `${pre}mock-dpd`, component: () => import('@/pages/demo/plugins/mock/dpd.vue'), meta: { ...meta, title: '首页' } },
      { path: 'mock/dtd', name: `${pre}mock-dtd`, component: () => import('@/pages/demo/plugins/mock/dtd.vue'), meta: { ...meta, title: '首页' } }
    ])('demo-plugins-')
  },
  {
    path: '/demo/charts',
    name: 'demo-charts',
    meta,
    redirect: { name: 'demo-charts-index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: (pre => [
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/charts/index'), meta: { ...meta, title: '首页' } },
      { path: 'list/line/demo1', name: `${pre}list-line-demo1`, component: () => import('@/pages/demo/charts/list/line/demo1/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/line/demo2', name: `${pre}list-line-demo2`, component: () => import('@/pages/demo/charts/list/line/demo2/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/line/demo3', name: `${pre}list-line-demo3`, component: () => import('@/pages/demo/charts/list/line/demo3/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/line/demo4', name: `${pre}list-line-demo4`, component: () => import('@/pages/demo/charts/list/line/demo4/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/line/demo5', name: `${pre}list-line-demo5`, component: () => import('@/pages/demo/charts/list/line/demo5/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/histogram/demo1', name: `${pre}list-histogram-demo1`, component: () => import('@/pages/demo/charts/list/histogram/demo1/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/histogram/demo2', name: `${pre}list-histogram-demo2`, component: () => import('@/pages/demo/charts/list/histogram/demo2/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/histogram/demo3', name: `${pre}list-histogram-demo3`, component: () => import('@/pages/demo/charts/list/histogram/demo3/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/histogram/demo4', name: `${pre}list-histogram-demo4`, component: () => import('@/pages/demo/charts/list/histogram/demo4/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/histogram/demo5', name: `${pre}list-histogram-demo5`, component: () => import('@/pages/demo/charts/list/histogram/demo5/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/histogram/demo6', name: `${pre}list-histogram-demo6`, component: () => import('@/pages/demo/charts/list/histogram/demo6/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/bar/demo1', name: `${pre}list-bar-demo1`, component: () => import('@/pages/demo/charts/list/bar/demo1/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/bar/demo2', name: `${pre}list-bar-demo2`, component: () => import('@/pages/demo/charts/list/bar/demo2/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/bar/demo3', name: `${pre}list-bar-demo3`, component: () => import('@/pages/demo/charts/list/bar/demo3/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/bar/demo4', name: `${pre}list-bar-demo4`, component: () => import('@/pages/demo/charts/list/bar/demo4/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/bar/demo5', name: `${pre}list-bar-demo5`, component: () => import('@/pages/demo/charts/list/bar/demo5/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/pie/demo1', name: `${pre}list-pie-demo1`, component: () => import('@/pages/demo/charts/list/pie/demo1/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/pie/demo2', name: `${pre}list-pie-demo2`, component: () => import('@/pages/demo/charts/list/pie/demo2/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/pie/demo3', name: `${pre}list-pie-demo3`, component: () => import('@/pages/demo/charts/list/pie/demo3/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/pie/demo4', name: `${pre}list-pie-demo4`, component: () => import('@/pages/demo/charts/list/pie/demo4/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/pie/demo5', name: `${pre}list-pie-demo5`, component: () => import('@/pages/demo/charts/list/pie/demo5/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/pie/demo6', name: `${pre}list-pie-demo6`, component: () => import('@/pages/demo/charts/list/pie/demo6/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/ring/demo1', name: `${pre}list-ring-demo1`, component: () => import('@/pages/demo/charts/list/ring/demo1/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/ring/demo2', name: `${pre}list-ring-demo2`, component: () => import('@/pages/demo/charts/list/ring/demo2/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/ring/demo3', name: `${pre}list-ring-demo3`, component: () => import('@/pages/demo/charts/list/ring/demo3/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/ring/demo4', name: `${pre}list-ring-demo4`, component: () => import('@/pages/demo/charts/list/ring/demo4/index.vue'), meta: { ...meta, title: '首页' } },
      { path: 'list/ring/demo5', name: `${pre}list-ring-demo5`, component: () => import('@/pages/demo/charts/list/ring/demo5/index.vue'), meta: { ...meta, title: '首页' } }
    ])('demo-charts-')
  },
  {
    path: '/demo/components',
    name: 'demo-components',
    meta,
    redirect: { name: 'demo-components-index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: (pre => [
      { path: 'bigdata-table/demo', name: `${pre}bigdata-table-demo`, component: () => import('@/pages/demo/components/bigdata-table/demo.vue'), meta: { ...meta, title: '首页' } },
      { path: 'bigdata-table/select', name: `${pre}bigdata-table-select`, component: () => import('@/pages/demo/components/bigdata-table/select.vue'), meta: { ...meta, title: '首页' } },
      { path: 'container/full', name: `${pre}container-full`, component: () => import('@/pages/demo/components/container/full.vue'), meta: { ...meta, title: '首页' } },
      { path: 'container/ghost', name: `${pre}container-ghost`, component: () => import('@/pages/demo/components/container/ghost.vue'), meta: { ...meta, title: '首页' } },
      { path: 'container/card', name: `${pre}container-card`, component: () => import('@/pages/demo/components/container/card.vue'), meta: { ...meta, title: '首页' } },
      { path: 'contextmenu/simple', name: `${pre}contextmenu-simple`, component: () => import('@/pages/demo/components/contextmenu/simple.vue'), meta: { ...meta, title: '首页' } },
      { path: 'contextmenu/divier', name: `${pre}contextmenu-divier`, component: () => import('@/pages/demo/components/contextmenu/divier.vue'), meta: { ...meta, title: '首页' } },
      { path: 'contextmenu/group', name: `${pre}contextmenu-group`, component: () => import('@/pages/demo/components/contextmenu/group.vue'), meta: { ...meta, title: '首页' } },
      { path: 'contextmenu/submenu', name: `${pre}contextmenu-submenu`, component: () => import('@/pages/demo/components/contextmenu/submenu.vue'), meta: { ...meta, title: '首页' } },
      { path: 'contextmenu/disabled', name: `${pre}contextmenu-disabled`, component: () => import('@/pages/demo/components/contextmenu/disabled.vue'), meta: { ...meta, title: '首页' } },
      { path: 'contextmenu/custom-trigger', name: `${pre}contextmenu-custom-trigger`, component: () => import('@/pages/demo/components/contextmenu/custom-trigger.vue'), meta: { ...meta, title: '首页' } },
      { path: 'countup', name: `${pre}countup`, component: () => import('@/pages/demo/components/countup'), meta: { ...meta, title: '首页' } },
      { path: 'editor-quill', name: `${pre}editor-quill`, component: () => import('@/pages/demo/components/editor-quill'), meta: { ...meta, title: '首页' } },
      { path: 'editor-simpleMDE', name: `${pre}editor-simpleMDE`, component: () => import('@/pages/demo/components/editor-simpleMDE'), meta: { ...meta, title: '首页' } },
      { path: 'highlight', name: `${pre}highlight`, component: () => import('@/pages/demo/components/highlight'), meta: { ...meta, title: '首页' } },
      { path: 'icon/icon', name: `${pre}icon-icon`, component: () => import('@/pages/demo/components/icon/icon.vue'), meta: { ...meta, title: '首页' } },
      { path: 'icon/list', name: `${pre}icon-list`, component: () => import('@/pages/demo/components/icon/list.vue'), meta: { ...meta, title: '首页' } },
      { path: 'icon/select', name: `${pre}icon-select`, component: () => import('@/pages/demo/components/icon/select.vue'), meta: { ...meta, title: '首页' } },
      { path: 'icon/svg', name: `${pre}icon-svg`, component: () => import('@/pages/demo/components/icon/svg.vue'), meta: { ...meta, title: '首页' } },
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/components/index'), meta: { ...meta, title: '首页' } },
      { path: 'layout/grid', name: `${pre}layout-grid`, component: () => import('@/pages/demo/components/layout/grid.vue'), meta: { ...meta, title: '首页' } },
      { path: 'layout/splitpane', name: `${pre}layout-splitpane`, component: () => import('@/pages/demo/components/layout/splitpane.vue'), meta: { ...meta, title: '首页' } },
      { path: 'markdown/source', name: `${pre}markdown-source`, component: () => import('@/pages/demo/components/markdown/source.vue'), meta: { ...meta, title: '首页' } },
      { path: 'markdown/url', name: `${pre}markdown-url`, component: () => import('@/pages/demo/components/markdown/url.vue'), meta: { ...meta, title: '首页' } },
      { path: 'scrollbar', name: `${pre}scrollbar`, component: () => import('@/pages/demo/components/scrollbar'), meta: { ...meta, title: '首页' } }
    ])('demo-components-')
  },
  {
    path: '/demo/element',
    name: 'demo-element',
    meta,
    redirect: { name: 'demo-element-index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: (pre => [
      { path: 'basic-layout', name: `${pre}basic-layout`, component: () => import('@/pages/demo/element/basic-layout'), meta: { ...meta, title: '首页' } },
      { path: 'basic-container', name: `${pre}basic-container`, component: () => import('@/pages/demo/element/basic-container'), meta: { ...meta, title: '首页' } },
      { path: 'basic-color', name: `${pre}basic-color`, component: () => import('@/pages/demo/element/basic-color'), meta: { ...meta, title: '首页' } },
      { path: 'basic-typography', name: `${pre}basic-typography`, component: () => import('@/pages/demo/element/basic-typography'), meta: { ...meta, title: '首页' } },
      { path: 'basic-icon', name: `${pre}basic-icon`, component: () => import('@/pages/demo/element/basic-icon'), meta: { ...meta, title: '首页' } },
      { path: 'basic-button', name: `${pre}basic-button`, component: () => import('@/pages/demo/element/basic-button'), meta: { ...meta, title: '首页' } },
      { path: 'form-radio', name: `${pre}form-radio`, component: () => import('@/pages/demo/element/form-radio'), meta: { ...meta, title: '首页' } },
      { path: 'form-checkbox', name: `${pre}form-checkbox`, component: () => import('@/pages/demo/element/form-checkbox'), meta: { ...meta, title: '首页' } },
      { path: 'form-input', name: `${pre}form-input`, component: () => import('@/pages/demo/element/form-input'), meta: { ...meta, title: '首页' } },
      { path: 'form-input-number', name: `${pre}form-input-number`, component: () => import('@/pages/demo/element/form-input-number'), meta: { ...meta, title: '首页' } },
      { path: 'form-select', name: `${pre}form-select`, component: () => import('@/pages/demo/element/form-select'), meta: { ...meta, title: '首页' } },
      { path: 'form-cascader', name: `${pre}form-cascader`, component: () => import('@/pages/demo/element/form-cascader'), meta: { ...meta, title: '首页' } },
      { path: 'form-switch', name: `${pre}form-switch`, component: () => import('@/pages/demo/element/form-switch'), meta: { ...meta, title: '首页' } },
      { path: 'form-slider', name: `${pre}form-slider`, component: () => import('@/pages/demo/element/form-slider'), meta: { ...meta, title: '首页' } },
      { path: 'form-time-picker', name: `${pre}form-time-picker`, component: () => import('@/pages/demo/element/form-time-picker'), meta: { ...meta, title: '首页' } },
      { path: 'form-date-picker', name: `${pre}form-date-picker`, component: () => import('@/pages/demo/element/form-date-picker'), meta: { ...meta, title: '首页' } },
      { path: 'form-datetime-picker', name: `${pre}form-datetime-picker`, component: () => import('@/pages/demo/element/form-datetime-picker'), meta: { ...meta, title: '首页' } },
      { path: 'form-upload', name: `${pre}form-upload`, component: () => import('@/pages/demo/element/form-upload'), meta: { ...meta, title: '首页' } },
      { path: 'form-rate', name: `${pre}form-rate`, component: () => import('@/pages/demo/element/form-rate'), meta: { ...meta, title: '首页' } },
      { path: 'form-color-picker', name: `${pre}form-color-picker`, component: () => import('@/pages/demo/element/form-color-picker'), meta: { ...meta, title: '首页' } },
      { path: 'form-transfer', name: `${pre}form-transfer`, component: () => import('@/pages/demo/element/form-transfer'), meta: { ...meta, title: '首页' } },
      { path: 'form-form', name: `${pre}form-form`, component: () => import('@/pages/demo/element/form-form'), meta: { ...meta, title: '首页' } },
      { path: 'data-table', name: `${pre}data-table`, component: () => import('@/pages/demo/element/data-table'), meta: { ...meta, title: '首页' } },
      { path: 'data-tag', name: `${pre}data-tag`, component: () => import('@/pages/demo/element/data-tag'), meta: { ...meta, title: '首页' } },
      { path: 'data-progress', name: `${pre}data-progress`, component: () => import('@/pages/demo/element/data-progress'), meta: { ...meta, title: '首页' } },
      { path: 'data-tree', name: `${pre}data-tree`, component: () => import('@/pages/demo/element/data-tree'), meta: { ...meta, title: '首页' } },
      { path: 'data-pagination', name: `${pre}data-pagination`, component: () => import('@/pages/demo/element/data-pagination'), meta: { ...meta, title: '首页' } },
      { path: 'data-badge', name: `${pre}data-badge`, component: () => import('@/pages/demo/element/data-badge'), meta: { ...meta, title: '首页' } },
      { path: 'notice-alert', name: `${pre}notice-alert`, component: () => import('@/pages/demo/element/notice-alert'), meta: { ...meta, title: '首页' } },
      { path: 'notice-loading', name: `${pre}notice-loading`, component: () => import('@/pages/demo/element/notice-loading'), meta: { ...meta, title: '首页' } },
      { path: 'notice-message', name: `${pre}notice-message`, component: () => import('@/pages/demo/element/notice-message'), meta: { ...meta, title: '首页' } },
      { path: 'notice-message-box', name: `${pre}notice-message-box`, component: () => import('@/pages/demo/element/notice-message-box'), meta: { ...meta, title: '首页' } },
      { path: 'notice-notification', name: `${pre}notice-notification`, component: () => import('@/pages/demo/element/notice-notification'), meta: { ...meta, title: '首页' } },
      { path: 'navigation-menu', name: `${pre}navigation-menu`, component: () => import('@/pages/demo/element/navigation-menu'), meta: { ...meta, title: '首页' } },
      { path: 'navigation-tabs', name: `${pre}navigation-tabs`, component: () => import('@/pages/demo/element/navigation-tabs'), meta: { ...meta, title: '首页' } },
      { path: 'navigation-breadcrumb', name: `${pre}navigation-breadcrumb`, component: () => import('@/pages/demo/element/navigation-breadcrumb'), meta: { ...meta, title: '首页' } },
      { path: 'navigation-dropdown', name: `${pre}navigation-dropdown`, component: () => import('@/pages/demo/element/navigation-dropdown'), meta: { ...meta, title: '首页' } },
      { path: 'navigation-steps', name: `${pre}navigation-steps`, component: () => import('@/pages/demo/element/navigation-steps'), meta: { ...meta, title: '首页' } },
      { path: 'others-dialog', name: `${pre}others-dialog`, component: () => import('@/pages/demo/element/others-dialog'), meta: { ...meta, title: '首页' } },
      { path: 'others-tooltip', name: `${pre}others-tooltip`, component: () => import('@/pages/demo/element/others-tooltip'), meta: { ...meta, title: '首页' } },
      { path: 'others-popover', name: `${pre}others-popover`, component: () => import('@/pages/demo/element/others-popover'), meta: { ...meta, title: '首页' } },
      { path: 'others-card', name: `${pre}others-card`, component: () => import('@/pages/demo/element/others-card'), meta: { ...meta, title: '首页' } },
      { path: 'others-carousel', name: `${pre}others-carousel`, component: () => import('@/pages/demo/element/others-carousel'), meta: { ...meta, title: '首页' } },
      { path: 'others-collapse', name: `${pre}others-collapse`, component: () => import('@/pages/demo/element/others-collapse'), meta: { ...meta, title: '首页' } },
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/element/index'), meta: { ...meta, title: '首页' } }
    ])('demo-element-')
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
    component: () => import('@/pages/core/404')
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登陆
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/core/login')
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
