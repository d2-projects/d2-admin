import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/demo/business',
  name: 'demo-business',
  meta,
  redirect: { name: 'demo-business-index' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'index',
      name: `${pre}index`,
      component: () => import('@/pages/demo/business/index'),
      meta: {
        ...meta,
        title: '示例首页'
      }
    },
    {
      path: 'table/1',
      name: `${pre}table-1`,
      component: () => import('@/pages/demo/business/table/1'),
      meta: {
        ...meta,
        title: '表格 1'
      }
    },
    {
      path: 'issues/142',
      name: `${pre}issues-142`,
      component: () => import('@/pages/demo/business/issues/142'),
      meta: {
        ...meta,
        title: 'issue #142'
      }
    },
    {
      path: 'issues/142/edit/:id',
      name: `${pre}issues-142-edit`,
      component: () => import('@/pages/demo/business/issues/142/edit'),
      props: true,
      meta: {
        ...meta,
        title: '无缓存编辑'
      }
    },
    {
      path: 'issues/142/edit-cache-db/:id',
      name: `${pre}issues-142-edit-cache-db`,
      component: () => import('@/pages/demo/business/issues/142/edit-cache-db'),
      props: true,
      meta: {
        ...meta,
        title: '带缓存编辑 DB'
      }
    }
  ])('demo-business-')
}
