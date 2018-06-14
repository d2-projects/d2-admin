// 路由菜单 插件
const demoPlugins = {
  path: '/demo/plugins',
  title: '插件',
  icon: 'plug',
  children: (pre => [
    { path: `${pre}index`, title: '插件首页' },
    {
      path: `${pre}mock`,
      title: '模拟数据',
      children: [
        { path: `${pre}mock/ajax`, title: '拦截异步请求' },
        { path: `${pre}mock/dpd`, title: 'DPD 规则' },
        { path: `${pre}mock/dtd`, title: 'DTD 规则' }
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
    { path: `${pre}day`, title: '日期计算' },
    { path: `${pre}js-cookie`, title: 'Cookie 读写' }
  ])('/demo/plugins/')
}

// 路由菜单 组件
const demoComponents = {
  path: '/demo/components',
  title: '组件',
  icon: 'puzzle-piece',
  children: (pre => [
    { path: `${pre}index`, title: '组件首页' },
    {
      path: `${pre}container`,
      title: '布局容器',
      children: [
        { path: `${pre}container/full`, title: '填满' },
        { path: `${pre}container/ghost`, title: '隐形' },
        { path: `${pre}container/card`, title: '卡片' }
      ]
    },
    {
      path: `${pre}layout/grid`,
      title: '高级布局',
      children: [
        { path: `${pre}layout/grid`, title: '拖拽位置和大小' },
        { path: `${pre}layout/splitpane`, title: '区域划分' }
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
    {
      path: `${pre}markdown`,
      title: 'markdown 解析',
      children: [
        { path: `${pre}markdown/source`, title: '指定资源' },
        { path: `${pre}markdown/url`, title: '异步加载文件' }
      ]
    },
    { path: `${pre}bigdata-table`, title: '百万数量级表格' },
    { path: `${pre}scrollbar`, title: '滚动条' },
    { path: `${pre}countup`, title: '数字动画' },
    { path: `${pre}editor-quill`, title: '富文本编辑器' },
    { path: `${pre}editor-simpleMDE`, title: 'markdown编辑器' },
    { path: `${pre}highlight`, title: '代码高亮显示' }
  ])('/demo/components/')
}

// 路由菜单 图表
const demoChart = {
  path: '/demo/chart',
  title: '图表',
  icon: 'pie-chart',
  children: (pre => [
    { path: `${pre}index`, title: '图表首页' },
    {
      path: `${pre}demo`,
      title: '单图示例',
      children: [
        { path: `${pre}demo/areaBase`, title: '区域折线图' },
        { path: `${pre}demo/barBase`, title: '条形图' },
        { path: `${pre}demo/columnBase`, title: '柱形图' },
        { path: `${pre}demo/lineBase`, title: '折线图' },
        { path: `${pre}demo/lineStep`, title: '阶梯折线图' },
        { path: `${pre}demo/nightingaleRoseBase`, title: '南丁格尔玫瑰图' },
        { path: `${pre}demo/PieBase`, title: '饼图' },
        { path: `${pre}demo/radarBase`, title: '雷达图' }
      ]
    },
    { path: `${pre}all`, title: '示例' },
    { path: `${pre}dynamicSize`, title: '动态尺寸与可拖拽' }
  ])('/demo/chart/')
}

// 菜单 侧边栏
export const side = [
  demoPlugins,
  demoComponents,
  demoChart
]

// 菜单 顶栏
export default [
  {
    path: '/index',
    title: '首页'
  },
  {
    path: '/demo',
    title: '功能',
    children: [
      demoPlugins,
      demoComponents,
      demoChart
    ]
  },
  {
    path: '/demo/business',
    title: '示例业务界面'
  }
]
