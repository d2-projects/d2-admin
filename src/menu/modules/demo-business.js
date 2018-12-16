export default {
  path: '/demo/business',
  title: '示例',
  icon: 'flask',
  children: (pre => [
    { path: `${pre}index`, title: '示例', icon: 'home' },
    {
      title: '表格',
      icon: 'table',
      children: [
        { path: `${pre}table/1`, title: '表格 1' }
      ]
    },
    {
      title: 'ISSUES',
      icon: 'github',
      children: [
        { path: `${pre}issues/142`, title: '#142' }
      ]
    }
  ])('/demo/business/')
}
