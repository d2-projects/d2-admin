import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

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
      component: _import('demo/filters/index'),
      meta: { ...meta, title: '过滤器首页' }
    },
    {
      path: 'day',
      name: `${pre}day`,
      component: _import('demo/filters/day'),
      meta: { ...meta, title: '日期和时间' }
    }
  ])('demo-filters-')
}
