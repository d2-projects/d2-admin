// [业务演示] 菜单
export const menu = {
  title: '业务演示',
  path: '/demo/business',
  name: 'demo-business',
  meta: {
    requiresAuth: true
  },
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
          title: '使用 Worker',
          icon: 'file-o',
          path: 'data/worker',
          name: 'demo-business-data-worker',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/business/data/worker/index.vue'], resolve) }
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
