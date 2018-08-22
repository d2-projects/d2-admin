export default {
  path: '/demo/components',
  title: '内置组件',
  icon: 'puzzle-piece',
  children: (pre => [
    { path: `${pre}index`, title: '扩展组件首页', icon: 'home' },
    {
      path: `${pre}container`,
      title: '布局容器',
      icon: 'window-restore',
      children: [
        { path: `${pre}container/full`, title: '填充' },
        { path: `${pre}container/full-slot`, title: '填充 插槽' },
        { path: `${pre}container/full-bs`, title: '填充 滚动优化' },
        { path: `${pre}container/ghost`, title: '隐形' },
        { path: `${pre}container/ghost-slot`, title: '隐形 插槽' },
        { path: `${pre}container/ghost-bs`, title: '隐形 滚动优化' },
        { path: `${pre}container/card`, title: '卡片' },
        { path: `${pre}container/card-slot`, title: '卡片 插槽' },
        { path: `${pre}container/card-bs`, title: '卡片 滚动优化' }
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
      path: `${pre}icon`,
      title: '图标',
      icon: 'star',
      children: [
        { path: `${pre}icon/icon`, title: '图标组件' },
        { path: `${pre}icon/list`, title: 'FontAwesome' },
        { path: `${pre}icon/select`, title: '图标选择器' },
        { path: `${pre}icon/svg`, title: 'SVG图标组件' }
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
    {
      path: `${pre}contextmenu`,
      title: '右键菜单',
      icon: 'mouse-pointer',
      children: [
        { path: `${pre}contextmenu/simple`, title: '基础' },
        { path: `${pre}contextmenu/divier`, title: '分割线' },
        { path: `${pre}contextmenu/group`, title: '按钮组' },
        { path: `${pre}contextmenu/submenu`, title: '子菜单' },
        { path: `${pre}contextmenu/disabled`, title: '禁用' },
        { path: `${pre}contextmenu/custom-trigger`, title: '自定义事件' }
      ]
    },
    { path: `${pre}countup`, title: '数字动画', icon: 'motorcycle' },
    { path: `${pre}editor-quill`, title: '富文本编辑器', icon: 'pencil-square-o (edit, edit)' },
    { path: `${pre}editor-simpleMDE`, title: 'markdown编辑器', icon: 'font' },
    { path: `${pre}highlight`, title: '代码高亮显示', icon: 'code' },
    { path: `${pre}json-tree`, title: 'JSON 展示', icon: 'sitemap' }
  ])('/demo/components/')
}
