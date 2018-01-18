// [图表] 菜单
export const menu = {
  title: '图表',
  path: '/demo/charts',
  name: 'demo-charts',
  component: resolve => { require(['@/components/core/MainLayout/index.vue'], resolve) },
  children: [
    // pie 饼图
    {
      title: '饼图',
      icon: 'pie-graph',
      children: [
        {
          title: '样式 1',
          icon: 'document',
          path: 'pie/1',
          name: 'demo-charts-pie-1',
          component: resolve => { require(['@/pages/demo/charts/pie/1.vue'], resolve) }
        },
        {
          title: '样式 2',
          icon: 'document',
          path: 'pie/2',
          name: 'demo-charts-pie-2',
          component: resolve => { require(['@/pages/demo/charts/pie/2.vue'], resolve) }
        }
      ]
    }
  ]
}

// [图表] 路由设置
export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
