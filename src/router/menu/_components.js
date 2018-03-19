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
    // 页面容器
    {
      title: '页面容器',
      icon: 'window-restore',
      children: [
        {
          title: '文档',
          icon: 'file-o',
          path: 'container',
          name: 'demo-components-container',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/components/container/index.vue'], resolve) }
        },
        {
          title: '卡片',
          icon: 'file-o',
          path: 'container/normal',
          name: 'demo-components-container-normal',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/components/container/normal.vue'], resolve) }
        },
        {
          title: '隐形',
          icon: 'file-o',
          path: 'container/ghost',
          name: 'demo-components-container-ghost',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/components/container/ghost.vue'], resolve) }
        },
        {
          title: '撑满',
          icon: 'file-o',
          path: 'container/card-full',
          name: 'demo-components-container-card-full',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/components/container/card-full.vue'], resolve) }
        }
      ]
    },
    // 编辑器
    {
      title: '编辑器',
      icon: 'font',
      children: [
        {
          title: '富文本',
          icon: 'file-o',
          path: 'editor/quill',
          name: 'demo-components-editor-quill',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/components/editor/quill/demo.vue'], resolve) }
        },
        {
          title: 'markdown',
          icon: 'file-o',
          path: 'editor/simpleMDE',
          name: 'demo-components-editor-simpleMDE',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/components/editor/simpleMDE/demo.vue'], resolve) }
        }
      ]
    },
    // 图标
    {
      title: '图标',
      icon: 'font-awesome',
      children: [
        {
          title: 'FontAwesome',
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
          title: '图标组件 SVG',
          icon: 'file-o',
          path: 'icon/svg',
          name: 'demo-components-icon-svg',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/components/icon/svg.vue'], resolve) }
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
    // markdown 解析库
    {
      title: 'markdown解析',
      icon: 'font',
      children: [
        {
          title: '效果演示',
          icon: 'file-o',
          path: 'marked/demo',
          name: 'demo-components-markdown-demo',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/components/markdown/demo.vue'], resolve) }
        },
        {
          title: '文档',
          icon: 'file-o',
          path: 'marked/doc',
          name: 'demo-components-markdown-doc',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/components/markdown/doc.vue'], resolve) }
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
