// [业务演示] 菜单
export const businessMenu = {
  title: '业务演示',
  path: '/demo/business',
  name: 'demo-business',
  component: resolve => { require(['@/components/core/MainLayout/index.vue'], resolve) },
  children: [
    {
      title: '数据过滤',
      icon: 'document',
      path: 'dataFilter',
      name: 'demo-business-dataFilter',
      component: resolve => { require(['@/pages/demo/business/dataFilter/index.vue'], resolve) }
    }
  ]
}

// [图表] 路由设置
export const businessRouter = {
  ...businessMenu,
  children: [].concat(...businessMenu.children.map(e => e.children || e))
}
