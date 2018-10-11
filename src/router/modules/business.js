import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/demo/business',
  name: 'demo-business',
  meta,
  redirect: { name: 'demo-business-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/business/index'), meta: { ...meta, title: '示例首页' } },
    { path: 'table/1', name: `${pre}table-1`, component: () => import('@/pages/demo/business/table/1'), meta: { ...meta, title: '表格 1' } }
  ])('demo-business-')
}
