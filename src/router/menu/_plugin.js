// [插件] 菜单
export const menu = {
  title: '功能',
  path: '/demo/plugins',
  name: 'demo-plugins',
  component: resolve => { require(['@/components/core/MainLayout/index.vue'], resolve) },
  // redirect: {
  //   name: 'demo-plugins-marked-readme'
  // },
  children: [
    // markdown 解析库
    {
      title: 'MD解析',
      icon: 'font',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'marked/demo',
          name: 'demo-plugins-marked-demo',
          component: resolve => { require(['@/pages/demo/plugins/marked/demo.vue'], resolve) }
        },
        {
          title: '代码高亮',
          icon: 'file-o',
          path: 'marked/demoHighlight',
          name: 'demo-plugins-marked-demoHighlight',
          component: resolve => { require(['@/pages/demo/plugins/marked/demoHighlight.vue'], resolve) }
        }
      ]
    },
    // MD编辑器
    {
      title: 'MD编辑器',
      icon: 'columns',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'simpleMDE/demo',
          name: 'demo-plugins-simpleMDE-demo',
          component: resolve => { require(['@/pages/demo/plugins/simpleMDE/demo.vue'], resolve) }
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
          component: resolve => { require(['@/pages/demo/plugins/quill/demo.vue'], resolve) }
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
          component: resolve => { require(['@/pages/demo/plugins/font-awesome/list.vue'], resolve) }
        },
        {
          title: '选择控件',
          icon: 'file-o',
          path: 'font-awesome/select',
          name: 'demo-font-awesome-select',
          component: resolve => { require(['@/pages/demo/plugins/font-awesome/select.vue'], resolve) }
        }
      ]
    },
    // 拖拽网格布局组件
    {
      title: '网格布局',
      icon: 'object-ungroup',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'vue-grid-layout/demo',
          name: 'demo-plugins-vue-grid-layout-demo',
          component: resolve => { require(['@/pages/demo/plugins/vue-grid-layout/demo.vue'], resolve) }
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
          component: resolve => { require(['@/pages/demo/plugins/timeago/demo.vue'], resolve) }
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
          component: resolve => { require(['@/pages/demo/plugins/papaParse/demo.vue'], resolve) }
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
          component: resolve => { require(['@/pages/demo/plugins/highlight/demo.vue'], resolve) }
        }
      ]
    },
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
          component: resolve => { require(['@/pages/demo/plugins/mock/demoDTD.vue'], resolve) }
        },
        {
          title: '数据占位符',
          icon: 'file-o',
          path: 'mock/demoDPD',
          name: 'demo-plugins-mock-demoDPD',
          component: resolve => { require(['@/pages/demo/plugins/mock/demoDPD.vue'], resolve) }
        },
        {
          title: '拦截Ajax请求',
          icon: 'file-o',
          path: 'mock/ajax',
          name: 'demo-plugins-mock-ajax',
          component: resolve => { require(['@/pages/demo/plugins/mock/ajax.vue'], resolve) }
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
          component: resolve => { require(['@/pages/demo/plugins/vue-splitpane/demo.vue'], resolve) }
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
