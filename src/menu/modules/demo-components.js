export default {
  path: '/demo/components',
  title: '组件',
  icon: 'puzzle-piece',
  children: [
    { path: '/demo/components/index', title: '扩展组件', icon: 'home' },
    {
      path: '/demo/components/container',
      title: '布局容器',
      icon: 'window-restore',
      children: [
        {
          title: '填充型',
          children: [
            { path: '/demo/components/container/full', title: '基础', icon: '' },
            { path: '/demo/components/container/full-slot', title: '插槽', icon: '' },
            { path: '/demo/components/container/full-bs', title: '滚动优化', icon: '' }
          ]
        },
        {
          title: '隐形模式',
          children: [
            { path: '/demo/components/container/ghost', title: '基础', icon: '' },
            { path: '/demo/components/container/ghost-slot', title: '插槽', icon: '' },
            { path: '/demo/components/container/ghost-bs', title: '滚动优化', icon: '' }
          ]
        },
        {
          title: '卡片型',
          children: [
            { path: '/demo/components/container/card', title: '基础', icon: '' },
            { path: '/demo/components/container/card-slot', title: '插槽', icon: '' },
            { path: '/demo/components/container/card-bs', title: '滚动优化', icon: '' }
          ]
        },
        {
          title: '方法',
          children: [
            { path: '/demo/components/container/api?bs=false', title: '滚动控制', icon: '' },
            { path: '/demo/components/container/api?bs=true', title: '滚动控制 BS', icon: '' }
          ]
        }
      ]
    },
    {
      path: '/demo/components/layout/grid',
      title: '高级布局',
      icon: 'tasks',
      children: [
        { path: '/demo/components/layout/grid', title: '拖拽位置和大小' },
        { path: '/demo/components/layout/splitpane', title: '区域划分' }
      ]
    },
    {
      path: '/demo/components/editor',
      title: '编辑器',
      icon: 'pencil-square-o',
      children: [
        { path: '/demo/components/editor-ueditor', title: 'UEditor', icon: '' },
        { path: '/demo/components/editor-quill', title: 'Quill', icon: '' },
        { path: '/demo/components/editor-simpleMDE', title: 'simpleMDE', icon: '' }
      ]
    },
    {
      path: '/demo/components/icon',
      title: '图标',
      icon: 'star',
      children: [
        { path: '/demo/components/icon/icon', title: '图标组件' },
        { path: '/demo/components/icon/icon-svg', title: 'svg 图标组件' },
        { path: '/demo/components/icon/select', title: '图标选择器' },
        { path: '/demo/components/icon/select-svg', title: 'svg 图标选择器' },
        { path: '/demo/components/icon/list', title: 'FontAwesome' }
      ]
    },
    {
      path: '/demo/components/markdown',
      title: 'markdown 解析',
      icon: 'file-text-o',
      children: [
        { path: '/demo/components/markdown/source', title: '指定资源' },
        { path: '/demo/components/markdown/url', title: '异步加载文件' }
      ]
    },
    { path: '/demo/components/countup', title: '数字动画', icon: 'motorcycle' },
    { path: '/demo/components/highlight', title: '代码高亮显示', icon: 'code' },
    { path: '/demo/components/json-tree', title: 'JSON 展示', icon: 'sitemap' }
  ]
}
