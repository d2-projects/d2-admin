export default {
  path: '/demo/plugins',
  title: '插件',
  icon: 'plug',
  children: (pre => [
    { path: `${pre}index`, title: '插件', icon: 'home' },
    {
      path: `${pre}import`,
      title: '导入',
      icon: 'download',
      children: [
        { path: `${pre}import/csv`, title: 'csv' },
        { path: `${pre}import/xlsx`, title: 'xlsx' }
      ]
    },
    {
      path: `${pre}export`,
      title: '导出',
      icon: 'upload',
      children: [
        { path: `${pre}export/table`, title: '表格' },
        { path: `${pre}export/txt`, title: '文本' }
      ]
    },
    {
      path: `${pre}better-scroll`,
      title: '滚动扩展',
      icon: 'crosshairs',
      children: [
        { path: `${pre}better-scroll/base`, title: '基础用法' },
        { path: `${pre}better-scroll/to`, title: '滚动定位' }
      ]
    },
    { path: `${pre}clipboard-polyfill`, title: '剪贴板访问', icon: 'clipboard' },
    { path: `${pre}day`, title: '日期计算', icon: 'clock-o' },
    { path: `${pre}js-cookie`, title: 'Cookie 读写', icon: 'asterisk' }
  ])('/demo/plugins/')
}
