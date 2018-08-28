export default {
  path: '/demo/d2-crud',
  title: 'D2 CRUD',
  iconSvg: 'd2-crud',
  children: (pre => [
    { path: `${pre}index`, title: 'D2 CRUD 首页', icon: 'home' },
    { path: `${pre}demo1`, title: '基础表格' },
    { path: `${pre}demo2`, title: '带斑马纹表格' },
    { path: `${pre}demo3`, title: '带边框表格' },
    { path: `${pre}demo4`, title: '带状态表格' },
    { path: `${pre}demo5`, title: '固定表头' },
    { path: `${pre}demo6`, title: '固定列' },
    { path: `${pre}demo7`, title: '流体高度' },
    { path: `${pre}demo8`, title: '多级表头' },
    { path: `${pre}demo9`, title: '单选' },
    { path: `${pre}demo10`, title: '多选' }
  ])('/demo/d2-crud/')
}
