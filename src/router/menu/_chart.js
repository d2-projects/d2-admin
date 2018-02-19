// [图表] 菜单
export const menu = {
  title: '图表',
  path: '/demo/chart',
  name: 'demo-chart',
  meta: {
    requiresAuth: true
  },
  component: resolve => { require(['@/components/core/MainLayout/index.vue'], resolve) },
  children: [
    // 所有
    {
      title: '所有',
      icon: 'file-o',
      path: 'index',
      name: 'demo-chart-index',
      meta: {
        requiresAuth: true
      },
      component: resolve => { require(['@/pages/demo/chart/index/index.vue'], resolve) }
    },
    // 单独演示
    {
      title: '单独演示',
      icon: 'file-o',
      children: [
        {
          title: '面积图',
          icon: 'file-o',
          path: 'demo/areaBase',
          name: 'demo-chart-demo-areaBase',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/chart/demo/areaBase.vue'], resolve) }
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
