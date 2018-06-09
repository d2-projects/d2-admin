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
          {
            path: `${pre}mock`,
            title: '模拟数据',
            children: [
              { path: `${pre}mock/ajax`, title: '拦截异步请求' },
              { path: `${pre}mock/dpd`, title: 'DPD规则' },
              { path: `${pre}mock/dtd`, title: 'DTD规则' }
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
          { path: `${pre}build`, title: '环境区分' },
          { path: `${pre}clipboard-polyfill`, title: '剪贴板访问' },
          { path: `${pre}js-cookie`, title: 'cookie读写' },
          { path: `${pre}timeago`, title: '计算已经过去的时间' }
        ])('/demo/plugins/')
      },
      {
        path: '/demo/components',
        title: '组件',
        icon: 'puzzle-piece',
        children: ((pre) => [
          { path: `${pre}index`, title: '组件首页' },
          {
            path: `${pre}container`,
            title: '布局容器',
            children: [
              { path: `${pre}container/full`, title: '填满' },
              { path: `${pre}container/ghost`, title: '隐形' },
              { path: `${pre}container/normal`, title: '一般' }
            ]
          },
          {
            path: `${pre}layout/grid`,
            title: '高级布局',
            children: [
              { path: `${pre}layout/grid`, title: 'title' },
              { path: `${pre}layout/splitpane`, title: 'title' }
            ]
          },
          {
            path: `${pre}icon`,
            title: '图标',
            children: [
              { path: `${pre}icon/icon`, title: '图标组件' },
              { path: `${pre}icon/list`, title: 'FontAwesome' },
              { path: `${pre}icon/select`, title: '图标选择器' },
              { path: `${pre}icon/svg`, title: 'SVG图标组件' }
            ]
          },
          { path: `${pre}countup`, title: '数字动画' },
          { path: `${pre}editor-quill`, title: '富文本编辑器' },
          { path: `${pre}editor-simpleMDE`, title: 'markdown编辑器' },
          { path: `${pre}highlight`, title: '代码高亮显示' },
          { path: `${pre}markdown`, title: 'markdown解析' }
        ])('/demo/components/')
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
