export default [
  // 首页
  {
    path: '/',
    component: resolve => { require(['@/components/core/MainLayout/index.vue'], resolve) },
    redirect: {
      name: 'index'
    },
    children: [
      {
        path: 'index',
        name: 'index',
        component: resolve => { require(['@/pages/core/index/index.vue'], resolve) }
      }
    ]
  },
  // 登陆
  {
    path: '/login',
    name: 'login',
    component: resolve => { require(['@/pages/core/login/index.vue'], resolve) }
  }
]
