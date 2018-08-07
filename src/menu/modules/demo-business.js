export default {
  path: '/demo/business',
  title: '示例',
  icon: 'flask',
  children: (pre => [
    { path: `${pre}index`, title: '示例首页', icon: 'home' },
    {
      title: '表格',
      icon: 'table',
      children: [
        { path: `${pre}table/1`, title: '表格 1' }
      ]
    }
  ])('/demo/business/')
}
