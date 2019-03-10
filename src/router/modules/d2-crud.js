import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/demo/d2-crud',
  name: 'demo-d2-crud',
  meta,
  redirect: { name: 'demo-d2-crud-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'index', name: `${pre}index`, component: _import('demo/d2-crud/index'), meta: { ...meta, title: 'D2 CRUD v2 首页' } },
    { path: 'demo1', name: `${pre}demo1`, component: _import('demo/d2-crud/demo1'), meta: { ...meta, title: '基础表格' } },
    { path: 'demo2', name: `${pre}demo2`, component: _import('demo/d2-crud/demo2'), meta: { ...meta, title: '带斑马纹表格' } },
    { path: 'demo3', name: `${pre}demo3`, component: _import('demo/d2-crud/demo3'), meta: { ...meta, title: '带边框表格' } },
    { path: 'demo4', name: `${pre}demo4`, component: _import('demo/d2-crud/demo4'), meta: { ...meta, title: '带状态表格' } },
    { path: 'demo5', name: `${pre}demo5`, component: _import('demo/d2-crud/demo5'), meta: { ...meta, title: '固定表头' } },
    { path: 'demo6', name: `${pre}demo6`, component: _import('demo/d2-crud/demo6'), meta: { ...meta, title: '固定列' } },
    { path: 'demo7', name: `${pre}demo7`, component: _import('demo/d2-crud/demo7'), meta: { ...meta, title: '流体高度' } },
    { path: 'demo8', name: `${pre}demo8`, component: _import('demo/d2-crud/demo8'), meta: { ...meta, title: '多级表头' } },
    { path: 'demo9', name: `${pre}demo9`, component: _import('demo/d2-crud/demo9'), meta: { ...meta, title: '单选' } },
    { path: 'demo10', name: `${pre}demo10`, component: _import('demo/d2-crud/demo10'), meta: { ...meta, title: '多选' } },
    { path: 'demo11', name: `${pre}demo11`, component: _import('demo/d2-crud/demo11'), meta: { ...meta, title: '排序' } },
    { path: 'demo12', name: `${pre}demo12`, component: _import('demo/d2-crud/demo12'), meta: { ...meta, title: '筛选' } },
    { path: 'demo13', name: `${pre}demo13`, component: _import('demo/d2-crud/demo13'), meta: { ...meta, title: '表尾合计行' } },
    { path: 'demo14', name: `${pre}demo14`, component: _import('demo/d2-crud/demo14'), meta: { ...meta, title: '合并行' } },
    { path: 'demo15', name: `${pre}demo15`, component: _import('demo/d2-crud/demo15'), meta: { ...meta, title: '合并列' } },
    { path: 'demo16', name: `${pre}demo16`, component: _import('demo/d2-crud/demo16'), meta: { ...meta, title: '新增数据' } },
    { path: 'demo17', name: `${pre}demo17`, component: _import('demo/d2-crud/demo17'), meta: { ...meta, title: '修改数据' } },
    { path: 'demo18', name: `${pre}demo18`, component: _import('demo/d2-crud/demo18'), meta: { ...meta, title: '删除数据' } },
    { path: 'demo19', name: `${pre}demo19`, component: _import('demo/d2-crud/demo19'), meta: { ...meta, title: '自定义操作列' } },
    { path: 'demo20', name: `${pre}demo20`, component: _import('demo/d2-crud/demo20'), meta: { ...meta, title: '表单组件渲染' } },
    { path: 'demo21', name: `${pre}demo21`, component: _import('demo/d2-crud/demo21'), meta: { ...meta, title: '表单布局' } },
    { path: 'demo22', name: `${pre}demo22`, component: _import('demo/d2-crud/demo22'), meta: { ...meta, title: '表单校验' } },
    { path: 'demo23', name: `${pre}demo23`, component: _import('demo/d2-crud/demo23'), meta: { ...meta, title: '表格内编辑' } },
    { path: 'demo24', name: `${pre}demo24`, component: _import('demo/d2-crud/demo24'), meta: { ...meta, title: '表格slot' } },
    { path: 'demo25', name: `${pre}demo25`, component: _import('demo/d2-crud/demo25'), meta: { ...meta, title: '表格自定义组件' } },
    { path: 'demo26', name: `${pre}demo26`, component: _import('demo/d2-crud/demo26'), meta: { ...meta, title: '表单自定义组件' } },
    { path: 'demo27', name: `${pre}demo27`, component: _import('demo/d2-crud/demo27'), meta: { ...meta, title: '加载状态' } },
    { path: 'demo28', name: `${pre}demo28`, component: _import('demo/d2-crud/demo28'), meta: { ...meta, title: '自定义加载状态' } },
    { path: 'demo29', name: `${pre}demo29`, component: _import('demo/d2-crud/demo29'), meta: { ...meta, title: '分页' } },
    { path: 'demo30', name: `${pre}demo30`, component: _import('demo/d2-crud/demo30'), meta: { ...meta, title: '表单事件监听' } },
    { path: 'demo31', name: `${pre}demo31`, component: _import('demo/d2-crud/demo31'), meta: { ...meta, title: 'CRUD事件' } }
  ])('demo-d2-crud-')
}
