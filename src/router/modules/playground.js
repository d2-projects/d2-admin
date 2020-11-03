import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/demo/playground',
  name: 'demo-playground',
  meta,
  redirect: { name: 'demo-playground-index' },
  component: layoutHeaderAside,
  children: [
    { path: 'index', name: 'demo-playground-index', component: _import('demo/playground/index'), meta: { ...meta, title: '功能首页' } },
    { path: 'store/page', name: 'demo-playground-store-page', component: _import('demo/playground/store/page'), meta: { ...meta, cache: true, title: '多标签页控制' } },
    { path: 'store/menu', name: 'demo-playground-store-menu', component: _import('demo/playground/store/menu'), meta: { ...meta, title: '菜单控制' } },
    { path: 'store/size', name: 'demo-playground-store-size', component: _import('demo/playground/store/size'), meta: { ...meta, title: '全局尺寸' } },
    { path: 'store/ua', name: 'demo-playground-store-ua', component: _import('demo/playground/store/ua'), meta: { ...meta, title: '浏览器信息' } },
    { path: 'store/gray', name: 'demo-playground-store-gray', component: _import('demo/playground/store/gray'), meta: { ...meta, title: '灰度模式' } },
    { path: 'store/fullscreen', name: 'demo-playground-store-fullscreen', component: _import('demo/playground/store/fullscreen'), meta: { ...meta, title: '全屏' } },
    { path: 'store/theme', name: 'demo-playground-store-theme', component: _import('demo/playground/store/theme'), meta: { ...meta, title: '主题' } },
    { path: 'store/transition', name: 'demo-playground-store-transition', component: _import('demo/playground/store/transition'), meta: { ...meta, title: '页面过渡开关' } },
    { path: 'page-cache/on', name: 'demo-playground-page-cache-on', component: _import('demo/playground/page-cache/on.vue'), meta: { ...meta, cache: true, title: '开启缓存' } },
    { path: 'page-cache/off', name: 'demo-playground-page-cache-off', component: _import('demo/playground/page-cache/off.vue'), meta: { ...meta, title: '关闭缓存' } },
    { path: 'page-cache/params/:id', name: 'demo-playground-page-cache-params', component: _import('demo/playground/page-cache/params.vue'), meta: { ...meta, cache: true, title: '带参路由缓存' }, props: true },
    { path: 'page-argu/send', name: 'demo-playground-page-argu-send', component: _import('demo/playground/page-argu/send.vue'), meta: { ...meta, title: '参数传递 发送' } },
    { path: 'page-argu/get/:username', name: 'demo-playground-page-argu-get', component: _import('demo/playground/page-argu/get.vue'), meta: { ...meta, title: '参数传递 接收' } },
    { path: 'db/all', name: 'demo-playground-db-all', component: _import('demo/playground/db/all'), meta: { ...meta, title: '总览' } },
    { path: 'db/public', name: 'demo-playground-db-public', component: _import('demo/playground/db/public'), meta: { ...meta, title: '公共存储' } },
    { path: 'db/user', name: 'demo-playground-db-user', component: _import('demo/playground/db/user'), meta: { ...meta, title: '私有存储' } },
    { path: 'db/page-public', name: 'demo-playground-db-page-public', component: _import('demo/playground/db/page-public'), meta: { ...meta, title: '路由存储' } },
    { path: 'db/page-user', name: 'demo-playground-db-page-user', component: _import('demo/playground/db/page-user'), meta: { ...meta, title: '私有路由存储' } },
    { path: 'db/page-snapshot-public', name: 'demo-playground-db-page-snapshot-public', component: _import('demo/playground/db/page-snapshot-public'), meta: { ...meta, title: '路由快照' } },
    { path: 'db/page-snapshot-user', name: 'demo-playground-db-page-snapshot-user', component: _import('demo/playground/db/page-snapshot-user'), meta: { ...meta, title: '私有路由快照' } },
    { path: 'log/ajax', name: 'demo-playground-log-ajax', component: _import('demo/playground/log/ajax'), meta: { ...meta, title: 'Ajax 错误' } },
    { path: 'log/console', name: 'demo-playground-log-console', component: _import('demo/playground/log/console'), meta: { ...meta, title: '控制台日志' } },
    { path: 'log/error', name: 'demo-playground-log-error', component: _import('demo/playground/log/error'), meta: { ...meta, title: '错误捕捉' } },
    { path: 'log/log', name: 'demo-playground-log-log', component: _import('demo/playground/log/log'), meta: { ...meta, title: '日志记录' } },
    { path: 'add-routes/routes', name: 'demo-playground-add-routes-routes', component: _import('demo/playground/add-routes/routes'), meta: { ...meta, title: '添加页面' } },
    { path: 'env', name: 'demo-playground-env', component: _import('demo/playground/env'), meta: { ...meta, title: '环境信息' } },
    { path: 'locales', name: 'demo-playground-locales', component: _import('demo/playground/locales'), meta: { ...meta, title: '国际化' } },
    { path: 'frame/html', name: 'demo-playground-frame-html', component: _import('demo/playground/frame/html'), meta: { ...meta, title: '静态 HTML' } },
    { path: 'frame/report', name: 'demo-playground-frame-report', component: _import('demo/playground/frame/report'), meta: { ...meta, title: 'Size report' } },
    { path: 'frame/d2-doc', name: 'demo-playground-frame-d2-doc', component: _import('demo/playground/frame/d2-doc'), meta: { ...meta, title: 'D2Admin 中文文档' } }
  ]
}
