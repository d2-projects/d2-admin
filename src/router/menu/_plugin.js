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
    // 多国语
    {
      title: '多国语',
      icon: 'book',
      children: [
        {
          title: '示例 1',
          icon: 'file-o',
          path: 'vue-i18n/demo-1',
          name: 'demo-plugins-vue-i18n-demo-1',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/vue-i18n/demo-1.vue'], resolve) }
        },
        {
          title: '示例 2',
          icon: 'file-o',
          path: 'vue-i18n/demo-2',
          name: 'demo-plugins-vue-i18n-demo-2',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/vue-i18n/demo-2.vue'], resolve) }
        },
        {
          title: '文档',
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
    // 富文本编辑器
    {
      title: '富文本编辑器',
      icon: 'edit',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'quill/demo',
          name: 'demo-plugins-quill-demo',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/quill/demo.vue'], resolve) }
        }
      ]
    },
    // MD编辑器
    {
      title: 'markdown编辑器',
      icon: 'columns',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'simpleMDE/demo',
          name: 'demo-plugins-simpleMDE-demo',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/simpleMDE/demo.vue'], resolve) }
        }
      ]
    },
    // font-awesome
    {
      title: '图标库',
      icon: 'heart',
      children: [
        {
          title: '索引',
          icon: 'file-o',
          path: 'font-awesome/list',
          name: 'demo-font-awesome-list',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/font-awesome/list.vue'], resolve) }
        }
      ]
    },
    // 拖拽网格布局组件
    {
      title: '可拖拽网格布局',
      icon: 'object-ungroup',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'vue-grid-layout/demo',
          name: 'demo-plugins-vue-grid-layout-demo',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/vue-grid-layout/demo.vue'], resolve) }
        }
      ]
    },
    // papaParse
    {
      title: '表格解析',
      icon: 'eye',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'papaParse/demo',
          name: 'demo-plugins-papaParse-demo',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/papaParse/demo.vue'], resolve) }
        }
      ]
    },
    // export
    {
      title: '导出',
      icon: 'download',
      children: [
        {
          title: '导出表格',
          icon: 'file-o',
          path: 'export/table',
          name: 'demo-plugins-export-table',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/export/table.vue'], resolve) }
        },
        {
          title: '导出文本',
          icon: 'file-o',
          path: 'export/txt',
          name: 'demo-plugins-export-txt',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/export/txt.vue'], resolve) }
        }
      ]
    },
    // countup
    {
      title: '数字动画',
      icon: 'magic',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'countup/demo',
          name: 'demo-plugins-countup-demo',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/countup/demo.vue'], resolve) }
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
          component: resolve => { require(['@/pages/demo/plugins/highlight/demo.vue'], resolve) }
        }
      ]
    },
    // 可调布局组件
    {
      title: '可调布局',
      icon: 'object-group',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'vue-splitpane/demo',
          name: 'demo-plugins-vue-splitpane-demo',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/vue-splitpane/demo.vue'], resolve) }
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
