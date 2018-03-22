// [业务演示] 菜单
export const menu = {
  title: '示例界面',
  path: '/demo/business',
  name: 'demo-business',
  meta: {
    requiresAuth: true
  },
  component: resolve => { require(['@/components/core/MainLayout/index.vue'], resolve) },
  redirect: {
    name: 'demo-business-index'
  },
  children: [
    // 首页
    {
      path: 'index',
      name: 'demo-business-index',
      meta: {
        requiresAuth: true
      },
      component: resolve => { require(['@/pages/demo/business/index/index.vue'], resolve) }
    },
    // 用户中心
    {
      title: '用户中心',
      icon: 'window-restore',
      children: [
        {
          title: '主页',
          icon: 'file-o',
          path: 'user-center/home',
          name: 'demo-business-user-center-home',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/business/user-center/home/index.vue'], resolve) }
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
