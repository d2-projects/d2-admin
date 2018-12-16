import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/demo/filters',
  name: 'demo-filters',
  meta,
  redirect: { name: 'demo-filters-index' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'index',
      name: `${pre}index`,
      component: () => import('@/pages/demo/filters/index'),
      meta: { ...meta, title: '过滤器首页' }
    },
    {
      path: 'day',
      name: `${pre}day`,
      component: () => import('@/pages/demo/filters/day'),
      meta: { ...meta, title: '日期和时间' }
    }
  ])('demo-filters-')
}
