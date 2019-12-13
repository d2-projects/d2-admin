export default {
  path: '/demo/components',
  title: '内置组件',
  icon: 'puzzle-piece',
  children: (pre => [
    { path: `${pre}index`, title: '扩展组件', icon: 'home' },
    {
      path: `${pre}container`,
      title: '布局容器',
      icon: 'window-restore',
      children: [
        {
          title: '填充型',
          children: [
            { path: `${pre}container/full`, title: '基础', icon: '' },
            { path: `${pre}container/full-slot`, title: '插槽', icon: '' },
            { path: `${pre}container/full-bs`, title: '滚动优化', icon: '' }
          ]
        },
        {
          title: '隐形模式',
          children: [
            { path: `${pre}container/ghost`, title: '基础', icon: '' },
            { path: `${pre}container/ghost-slot`, title: '插槽', icon: '' },
            { path: `${pre}container/ghost-bs`, title: '滚动优化', icon: '' }
          ]
        },
        {
          title: '卡片型',
          children: [
            { path: `${pre}container/card`, title: '基础', icon: '' },
            { path: `${pre}container/card-slot`, title: '插槽', icon: '' },
            { path: `${pre}container/card-bs`, title: '滚动优化', icon: '' }
          ]
        },
        {
          title: '方法',
          children: [
            { path: `${pre}container/api?bs=false`, title: '滚动控制', icon: '' },
            { path: `${pre}container/api?bs=true`, title: '滚动控制 BS', icon: '' }
          ]
        }
      ]
    },
    {
      path: `${pre}layout/grid`,
      title: '高级布局',
      icon: 'tasks',
      children: [
        { path: `${pre}layout/grid`, title: '拖拽位置和大小' },
        { path: `${pre}layout/splitpane`, title: '区域划分' }
      ]
    },
    {
      path: `${pre}editor`,
      title: '编辑器',
      icon: 'pencil-square-o',
      children: [
        { path: `${pre}editor-ueditor`, title: 'UEditor', icon: '' },
        { path: `${pre}editor-quill`, title: 'Quill', icon: '' },
        { path: `${pre}editor-simpleMDE`, title: 'simpleMDE', icon: '' }
      ]
    },
    {
      path: `${pre}icon`,
      title: '图标',
      icon: 'star',
      children: [
        { path: `${pre}icon/icon`, title: '图标组件' },
        { path: `${pre}icon/icon-svg`, title: 'svg 图标组件' },
        { path: `${pre}icon/select`, title: '图标选择器' },
        { path: `${pre}icon/select-svg`, title: 'svg 图标选择器' },
        { path: `${pre}icon/list`, title: 'FontAwesome' }
      ]
    },
    {
      path: `${pre}markdown`,
      title: 'markdown 解析',
      icon: 'file-text-o',
      children: [
        { path: `${pre}markdown/source`, title: '指定资源' },
        { path: `${pre}markdown/url`, title: '异步加载文件' }
      ]
    },
    { path: `${pre}countup`, title: '数字动画', icon: 'motorcycle' },
    { path: `${pre}highlight`, title: '代码高亮显示', icon: 'code' },
    { path: `${pre}json-tree`, title: 'JSON 展示', icon: 'sitemap' }
  ])('/demo/components/')
}
