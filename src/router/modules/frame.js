import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/demo/frame',
  name: 'demo-frame',
  meta,
  redirect: { name: 'demo-frame-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'html', name: `${pre}html`, component: () => import('@/pages/demo/frame/html'), meta: { ...meta, title: '静态 HTML' } },
    { path: 'd2-doc', name: `${pre}d2-doc`, component: () => import('@/pages/demo/frame/d2-doc'), meta: { ...meta, title: 'D2Admin 中文文档' } }
  ])('demo-frame-')
}
