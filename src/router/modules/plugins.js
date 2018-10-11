import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/demo/plugins',
  name: 'demo-plugins',
  meta,
  redirect: { name: 'demo-plugins-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'better-scroll/base', name: `${pre}better-scroll-base`, component: () => import('@/pages/demo/plugins/better-scroll/base.vue'), meta: { ...meta, title: '滚动插件基础' } },
    { path: 'better-scroll/to', name: `${pre}better-scroll-to`, component: () => import('@/pages/demo/plugins/better-scroll/to.vue'), meta: { ...meta, title: '滚动定位' } },
    { path: 'clipboard-polyfill', name: `${pre}clipboard-polyfill`, component: () => import('@/pages/demo/plugins/clipboard-polyfill'), meta: { ...meta, title: '剪贴板访问' } },
    { path: 'day', name: `${pre}day`, component: () => import('@/pages/demo/plugins/day'), meta: { ...meta, title: '日期计算' } },
    { path: 'export/table', name: `${pre}export-table`, component: () => import('@/pages/demo/plugins/export/table.vue'), meta: { ...meta, title: '导出表格' } },
    { path: 'export/txt', name: `${pre}export-txt`, component: () => import('@/pages/demo/plugins/export/txt.vue'), meta: { ...meta, title: '导出文本' } },
    { path: 'i18n/demo1', name: `${pre}i18n-demo1`, component: () => import('@/pages/demo/plugins/i18n/demo1.vue'), meta: { ...meta, title: '多国语示例 1' } },
    { path: 'i18n/demo2', name: `${pre}i18n-demo2`, component: () => import('@/pages/demo/plugins/i18n/demo2.vue'), meta: { ...meta, title: '多国语示例 2' } },
    { path: 'import/csv', name: `${pre}import-csv`, component: () => import('@/pages/demo/plugins/import/csv.vue'), meta: { ...meta, title: '导入 csv' } },
    { path: 'import/xlsx', name: `${pre}import-xlsx`, component: () => import('@/pages/demo/plugins/import/xlsx.vue'), meta: { ...meta, title: '导入 xlsx' } },
    { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/plugins/index'), meta: { ...meta, title: '插件首页' } },
    { path: 'js-cookie', name: `${pre}js-cookie`, component: () => import('@/pages/demo/plugins/js-cookie'), meta: { ...meta, title: 'Cookie' } },
    { path: 'mock/ajax', name: `${pre}mock-ajax`, component: () => import('@/pages/demo/plugins/mock/ajax.vue'), meta: { ...meta, title: '模拟数据' } },
    { path: 'mock/dpd', name: `${pre}mock-dpd`, component: () => import('@/pages/demo/plugins/mock/dpd.vue'), meta: { ...meta, title: 'mock dpd规则' } },
    { path: 'mock/dtd', name: `${pre}mock-dtd`, component: () => import('@/pages/demo/plugins/mock/dtd.vue'), meta: { ...meta, title: 'mock dtd规则' } }
  ])('demo-plugins-')
}
