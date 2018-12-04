import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/demo/frame',
  name: 'demo-frame',
  meta,
  redirect: { name: 'demo-frame-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/frame/index'), meta: { ...meta, title: 'Frame 首页' } },
    { path: 'html', name: `${pre}html`, component: () => import('@/pages/demo/frame/html'), meta: { ...meta, title: '静态 HTML' } },
    { path: 'd2-doc', name: `${pre}d2-doc`, component: () => import('@/pages/demo/frame/d2-doc'), meta: { ...meta, title: 'D2Admin 中文文档' } }
  ])('demo-frame-')
}
