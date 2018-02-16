// [插件] 菜单
export const menu = {
  title: '插件',
  path: '/demo/plugins',
  name: 'demo-plugins',
  meta: {
    requiresAuth: true
  },
  component: resolve => { require(['@/components/core/MainLayout/index.vue'], resolve) },
  // redirect: {
  //   name: 'demo-plugins-marked-readme'
  // },
  children: [
    // mock
    {
      title: '模拟数据',
      icon: 'globe',
      children: [
        {
          title: '数据模板',
          icon: 'file-o',
          path: 'mock/demoDTD',
          name: 'demo-plugins-mock-demoDTD',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/mock/demoDTD.vue'], resolve) }
        },
        {
          title: '数据占位符',
          icon: 'file-o',
          path: 'mock/demoDPD',
          name: 'demo-plugins-mock-demoDPD',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/mock/demoDPD.vue'], resolve) }
        },
        {
          title: '拦截Ajax请求',
          icon: 'file-o',
          path: 'mock/ajax',
          name: 'demo-plugins-mock-ajax',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/mock/ajax.vue'], resolve) }
        }
      ]
    },
    // 布局
    {
      title: '布局',
      icon: 'object-ungroup',
      children: [
        {
          title: '可拖动网格布局',
          icon: 'file-o',
          path: 'layout/grid',
          name: 'demo-plugins-layout-grid',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/layout/grid.vue'], resolve) }
        },
        {
          title: '可调布局',
          icon: 'file-o',
          path: 'layout/splitpane',
          name: 'demo-plugins-layout-splitpane',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/layout/splitpane.vue'], resolve) }
        }
      ]
    },
    // 多国语
    {
      title: '多国语',
      icon: 'book',
      children: [
        {
          title: '演示页面 1',
          icon: 'file-o',
          path: 'vue-i18n/demo-1',
          name: 'demo-plugins-vue-i18n-demo-1',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/vue-i18n/demo-1.vue'], resolve) }
        },
        {
          title: '演示页面 2',
          icon: 'file-o',
          path: 'vue-i18n/demo-2',
          name: 'demo-plugins-vue-i18n-demo-2',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/vue-i18n/demo-2.vue'], resolve) }
        },
        {
          title: '使用方法',
          icon: 'file-o',
          path: 'vue-i18n/doc',
          name: 'demo-plugins-vue-i18n-doc',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/vue-i18n/doc.vue'], resolve) }
        }
      ]
    },
    // 导入和导出
    {
      title: '导入和导出',
      icon: 'download',
      children: [
        {
          title: '导入csv文件',
          icon: 'download',
          path: 'import/csv',
          name: 'demo-plugins-import-csv',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/import/csv.vue'], resolve) }
        },
        {
          title: '导入xlsx文件',
          icon: 'download',
          path: 'import/xlsx',
          name: 'demo-plugins-import-xlsx',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/import/xlsx.vue'], resolve) }
        },
        {
          title: '导出表格',
          icon: 'cloud-download',
          path: 'export/table',
          name: 'demo-plugins-export-table',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/export/table.vue'], resolve) }
        },
        {
          title: '导出文本',
          icon: 'cloud-download',
          path: 'export/txt',
          name: 'demo-plugins-export-txt',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/export/txt.vue'], resolve) }
        }
      ]
    },
    // clipboard-polyfill
    {
      title: '剪贴板',
      icon: 'clipboard',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'clipboard-polyfill/demo',
          name: 'demo-plugins-clipboard-polyfill-demo',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/clipboard-polyfill/demo.vue'], resolve) }
        }
      ]
    },
    // js-cookie
    {
      title: 'Cookie',
      icon: 'hdd-o',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'js-cookie/demo',
          name: 'demo-plugins-js-cookie-demo',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/js-cookie/demo.vue'], resolve) }
        }
      ]
    },
    // markdown 解析库
    {
      title: 'markdown解析',
      icon: 'font',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'marked/demo',
          name: 'demo-plugins-marked-demo',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/marked/demo.vue'], resolve) }
        },
        {
          title: '代码高亮',
          icon: 'file-o',
          path: 'marked/demoHighlight',
          name: 'demo-plugins-marked-demoHighlight',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/marked/demoHighlight.vue'], resolve) }
        }
      ]
    },
    // 时间计算
    {
      title: '时间计算',
      icon: 'clock-o',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'timeago/demo',
          name: 'demo-plugins-timeago-demo',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/timeago/demo.vue'], resolve) }
        }
      ]
    }
  ]
}

// [插件] 路由设置
export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
