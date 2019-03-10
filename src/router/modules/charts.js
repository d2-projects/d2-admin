import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/demo/charts',
  name: 'demo-charts',
  meta,
  redirect: { name: 'demo-charts-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'index', name: `${pre}index`, component: _import('demo/charts/index'), meta: { ...meta, title: '图表首页' } },
    { path: 'list/line/demo1', name: `${pre}list-line-demo1`, component: _import('demo/charts/list/line/demo1/index.vue'), meta: { ...meta, title: '折线图示例 1' } },
    { path: 'list/line/demo2', name: `${pre}list-line-demo2`, component: _import('demo/charts/list/line/demo2/index.vue'), meta: { ...meta, title: '折线图示例 2' } },
    { path: 'list/line/demo3', name: `${pre}list-line-demo3`, component: _import('demo/charts/list/line/demo3/index.vue'), meta: { ...meta, title: '折线图示例 3' } },
    { path: 'list/line/demo4', name: `${pre}list-line-demo4`, component: _import('demo/charts/list/line/demo4/index.vue'), meta: { ...meta, title: '折线图示例 4' } },
    { path: 'list/line/demo5', name: `${pre}list-line-demo5`, component: _import('demo/charts/list/line/demo5/index.vue'), meta: { ...meta, title: '折线图示例 5' } },
    { path: 'list/histogram/demo1', name: `${pre}list-histogram-demo1`, component: _import('demo/charts/list/histogram/demo1/index.vue'), meta: { ...meta, title: '柱状图示例 1' } },
    { path: 'list/histogram/demo2', name: `${pre}list-histogram-demo2`, component: _import('demo/charts/list/histogram/demo2/index.vue'), meta: { ...meta, title: '柱状图示例 2' } },
    { path: 'list/histogram/demo3', name: `${pre}list-histogram-demo3`, component: _import('demo/charts/list/histogram/demo3/index.vue'), meta: { ...meta, title: '柱状图示例 3' } },
    { path: 'list/histogram/demo4', name: `${pre}list-histogram-demo4`, component: _import('demo/charts/list/histogram/demo4/index.vue'), meta: { ...meta, title: '柱状图示例 4' } },
    { path: 'list/histogram/demo5', name: `${pre}list-histogram-demo5`, component: _import('demo/charts/list/histogram/demo5/index.vue'), meta: { ...meta, title: '柱状图示例 5' } },
    { path: 'list/histogram/demo6', name: `${pre}list-histogram-demo6`, component: _import('demo/charts/list/histogram/demo6/index.vue'), meta: { ...meta, title: '柱状图示例 6' } },
    { path: 'list/bar/demo1', name: `${pre}list-bar-demo1`, component: _import('demo/charts/list/bar/demo1/index.vue'), meta: { ...meta, title: '条形图示例 1' } },
    { path: 'list/bar/demo2', name: `${pre}list-bar-demo2`, component: _import('demo/charts/list/bar/demo2/index.vue'), meta: { ...meta, title: '条形图示例 2' } },
    { path: 'list/bar/demo3', name: `${pre}list-bar-demo3`, component: _import('demo/charts/list/bar/demo3/index.vue'), meta: { ...meta, title: '条形图示例 3' } },
    { path: 'list/bar/demo4', name: `${pre}list-bar-demo4`, component: _import('demo/charts/list/bar/demo4/index.vue'), meta: { ...meta, title: '条形图示例 4' } },
    { path: 'list/bar/demo5', name: `${pre}list-bar-demo5`, component: _import('demo/charts/list/bar/demo5/index.vue'), meta: { ...meta, title: '条形图示例 5' } },
    { path: 'list/pie/demo1', name: `${pre}list-pie-demo1`, component: _import('demo/charts/list/pie/demo1/index.vue'), meta: { ...meta, title: '饼图示例 1' } },
    { path: 'list/pie/demo2', name: `${pre}list-pie-demo2`, component: _import('demo/charts/list/pie/demo2/index.vue'), meta: { ...meta, title: '饼图示例 2' } },
    { path: 'list/pie/demo3', name: `${pre}list-pie-demo3`, component: _import('demo/charts/list/pie/demo3/index.vue'), meta: { ...meta, title: '饼图示例 3' } },
    { path: 'list/pie/demo4', name: `${pre}list-pie-demo4`, component: _import('demo/charts/list/pie/demo4/index.vue'), meta: { ...meta, title: '饼图示例 4' } },
    { path: 'list/pie/demo5', name: `${pre}list-pie-demo5`, component: _import('demo/charts/list/pie/demo5/index.vue'), meta: { ...meta, title: '饼图示例 5' } },
    { path: 'list/pie/demo6', name: `${pre}list-pie-demo6`, component: _import('demo/charts/list/pie/demo6/index.vue'), meta: { ...meta, title: '饼图示例 6' } },
    { path: 'list/ring/demo1', name: `${pre}list-ring-demo1`, component: _import('demo/charts/list/ring/demo1/index.vue'), meta: { ...meta, title: '环图示例 1' } },
    { path: 'list/ring/demo2', name: `${pre}list-ring-demo2`, component: _import('demo/charts/list/ring/demo2/index.vue'), meta: { ...meta, title: '环图示例 2' } },
    { path: 'list/ring/demo3', name: `${pre}list-ring-demo3`, component: _import('demo/charts/list/ring/demo3/index.vue'), meta: { ...meta, title: '环图示例 3' } },
    { path: 'list/ring/demo4', name: `${pre}list-ring-demo4`, component: _import('demo/charts/list/ring/demo4/index.vue'), meta: { ...meta, title: '环图示例 4' } },
    { path: 'list/ring/demo5', name: `${pre}list-ring-demo5`, component: _import('demo/charts/list/ring/demo5/index.vue'), meta: { ...meta, title: '环图示例 5' } },
    { path: 'list/waterfall/demo1', name: `${pre}list-waterfall-demo1`, component: _import('demo/charts/list/waterfall/demo1/index.vue'), meta: { ...meta, title: '瀑布图示例 1' } },
    { path: 'list/funnel/demo1', name: `${pre}list-funnel-demo1`, component: _import('demo/charts/list/funnel/demo1/index.vue'), meta: { ...meta, title: '漏斗图示例 1' } },
    { path: 'list/funnel/demo2', name: `${pre}list-funnel-demo2`, component: _import('demo/charts/list/funnel/demo2/index.vue'), meta: { ...meta, title: '漏斗图示例 2' } },
    { path: 'list/radar/demo1', name: `${pre}list-radar-demo1`, component: _import('demo/charts/list/radar/demo1/index.vue'), meta: { ...meta, title: '雷达图示例 1' } },
    { path: 'list/map/demo1', name: `${pre}list-map-demo1`, component: _import('demo/charts/list/map/demo1/index.vue'), meta: { ...meta, title: '地图示例 1' } },
    { path: 'list/map/demo2', name: `${pre}list-map-demo2`, component: _import('demo/charts/list/map/demo2/index.vue'), meta: { ...meta, title: '地图示例 2' } },
    { path: 'list/map/demo3', name: `${pre}list-map-demo3`, component: _import('demo/charts/list/map/demo3/index.vue'), meta: { ...meta, title: '地图示例 3' } },
    { path: 'list/sankey/demo1', name: `${pre}list-sankey-demo1`, component: _import('demo/charts/list/sankey/demo1/index.vue'), meta: { ...meta, title: '桑基图示例 1' } },
    { path: 'list/heatmap/demo1', name: `${pre}list-heatmap-demo1`, component: _import('demo/charts/list/heatmap/demo1/index.vue'), meta: { ...meta, title: '热力图示例 1' } },
    { path: 'list/heatmap/demo2', name: `${pre}list-heatmap-demo2`, component: _import('demo/charts/list/heatmap/demo2/index.vue'), meta: { ...meta, title: '热力图示例 2' } },
    { path: 'list/scatter/demo1', name: `${pre}list-scatter-demo1`, component: _import('demo/charts/list/scatter/demo1/index.vue'), meta: { ...meta, title: '散点图示例 1' } },
    { path: 'list/scatter/demo2', name: `${pre}list-scatter-demo2`, component: _import('demo/charts/list/scatter/demo2/index.vue'), meta: { ...meta, title: '散点图示例 2' } },
    { path: 'list/candle/demo1', name: `${pre}list-candle-demo1`, component: _import('demo/charts/list/candle/demo1/index.vue'), meta: { ...meta, title: 'K线图示例 1' } },
    { path: 'list/candle/demo2', name: `${pre}list-candle-demo2`, component: _import('demo/charts/list/candle/demo2/index.vue'), meta: { ...meta, title: 'K线图示例 2' } },
    { path: 'list/candle/demo3', name: `${pre}list-candle-demo3`, component: _import('demo/charts/list/candle/demo3/index.vue'), meta: { ...meta, title: 'K线图示例 3' } },
    { path: 'list/gauge/demo1', name: `${pre}list-gauge-demo1`, component: _import('demo/charts/list/gauge/demo1/index.vue'), meta: { ...meta, title: '仪表盘示例 1' } },
    { path: 'list/tree/demo1', name: `${pre}list-tree-demo1`, component: _import('demo/charts/list/tree/demo1/index.vue'), meta: { ...meta, title: '树图示例 1' } }
  ])('demo-charts-')
}
