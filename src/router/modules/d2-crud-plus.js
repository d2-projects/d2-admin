import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/demo/d2-crud-plus',
  name: 'demo-d2-crud-plus',
  meta,
  redirect: { name: 'demo-d2-crud-plus-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'index', name: `${pre}index`, component: _import('demo/d2-crud-plus/index'), meta: { ...meta, title: 'D2 CRUD PLUS 首页' } },
    { path: 'demo', name: `${pre}demo`, component: _import('demo/d2-crud-plus/demo'), meta: { ...meta, title: '简单示例' } },
    { path: 'group', name: `${pre}group`, component: _import('demo/d2-crud-plus/group'), meta: { ...meta, title: '表单分组' } },
    { path: 'synthesize', name: `${pre}synthesize`, component: _import('demo/d2-crud-plus/synthesize'), meta: { ...meta, title: '综合示例' } }

  ])('demo-d2-crud-plus-')
}
