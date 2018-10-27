import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/demo/playground',
  name: 'demo-playground',
  meta,
  redirect: { name: 'demo-playground-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/playground/index'), meta: { ...meta, title: '试验台首页' } },
    { path: 'page-cache/on', name: `${pre}page-cache-on`, component: () => import('@/pages/demo/playground/page-cache/on.vue'), meta: { ...meta, cache: true, title: '开启缓存' } },
    { path: 'page-cache/off', name: `${pre}page-cache-off`, component: () => import('@/pages/demo/playground/page-cache/off.vue'), meta: { ...meta, title: '关闭缓存' } },
    { path: 'page-argu/send', name: `${pre}page-argu-send`, component: () => import('@/pages/demo/playground/page-argu/send.vue'), meta: { ...meta, title: '参数传递 发送' } },
    { path: 'page-argu/get/:username', name: `${pre}page-argu-get`, component: () => import('@/pages/demo/playground/page-argu/get.vue'), meta: { ...meta, title: '参数传递 接收' } },
    { path: 'store/menu', name: `${pre}store-menu`, component: () => import('@/pages/demo/playground/store/menu'), meta: { ...meta, title: '菜单控制' } },
    { path: 'store/size', name: `${pre}store-size`, component: () => import('@/pages/demo/playground/store/size'), meta: { ...meta, title: '全局尺寸' } },
    { path: 'store/ua', name: `${pre}store-ua`, component: () => import('@/pages/demo/playground/store/ua'), meta: { ...meta, title: '浏览器信息' } },
    { path: 'store/gray', name: `${pre}store-gray`, component: () => import('@/pages/demo/playground/store/gray'), meta: { ...meta, title: '灰度模式' } },
    { path: 'store/fullscreen', name: `${pre}store-fullscreen`, component: () => import('@/pages/demo/playground/store/fullscreen'), meta: { ...meta, title: '全屏' } },
    { path: 'store/theme', name: `${pre}store-theme`, component: () => import('@/pages/demo/playground/store/theme'), meta: { ...meta, title: '主题' } },
    { path: 'store/transition', name: `${pre}store-transition`, component: () => import('@/pages/demo/playground/store/transition'), meta: { ...meta, title: '页面过渡开关' } },
    { path: 'db/all', name: `${pre}db-all`, component: () => import('@/pages/demo/playground/db/all'), meta: { ...meta, title: '总览' } },
    { path: 'db/public', name: `${pre}db-public`, component: () => import('@/pages/demo/playground/db/public'), meta: { ...meta, title: '公共存储' } },
    { path: 'db/user', name: `${pre}db-user`, component: () => import('@/pages/demo/playground/db/user'), meta: { ...meta, title: '私有存储' } },
    { path: 'db/page-public', name: `${pre}db-page-public`, component: () => import('@/pages/demo/playground/db/page-public'), meta: { ...meta, title: '路由存储' } },
    { path: 'db/page-user', name: `${pre}db-page-user`, component: () => import('@/pages/demo/playground/db/page-user'), meta: { ...meta, title: '私有路由存储' } },
    { path: 'db/page-snapshot-public', name: `${pre}db-page-snapshot-public`, component: () => import('@/pages/demo/playground/db/page-snapshot-public'), meta: { ...meta, title: '路由快照' } },
    { path: 'db/page-snapshot-user', name: `${pre}db-page-snapshot-user`, component: () => import('@/pages/demo/playground/db/page-snapshot-user'), meta: { ...meta, title: '私有路由快照' } },
    { path: 'log/log', name: `${pre}log-log`, component: () => import('@/pages/demo/playground/log/log'), meta: { ...meta, title: '日志记录' } },
    { path: 'log/error', name: `${pre}log-error`, component: () => import('@/pages/demo/playground/log/error'), meta: { ...meta, title: '错误捕捉' } },
    { path: 'log/console', name: `${pre}log-console`, component: () => import('@/pages/demo/playground/log/console'), meta: { ...meta, title: '控制台日志' } },
    { path: 'env', name: `${pre}env`, component: () => import('@/pages/demo/playground/env'), meta: { ...meta, title: '环境信息' } }
  ])('demo-playground-')
}
