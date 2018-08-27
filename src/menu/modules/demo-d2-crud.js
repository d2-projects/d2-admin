export default {
  path: '/demo/d2-crud',
  title: 'D2 CRUD',
  icon: 'table',
  children: (pre => [
    { path: `${pre}index`, title: 'D2 CRUD 首页', icon: 'home' },
    { path: `${pre}demo1`, title: '基础表格' },
    { path: `${pre}demo2`, title: '带斑马纹表格' },
    { path: `${pre}demo3`, title: '带边框表格' }
  ])('/demo/d2-crud/')
}
