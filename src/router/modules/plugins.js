import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/demo/plugins',
  name: 'demo-plugins',
  meta,
  redirect: { name: 'demo-plugins-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'better-scroll/base', name: `${pre}better-scroll-base`, component: _import('demo/plugins/better-scroll/base.vue'), meta: { ...meta, title: '滚动插件基础' } },
    { path: 'better-scroll/to', name: `${pre}better-scroll-to`, component: _import('demo/plugins/better-scroll/to.vue'), meta: { ...meta, title: '滚动定位' } },
    { path: 'clipboard-polyfill', name: `${pre}clipboard-polyfill`, component: _import('demo/plugins/clipboard-polyfill'), meta: { ...meta, title: '剪贴板访问' } },
    { path: 'day', name: `${pre}day`, component: _import('demo/plugins/day'), meta: { ...meta, title: '日期计算' } },
    { path: 'export/table', name: `${pre}export-table`, component: _import('demo/plugins/export/table.vue'), meta: { ...meta, title: '导出表格' } },
    { path: 'export/txt', name: `${pre}export-txt`, component: _import('demo/plugins/export/txt.vue'), meta: { ...meta, title: '导出文本' } },
    { path: 'import/csv', name: `${pre}import-csv`, component: _import('demo/plugins/import/csv.vue'), meta: { ...meta, title: '导入 csv' } },
    { path: 'import/xlsx', name: `${pre}import-xlsx`, component: _import('demo/plugins/import/xlsx.vue'), meta: { ...meta, title: '导入 xlsx' } },
    { path: 'index', name: `${pre}index`, component: _import('demo/plugins/index'), meta: { ...meta, title: '插件首页' } },
    { path: 'js-cookie', name: `${pre}js-cookie`, component: _import('demo/plugins/js-cookie'), meta: { ...meta, title: 'Cookie' } },
    { path: 'mock/ajax', name: `${pre}mock-ajax`, component: _import('demo/plugins/mock/ajax.vue'), meta: { ...meta, title: '模拟数据' } },
    { path: 'mock/dpd', name: `${pre}mock-dpd`, component: _import('demo/plugins/mock/dpd.vue'), meta: { ...meta, title: 'mock dpd规则' } },
    { path: 'mock/dtd', name: `${pre}mock-dtd`, component: _import('demo/plugins/mock/dtd.vue'), meta: { ...meta, title: 'mock dtd规则' } }
  ])('demo-plugins-')
}
