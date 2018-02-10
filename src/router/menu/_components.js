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
      icon: 'font-awesome',
      children: [
        {
          title: '图标组件',
          icon: 'file-o',
          path: 'data/icon/icon',
          name: 'demo-components-icon-icon',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/components/icon/icon.vue'], resolve) }
        },
        {
          title: '图标选择器',
          icon: 'file-o',
          path: 'data/icon/select',
          name: 'demo-components-icon-select',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/components/icon/select.vue'], resolve) }
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
