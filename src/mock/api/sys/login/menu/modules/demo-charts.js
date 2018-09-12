export default {
  path: 'demo/charts',
  name: 'demo-charts',
  meta: {
    title: '图表',
    icon: 'line-chart',
    aside: true
  },
  children: (pre => [{
    path: 'index',
    name: `${pre}index`,
    meta: {
      title: '图表首页',
      icon: 'home'
    }
  },
  {
    path: 'list',
    name: `${pre}list`,
    meta: {
      title: '图表',
      icon: 'cube'
    },
    children: [{
      path: 'line',
      name: `${pre}line`,
      meta: {
        title: '折线图'
      },
      children: [{
        path: 'demo1',
        name: `${pre}list-line-demo1`,
        meta: {
          title: '一般',
          description: '折线图示例 1'
        }
      },
      {
        path: 'demo2',
        name: `${pre}list-line-demo2`,
        meta: {
          title: '横坐标倾斜',
          description: '折线图示例 2'
        }
      },
      {
        path: 'demo3',
        name: `${pre}list-line-demo3`,
        meta: {
          title: '堆叠面积图',
          description: '折线图示例 3'
        }
      },
      {
        path: 'demo4',
        name: `${pre}list-line-demo4`,
        meta: {
          title: '显示数值',
          description: '折线图示例 4'
        }
      },
      {
        path: 'demo5',
        name: `${pre}list-line-demo5`,
        meta: {
          title: '设置别名',
          description: '折线图示例 5'
        }
      }
      ]
    },
    {
      path: 'histogram',
      name: `${pre}histogram`,
      meta: {
        title: '柱状图'
      },
      children: [{
        path: 'demo1',
        name: `${pre}list-histogram-demo1`,
        meta: {
          title: '一般',
          description: '柱状图示例 1'
        }
      },
      {
        path: 'demo2',
        name: `${pre}list-histogram-demo2`,
        meta: {
          title: '指标维度',
          description: '柱状图示例 2'
        }
      },
      {
        path: 'demo3',
        name: `${pre}list-histogram-demo3`,
        meta: {
          title: '混合图表',
          description: '柱状图示例 3'
        }
      },
      {
        path: 'demo4',
        name: `${pre}list-histogram-demo4`,
        meta: {
          title: '堆叠柱状图',
          description: '柱状图示例 4'
        }
      },
      {
        path: 'demo5',
        name: `${pre}list-histogram-demo5`,
        meta: {
          title: '显示数值',
          description: '柱状图示例 5'
        }
      },
      {
        path: 'demo6',
        name: `${pre}list-histogram-demo6`,
        meta: {
          title: '横轴连续',
          description: '柱状图示例 6'
        }
      }
      ]
    },
    {
      path: 'bar',
      name: `${pre}bar`,
      meta: {
        title: '条形图'
      },
      children: [{
        path: 'bar/demo1',
        name: `${pre}list-bar-demo1`,
        meta: {
          title: '一般',
          description: '条形图示例 1'
        }
      },
      {
        path: 'bar/demo2',
        name: `${pre}list-bar-demo2`,
        meta: {
          title: '指标维度',
          description: '条形图示例 2'
        }
      },
      {
        path: 'bar/demo3',
        name: `${pre}list-bar-demo3`,
        meta: {
          title: '排序条形图',
          description: '条形图示例 3'
        }
      },
      {
        path: 'bar/demo4',
        name: `${pre}list-bar-demo4`,
        meta: {
          title: '堆叠条形图',
          description: '条形图示例 4'
        }
      },
      {
        path: 'bar/demo5',
        name: `${pre}list-bar-demo5`,
        meta: {
          title: '纵轴连续',
          description: '条形图示例 5'
        }
      }
      ]
    },
    {
      path: 'pie',
      name: `${pre}pie`,
      meta: {
        title: '饼图'
      },
      children: [{
        path: 'demo1',
        name: `${pre}list-pie-demo1`,
        meta: {
          title: '一般',
          description: '饼图示例 1'
        }
      },
      {
        path: 'demo2',
        name: `${pre}list-pie-demo2`,
        meta: {
          title: '指标维度',
          description: '饼图示例 2'
        }
      },
      {
        path: 'demo3',
        name: `${pre}list-pie-demo3`,
        meta: {
          title: '玫瑰图',
          description: '饼图示例 3'
        }
      },
      {
        path: 'demo4',
        name: `${pre}list-pie-demo4`,
        meta: {
          title: '限制条数',
          description: '饼图示例 4'
        }
      },
      {
        path: 'demo5',
        name: `${pre}list-pie-demo5`,
        meta: {
          title: '多圆饼图',
          description: '饼图示例 5'
        }
      },
      {
        path: 'demo6',
        name: `${pre}list-pie-demo6`,
        meta: {
          title: '设置半径',
          description: '饼图示例 6'
        }
      }
      ]
    },
    {
      path: 'ring',
      name: `${pre}ring`,
      meta: {
        title: '环图'
      },
      children: [{
        path: 'demo1',
        name: `${pre}list-ring-demo1`,
        meta: {
          title: '一般',
          description: '环图示例 1'
        }
      },
      {
        path: 'demo2',
        name: `${pre}list-ring-demo2`,
        meta: {
          title: '指标维度',
          description: '环图示例 2'
        }
      },
      {
        path: 'demo3',
        name: `${pre}list-ring-demo3`,
        meta: {
          title: '玫瑰图',
          description: '环图示例 3'
        }
      },
      {
        path: 'demo4',
        name: `${pre}list-ring-demo4`,
        meta: {
          title: '限制显示条数',
          description: '环图示例 4'
        }
      },
      {
        path: 'demo5',
        name: `${pre}list-ring-demo5`,
        meta: {
          title: '设置半径',
          description: '环图示例 5'
        }
      }
      ]
    },
    {
      path: 'waterfall',
      name: `${pre}waterfall`,
      meta: {
        title: '瀑布图'
      },
      children: [{
        path: 'demo1',
        name: `${pre}list-waterfall-demo1`,
        meta: {
          title: '一般',
          description: '瀑布图示例 1'
        }
      } ]
    },
    {
      path: 'funnel',
      name: `${pre}funnel`,
      meta: {
        title: '漏斗图'
      },
      children: [{
        path: 'demo1',
        name: `${pre}list-funnel-demo1`,
        meta: {
          title: '一般',
          description: '漏斗图示例 1'
        }
      },
      {
        path: 'demo2',
        name: `${pre}list-funnel-demo2`,
        meta: {
          title: '金字塔',
          description: '漏斗图示例 2'
        }
      }
      ]
    },
    {
      path: 'radar',
      name: `${pre}radar`,
      meta: {
        title: '雷达图'
      },
      children: [{
        path: 'demo1',
        name: `${pre}list-radar-demo1`,
        meta: {
          title: '一般',
          description: '雷达图示例 1'
        }
      } ]
    },
    {
      path: 'map',
      name: `${pre}map`,
      meta: {
        title: '地图'
      },
      children: [{
        path: 'demo1',
        name: `${pre}list-map-demo1`,
        meta: {
          title: '一般',
          description: '地图示例 1'
        }
      },
      {
        path: 'demo2',
        name: `${pre}list-map-demo2`,
        meta: {
          title: '设置城市',
          description: '地图示例 2'
        }
      },
      {
        path: 'demo3',
        name: `${pre}list-map-demo3`,
        meta: {
          title: '设置样式',
          description: '地图示例 3'
        }
      }
      ]
    },
    {
      path: 'sankey',
      name: `${pre}sankey`,
      meta: {
        title: '桑基图'
      },
      children: [{
        path: 'demo1',
        name: `${pre}list-sankey-demo1`,
        meta: {
          title: '一般',
          description: '桑基图示例 1'
        }
      } ]
    },
    {
      path: 'heatmap',
      name: `${pre}heatmap`,
      meta: {
        title: '热力图'
      },
      children: [{
        path: 'demo1',
        name: `${pre}list-heatmap-demo1`,
        meta: {
          title: '一般',
          description: '热力图示例 1'
        }
      },
      {
        path: 'demo2',
        name: `${pre}list-heatmap-demo2`,
        meta: {
          title: '地图热力图',
          description: '热力图示例 2'
        }
      }
      ]
    },
    {
      path: 'scatter',
      name: `${pre}scatter`,
      meta: {
        title: '散点图'
      },
      children: [{
        path: 'demo1',
        name: `${pre}list-scatter-demo1`,
        meta: {
          title: '单维度多指标',
          description: '散点图示例 1'
        }
      },
      {
        path: 'demo2',
        name: `${pre}list-scatter-demo2`,
        meta: {
          title: '双维度多指标',
          description: '散点图示例 2'
        }
      }
      ]
    },
    {
      path: 'candle',
      name: `${pre}candle`,
      meta: {
        title: 'K线图'
      },
      children: [{
        path: 'demo1',
        name: `${pre}list-candle-demo1`,
        meta: {
          title: '一般',
          description: 'K线图示例 1'
        }
      },
      {
        path: 'demo2',
        name: `${pre}list-candle-demo2`,
        meta: {
          title: 'MA VOL',
          description: 'K线图示例 2'
        }
      },
      {
        path: 'demo3',
        name: `${pre}list-candle-demo3`,
        meta: {
          title: '自定义',
          description: 'K线图示例 3'
        }
      }
      ]
    },
    {
      path: 'gauge',
      name: `${pre}gauge`,
      meta: {
        title: '仪表盘'
      },
      children: [{
        path: 'demo1',
        name: `${pre}list-gauge-demo1`,
        meta: {
          title: '一般',
          description: '仪表盘示例 1'
        }
      } ]
    },
    {
      path: 'tree',
      name: `${pre}tree`,
      meta: {
        title: '树图'
      },
      children: [{
        path: 'demo1',
        name: `${pre}list-tree-demo1`,
        meta: {
          title: '径向树图',
          description: '树图示例 1'
        }
      }]
    }
    ]
  }
  ])('demo-charts-')
}
