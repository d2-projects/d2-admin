import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

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
      component: _import('demo/business/index'),
      meta: {
        ...meta,
        title: '示例首页'
      }
    },
    {
      path: 'table/1',
      name: `${pre}table-1`,
      component: _import('demo/business/table/1'),
      meta: {
        ...meta,
        title: '表格 1'
      }
    },
    {
      path: 'issues/142',
      name: `${pre}issues-142`,
      component: _import('demo/business/issues/142'),
      meta: {
        ...meta,
        title: 'issue #142'
      }
    },
    {
      path: 'issues/142/edit/:id',
      name: `${pre}issues-142-edit`,
      component: _import('demo/business/issues/142/edit'),
      props: true,
      meta: {
        ...meta,
        title: '无缓存编辑'
      }
    },
    {
      path: 'issues/142/edit-cache-db/:id',
      name: `${pre}issues-142-edit-cache-db`,
      component: _import('demo/business/issues/142/edit-cache-db'),
      props: true,
      meta: {
        ...meta,
        title: '带缓存编辑 DB'
      }
    }
  ])('demo-business-')
}
