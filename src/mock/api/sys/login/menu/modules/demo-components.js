export default {
  path: 'demo/components',
  name: 'demo-components',
  meta: {
    title: '内置组件',
    icon: 'puzzle-piece',
    aside: true
  },
  children: (pre => [{
    path: 'index',
    name: `${pre}index`,
    meta: {
      title: '扩展组件首页',
      icon: 'home',
      description: '组件首页'
    }
  },
  {
    path: 'container',
    name: `${pre}container`,
    meta: {
      title: '布局容器',
      icon: 'window-restore'
    },
    children: [{
      path: 'full',
      name: `${pre}container-full`,
      meta: {
        title: '填充',
        description: '布局组件 填充'
      }
    },
    {
      path: 'full-slot',
      name: `${pre}container-full-slot`,
      meta: {
        title: '填充 插槽',
        description: '布局组件 填充 插槽'
      }
    },
    {
      path: 'full-bs',
      name: `${pre}container-full-bs`,
      meta: {
        title: '填充 滚动优化',
        description: '布局组件 填充 滚动优化'
      }
    },
    {
      path: 'ghost',
      name: `${pre}container-ghost`,
      meta: {
        title: '隐形',
        description: '布局组件 隐形'
      }
    },
    {
      path: 'ghost-slot',
      name: `${pre}container-ghost-slot`,
      meta: {
        title: '隐形 插槽',
        description: '布局组件 隐形 插槽'
      }
    },
    {
      path: 'ghost-bs',
      name: `${pre}container-ghost-bs`,
      meta: {
        title: '隐形 滚动优化',
        description: '布局组件 隐形 滚动优化'
      }
    },
    {
      path: 'card',
      name: `${pre}container-card`,
      meta: {
        title: '卡片',
        description: '布局组件 卡片'
      }
    },
    {
      path: 'card-slot',
      name: `${pre}container-card-slot`,
      meta: {
        title: '卡片 插槽',
        description: '布局组件 卡片 插槽'
      }
    },
    {
      path: 'card-bs',
      name: `${pre}container-card-bs`,
      meta: {
        title: '卡片 滚动优化',
        description: '布局组件 卡片 滚动优化'
      }
    }
    ]
  },
  {
    path: 'layout',
    name: `${pre}layout`,
    meta: {
      title: '高级布局',
      icon: 'tasks'
    },
    children: [{
      path: 'grid',
      name: `${pre}layout-grid`,
      meta: {
        title: '拖拽位置和大小',
        description: '拖拽网格布局'
      }
    },
    {
      path: 'splitpane',
      name: `${pre}layout-splitpane`,
      meta: {
        title: '区域划分',
        description: '区域布局'
      }
    }
    ]
  },
  {
    path: 'icon',
    name: `${pre}icon`,
    meta: {
      title: '图标',
      icon: 'star'
    },
    children: [{
      path: 'icon',
      name: `${pre}icon-icon`,
      meta: {
        title: '图标组件'
      }
    },
    {
      path: 'list',
      name: `${pre}icon-list`,
      meta: {
        title: 'FontAwesome',
        description: '图标列表'
      }
    },
    {
      path: 'select',
      name: `${pre}icon-select`,
      meta: {
        title: '图标选择器',
        description: '图表选择器组件'
      }
    },
    {
      path: 'svg',
      name: `${pre}icon-svg`,
      meta: {
        title: 'SVG图标组件',
        description: 'svg 图标'
      }
    }
    ]
  },
  {
    path: 'markdown',
    name: `${pre}markdown`,
    meta: {
      title: 'markdown 解析',
      icon: 'file-text-o'
    },
    children: [{
      path: 'source',
      name: `${pre}markdown-source`,
      meta: {
        title: '指定资源',
        description: 'markdown指定资源渲染'
      }
    },
    {
      path: 'url',
      name: `${pre}markdown-url`,
      meta: {
        title: '异步加载文件',
        description: 'markdown指定url渲染'
      }
    }
    ]
  },
  {
    path: 'contextmenu',
    name: `${pre}contextmenu`,
    meta: {
      title: '右键菜单',
      icon: 'mouse-pointer'
    },
    children: [{
      path: 'simple',
      name: `${pre}contextmenu-simple`,
      meta: {
        title: '基础',
        description: '右键菜单 基础'
      }
    },
    {
      path: 'divier',
      name: `${pre}contextmenu-divier`,
      meta: {
        title: '分割线',
        description: '右键菜单 分割线'
      }
    },
    {
      path: 'group',
      name: `${pre}contextmenu-group`,
      meta: {
        title: '按钮组',
        description: '右键菜单 分组'
      }
    },
    {
      path: 'submenu',
      name: `${pre}contextmenu-submenu`,
      meta: {
        title: '子菜单',
        description: '右键菜单 子菜单'
      }
    },
    {
      path: 'disabled',
      name: `${pre}contextmenu-disabled`,
      meta: {
        title: '禁用',
        description: '右键菜单 禁用'
      }
    },
    {
      path: 'custom-trigger',
      name: `${pre}contextmenu-custom-trigger`,
      meta: {
        title: '自定义事件',
        description: '右键菜单 自定义触发'
      }
    }
    ]
  },
  {
    path: 'countup',
    name: `${pre}countup`,
    meta: {
      title: '数字动画',
      icon: 'motorcycle'
    }
  },
  {
    path: 'editor-quill',
    name: `${pre}editor-quill`,
    meta: {
      title: '富文本编辑器',
      icon: 'pencil-square-o (edit, edit)'
    }
  },
  {
    path: 'editor-simpleMDE',
    name: `${pre}editor-simpleMDE`,
    meta: {
      title: 'markdown编辑器',
      icon: 'font'
    }
  },
  {
    path: 'highlight',
    name: `${pre}highlight`,
    meta: {
      title: '代码高亮显示',
      icon: 'code'
    }
  },
  {
    path: 'json-tree',
    name: `${pre}json-tree`,
    meta: {
      title: 'JSON 展示',
      icon: 'sitemap'
    }
  }
  ])('demo-components-')
}
