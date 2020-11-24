export default {
  path: '/demo/plugins',
  title: '插件',
  icon: 'plug',
  children: [
    { path: '/demo/plugins/index', title: '插件', icon: 'home' },
    {
      path: '/demo/plugins/import',
      title: '导入',
      icon: 'download',
      children: [
        { path: '/demo/plugins/import/csv', title: 'csv' },
        { path: '/demo/plugins/import/xlsx', title: 'xlsx' }
      ]
    },
    {
      path: '/demo/plugins/export',
      title: '导出',
      icon: 'upload',
      children: [
        { path: '/demo/plugins/export/table', title: '表格' },
        { path: '/demo/plugins/export/txt', title: '文本' }
      ]
    },
    { path: '/demo/plugins/clipboard-polyfill', title: '剪贴板访问', icon: 'clipboard' },
    { path: '/demo/plugins/day', title: '日期计算', icon: 'clock-o' },
    { path: '/demo/plugins/js-cookie', title: 'Cookie 读写', icon: 'asterisk' }
  ]
}
