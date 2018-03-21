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
    }
    // 页面容器
    // {
    //   title: '页面容器',
    //   icon: 'window-restore',
    //   children: [
    //     {
    //       title: '卡片',
    //       icon: 'file-o',
    //       path: 'container/normal',
    //       name: 'demo-business-container-normal',
    //       meta: {
    //         requiresAuth: true
    //       },
    //       component: resolve => { require(['@/pages/demo/business/container/normal.vue'], resolve) }
    //     },
    //     {
    //       title: '隐形',
    //       icon: 'file-o',
    //       path: 'container/ghost',
    //       name: 'demo-business-container-ghost',
    //       meta: {
    //         requiresAuth: true
    //       },
    //       component: resolve => { require(['@/pages/demo/business/container/ghost.vue'], resolve) }
    //     },
    //     {
    //       title: '撑满',
    //       icon: 'file-o',
    //       path: 'container/card-full',
    //       name: 'demo-business-container-card-full',
    //       meta: {
    //         requiresAuth: true
    //       },
    //       component: resolve => { require(['@/pages/demo/business/container/card-full.vue'], resolve) }
    //     }
    //   ]
    // }
  ]
}

// [业务演示] 路由设置
export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
