export default {
  path: '/demo/d2-crud',
  title: 'D2 CRUD',
  icon: 'table',
  children: (pre => [
    { path: `${pre}index`, title: 'D2 CRUD 首页', icon: 'home' },
    { path: `${pre}demo1`, title: '基础表格' }
  ])('/demo/d2-crud/')
}
