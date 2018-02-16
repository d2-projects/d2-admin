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
          title: '索引',
          icon: 'file-o',
          path: 'icon/list',
          name: 'demo-components-icon-list',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/components/icon/list.vue'], resolve) }
        },
        {
          title: '图标组件',
          icon: 'file-o',
          path: 'icon/icon',
          name: 'demo-components-icon-icon',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/components/icon/icon.vue'], resolve) }
        },
        {
          title: '图标选择器',
          icon: 'file-o',
          path: 'icon/select',
          name: 'demo-components-icon-select',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/components/icon/select.vue'], resolve) }
        }
      ]
    },
    // 数字动画
    {
      title: '数字动画',
      icon: 'magic',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'countup/demo',
          name: 'demo-components-countup-demo',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/components/countup/demo.vue'], resolve) }
        }
      ]
    },
    // highlight
    {
      title: '代码高亮',
      icon: 'code',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'highlight/demo',
          name: 'demo-plugins-highlight-demo',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/components/highlight/demo.vue'], resolve) }
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
