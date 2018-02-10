// [组件] 菜单
export const menu = {
  title: '组件',
  path: '/demo/components',
  name: 'demo-components',
  meta: {
    requiresAuth: true
  },
  component: resolve => { require(['@/components/core/MainLayout/index.vue'], resolve) },
  // redirect: {
  //   name: ''
  // },
  children: [
    // 图标
    {
      title: '图标',
      icon: 'flask',
      children: [
        {
          title: '演示',
          icon: 'file-o',
          path: 'data/icon',
          name: 'demo-components-icon',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/components/icon/index.vue'], resolve) }
        }
      ]
    }
  ]
}

// [组件] 路由设置
export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
