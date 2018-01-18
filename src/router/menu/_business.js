// [业务演示] 菜单
export const menu = {
  title: '业务演示',
  path: '/demo/business',
  name: 'demo-business',
  component: resolve => { require(['@/components/core/MainLayout/index.vue'], resolve) },
  // redirect: {
  //   name: ''
  // },
  children: [
    // 数据处理
    {
      title: '数据处理',
      icon: 'flask',
      children: [
        {
          title: '大型数据渲染',
          icon: 'file-o',
          path: 'data/largeData',
          name: 'demo-business-data-largeData',
          component: resolve => { require(['@/pages/demo/business/data/largeData/index.vue'], resolve) }
        }
      ]
    }
  ]
}

// [业务演示] 路由设置
export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
