export default {
  path: 'demo/business',
  name: 'demo-business',
  meta: {
    title: '示例',
    icon: 'flask',
    aside: true
  },
  children: (pre => [{
    path: 'index',
    name: `${pre}index`,
    meta: {
      title: '示例首页',
      icon: 'home'
    }
  },
  {
    path: 'table',
    name: `${pre}table`,
    meta: {
      title: '表格',
      icon: 'table'
    },
    children: [{
      path: '1',
      name: `${pre}table-1`,
      meta: {
        title: '表格 1'
      }
    }]
  }
  ])('demo-business-')
}
