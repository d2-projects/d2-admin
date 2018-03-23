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
      icon: 'user',
      children: [
        {
          title: '个人中心首页',
          icon: 'file-o',
          path: 'user-center/home',
          name: 'demo-business-user-center-home',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/business/user-center/home/index.vue'], resolve) }
        }
      ]
    },
    // 表格
    {
      title: '表格示例',
      icon: 'table',
      children: [
        {
          title: '键盘访问',
          icon: 'file-o',
          path: 'table/keyboard',
          name: 'demo-business-table-keyboard',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/business/table/keyboard/inedx.vue'], resolve) }
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
