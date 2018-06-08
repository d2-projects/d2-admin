export default [
  {
    path: '/index',
    title: '首页'
  },
  {
    path: '/demo',
    title: '功能',
    children: [
      {
        path: '/demo/plugins',
        title: '插件',
        icon: 'plug',
        children: ((pre) => [
          { path: `${pre}index`, title: '插件首页' },
          { path: `${pre}build`, title: '环境区分' },
          { path: `${pre}clipboard-polyfill`, title: '剪贴板访问' },
          {
            path: `${pre}export`,
            title: '导出',
            children: [
              { path: `${pre}export/table`, title: '表格' },
              { path: `${pre}export/txt`, title: '文本' }
            ]
          },
          {
            path: `${pre}i18n`,
            title: '多国语',
            children: [
              { path: `${pre}i18n/demo1`, title: '示例1' },
              { path: `${pre}i18n/demo2`, title: '示例2' }
            ]
          },
          {
            path: `${pre}import`,
            title: '导入',
            children: [
              { path: `${pre}import/csv`, title: 'csv' },
              { path: `${pre}import/xlsx`, title: 'xlsx' }
            ]
          },
          { path: `${pre}js-cookie`, title: 'title' },
          {
            path: `${pre}layout`,
            title: '布局',
            children: [
              { path: `${pre}layout/grid`, title: '可拖动卡片' },
              { path: `${pre}layout/splitpane`, title: '分割面板' }
            ]
          },
          {
            path: `${pre}mock`,
            title: '布局',
            children: [
              { path: `${pre}mock/ajax`, title: '拦截异步请求' },
              { path: `${pre}mock/dpd`, title: 'DPD规则' },
              { path: `${pre}mock/dtd`, title: 'DTD规则' }
            ]
          },
          { path: `${pre}timeago`, title: '计算已经过去的时间' }
        ])('/demo/plugins/')
      },
      {
        path: '/demo/components',
        title: '组件',
        icon: 'puzzle-piece'
      },
      {
        path: '/demo/chart',
        title: '图表',
        icon: 'pie-chart'
      }
    ]
  },
  {
    path: '/demo/business',
    title: '示例业务界面'
  }
]
