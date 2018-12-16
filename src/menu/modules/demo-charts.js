export default {
  path: '/demo/charts',
  title: '图表',
  icon: 'line-chart',
  children: (pre => [
    { path: `${pre}index`, title: '图表', icon: 'home' },
    {
      path: `${pre}list`,
      title: '图表',
      icon: 'cube',
      children: [
        {
          path: `${pre}list/line`,
          title: '折线图',
          children: [
            { path: `${pre}list/line/demo1`, title: '一般' },
            { path: `${pre}list/line/demo2`, title: '横坐标倾斜' },
            { path: `${pre}list/line/demo3`, title: '堆叠面积图' },
            { path: `${pre}list/line/demo4`, title: '显示数值' },
            { path: `${pre}list/line/demo5`, title: '设置别名' }
          ]
        },
        {
          path: `${pre}list/histogram`,
          title: '柱状图',
          children: [
            { path: `${pre}list/histogram/demo1`, title: '一般' },
            { path: `${pre}list/histogram/demo2`, title: '指标维度' },
            { path: `${pre}list/histogram/demo3`, title: '混合图表' },
            { path: `${pre}list/histogram/demo4`, title: '堆叠柱状图' },
            { path: `${pre}list/histogram/demo5`, title: '显示数值' },
            { path: `${pre}list/histogram/demo6`, title: '横轴连续' }
          ]
        },
        {
          path: `${pre}list/bar`,
          title: '条形图',
          children: [
            { path: `${pre}list/bar/demo1`, title: '一般' },
            { path: `${pre}list/bar/demo2`, title: '指标维度' },
            { path: `${pre}list/bar/demo3`, title: '排序条形图' },
            { path: `${pre}list/bar/demo4`, title: '堆叠条形图' },
            { path: `${pre}list/bar/demo5`, title: '纵轴连续' }
          ]
        },
        {
          path: `${pre}list/pie`,
          title: '饼图',
          children: [
            { path: `${pre}list/pie/demo1`, title: '一般' },
            { path: `${pre}list/pie/demo2`, title: '指标维度' },
            { path: `${pre}list/pie/demo3`, title: '玫瑰图' },
            { path: `${pre}list/pie/demo4`, title: '限制条数' },
            { path: `${pre}list/pie/demo5`, title: '多圆饼图' },
            { path: `${pre}list/pie/demo6`, title: '设置半径' }
          ]
        },
        {
          path: `${pre}list/ring`,
          title: '环图',
          children: [
            { path: `${pre}list/ring/demo1`, title: '一般' },
            { path: `${pre}list/ring/demo2`, title: '指标维度' },
            { path: `${pre}list/ring/demo3`, title: '玫瑰图' },
            { path: `${pre}list/ring/demo4`, title: '限制显示条数' },
            { path: `${pre}list/ring/demo5`, title: '设置半径' }
          ]
        },
        {
          path: `${pre}list/waterfall`,
          title: '瀑布图',
          children: [
            { path: `${pre}list/waterfall/demo1`, title: '一般' }
          ]
        },
        {
          path: `${pre}list/funnel`,
          title: '漏斗图',
          children: [
            { path: `${pre}list/funnel/demo1`, title: '一般' },
            { path: `${pre}list/funnel/demo2`, title: '金字塔' }
          ]
        },
        {
          path: `${pre}list/radar`,
          title: '雷达图',
          children: [
            { path: `${pre}list/radar/demo1`, title: '一般' }
          ]
        },
        {
          path: `${pre}list/map`,
          title: '地图',
          children: [
            { path: `${pre}list/map/demo1`, title: '一般' },
            { path: `${pre}list/map/demo2`, title: '设置城市' },
            { path: `${pre}list/map/demo3`, title: '设置样式' }
          ]
        },
        {
          path: `${pre}list/sankey`,
          title: '桑基图',
          children: [
            { path: `${pre}list/sankey/demo1`, title: '一般' }
          ]
        },
        {
          path: `${pre}list/heatmap`,
          title: '热力图',
          children: [
            { path: `${pre}list/heatmap/demo1`, title: '一般' },
            { path: `${pre}list/heatmap/demo2`, title: '地图热力图' }
          ]
        },
        {
          path: `${pre}list/scatter`,
          title: '散点图',
          children: [
            { path: `${pre}list/scatter/demo1`, title: '单维度多指标' },
            { path: `${pre}list/scatter/demo2`, title: '双维度多指标' }
          ]
        },
        {
          path: `${pre}list/candle`,
          title: 'K线图',
          children: [
            { path: `${pre}list/candle/demo1`, title: '一般' },
            { path: `${pre}list/candle/demo2`, title: 'MA VOL' },
            { path: `${pre}list/candle/demo3`, title: '自定义' }
          ]
        },
        {
          path: `${pre}list/gauge`,
          title: '仪表盘',
          children: [
            { path: `${pre}list/gauge/demo1`, title: '一般' }
          ]
        },
        {
          path: `${pre}list/tree`,
          title: '树图',
          children: [
            { path: `${pre}list/tree/demo1`, title: '径向树图' }
          ]
        }
      ]
    }
  ])('/demo/charts/')
}
