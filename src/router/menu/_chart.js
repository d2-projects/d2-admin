// [图表] 菜单
export const menu = {
  title: '图表',
  path: '/demo/chart',
  name: 'demo-chart',
  meta: {
    requiresAuth: true
  },
  component: resolve => { require(['@/components/core/MainLayout/index.vue'], resolve) },
  redirect: {
    name: 'demo-chart-index'
  },
  children: [
    // 数据处理
    {
      title: '图表演示1',
      icon: 'file-o',
      path: 'index',
      name: 'demo-chart-index',
      meta: {
        requiresAuth: true
      },
      component: resolve => { require(['@/pages/demo/chart/index/index.vue'], resolve) }
    },
    {
      title: '图表演示2',
      icon: 'file-o',
      path: 'index2',
      name: 'demo-chart-index2',
      meta: {
        requiresAuth: true
      },
      component: resolve => { require(['@/pages/demo/chart/index2/index.vue'], resolve) }
    }
  ]
}

// [图表] 路由设置
export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
