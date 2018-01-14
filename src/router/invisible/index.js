export default [
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
        component: resolve => { require(['@/pages/demo/index/index.vue'], resolve) }
      }
    ]
  }
]
