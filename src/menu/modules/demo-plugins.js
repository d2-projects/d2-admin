export default {
  path: '/demo/plugins',
  title: '插件',
  icon: 'plug',
  children: (pre => [
    { path: `${pre}index`, title: '插件', icon: 'home' },
    {
      path: `${pre}charts`,
      title: '图表',
      icon: 'bar-chart',
      children: [
        {
          path: `${pre}charts/line`,
          title: '折线图',
          children: [
            { path: `${pre}charts/line/demo1`, title: '一般' },
            { path: `${pre}charts/line/demo2`, title: '横坐标倾斜' },
            { path: `${pre}charts/line/demo3`, title: '堆叠面积图' },
            { path: `${pre}charts/line/demo4`, title: '显示数值' },
            { path: `${pre}charts/line/demo5`, title: '设置别名' }
          ]
        },
        {
          path: `${pre}charts/histogram`,
          title: '柱状图',
          children: [
            { path: `${pre}charts/histogram/demo1`, title: '一般' },
            { path: `${pre}charts/histogram/demo2`, title: '指标维度' },
            { path: `${pre}charts/histogram/demo3`, title: '混合图表' },
            { path: `${pre}charts/histogram/demo4`, title: '堆叠柱状图' },
            { path: `${pre}charts/histogram/demo5`, title: '显示数值' },
            { path: `${pre}charts/histogram/demo6`, title: '横轴连续' }
          ]
        },
        {
          path: `${pre}charts/bar`,
          title: '条形图',
          children: [
            { path: `${pre}charts/bar/demo1`, title: '一般' },
            { path: `${pre}charts/bar/demo2`, title: '指标维度' },
            { path: `${pre}charts/bar/demo3`, title: '排序条形图' },
            { path: `${pre}charts/bar/demo4`, title: '堆叠条形图' },
            { path: `${pre}charts/bar/demo5`, title: '纵轴连续' }
          ]
        },
        {
          path: `${pre}charts/pie`,
          title: '饼图',
          children: [
            { path: `${pre}charts/pie/demo1`, title: '一般' },
            { path: `${pre}charts/pie/demo2`, title: '指标维度' },
            { path: `${pre}charts/pie/demo3`, title: '玫瑰图' },
            { path: `${pre}charts/pie/demo4`, title: '限制条数' },
            { path: `${pre}charts/pie/demo5`, title: '多圆饼图' },
            { path: `${pre}charts/pie/demo6`, title: '设置半径' }
          ]
        },
        {
          path: `${pre}charts/ring`,
          title: '环图',
          children: [
            { path: `${pre}charts/ring/demo1`, title: '一般' },
            { path: `${pre}charts/ring/demo2`, title: '指标维度' },
            { path: `${pre}charts/ring/demo3`, title: '玫瑰图' },
            { path: `${pre}charts/ring/demo4`, title: '限制显示条数' },
            { path: `${pre}charts/ring/demo5`, title: '设置半径' }
          ]
        },
        {
          path: `${pre}charts/waterfall`,
          title: '瀑布图',
          children: [
            { path: `${pre}charts/waterfall/demo1`, title: '一般' }
          ]
        },
        {
          path: `${pre}charts/funnel`,
          title: '漏斗图',
          children: [
            { path: `${pre}charts/funnel/demo1`, title: '一般' },
            { path: `${pre}charts/funnel/demo2`, title: '金字塔' }
          ]
        },
        {
          path: `${pre}charts/radar`,
          title: '雷达图',
          children: [
            { path: `${pre}charts/radar/demo1`, title: '一般' }
          ]
        },
        {
          path: `${pre}charts/map`,
          title: '地图',
          children: [
            { path: `${pre}charts/map/demo1`, title: '一般' },
            { path: `${pre}charts/map/demo2`, title: '设置城市' },
            { path: `${pre}charts/map/demo3`, title: '设置样式' }
          ]
        },
        {
          path: `${pre}charts/sankey`,
          title: '桑基图',
          children: [
            { path: `${pre}charts/sankey/demo1`, title: '一般' }
          ]
        },
        {
          path: `${pre}charts/heatmap`,
          title: '热力图',
          children: [
            { path: `${pre}charts/heatmap/demo1`, title: '一般' },
            { path: `${pre}charts/heatmap/demo2`, title: '地图热力图' }
          ]
        },
        {
          path: `${pre}charts/scatter`,
          title: '散点图',
          children: [
            { path: `${pre}charts/scatter/demo1`, title: '单维度多指标' },
            { path: `${pre}charts/scatter/demo2`, title: '双维度多指标' }
          ]
        },
        {
          path: `${pre}charts/candle`,
          title: 'K线图',
          children: [
            { path: `${pre}charts/candle/demo1`, title: '一般' },
            { path: `${pre}charts/candle/demo2`, title: 'MA VOL' },
            { path: `${pre}charts/candle/demo3`, title: '自定义' }
          ]
        },
        {
          path: `${pre}charts/gauge`,
          title: '仪表盘',
          children: [
            { path: `${pre}charts/gauge/demo1`, title: '一般' }
          ]
        },
        {
          path: `${pre}charts/tree`,
          title: '树图',
          children: [
            { path: `${pre}charts/tree/demo1`, title: '径向树图' }
          ]
        }
      ]
    },
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
