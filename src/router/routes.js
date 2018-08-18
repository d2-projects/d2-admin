// layout
import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      {
        path: 'index',
        name: 'index',
        meta,
        component: () => import('@/pages/index')
      }
    ]
  },
  {
    path: '/demo/playground',
    name: 'demo-playground',
    meta,
    redirect: { name: 'demo-playground-index' },
    component: layoutHeaderAside,
    children: (pre => [
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/playground/index'), meta: { ...meta, title: '试验台首页' } },
      { path: 'page-cache/on', name: `${pre}page-cache-on`, component: () => import('@/pages/demo/playground/page-cache/on.vue'), meta: { ...meta, title: '开启缓存' } },
      { path: 'page-cache/off', name: `${pre}page-cache-off`, component: () => import('@/pages/demo/playground/page-cache/off.vue'), meta: { ...meta, notCache: true, title: '关闭缓存' } },
      { path: 'page-argu/send', name: `${pre}page-argu-send`, component: () => import('@/pages/demo/playground/page-argu/send.vue'), meta: { ...meta, title: '参数传递 发送' } },
      { path: 'page-argu/get/:username', name: `${pre}page-argu-get`, component: () => import('@/pages/demo/playground/page-argu/get.vue'), meta: { ...meta, title: '参数传递 接收' } },
      { path: 'store/sys', name: `${pre}store-sys`, component: () => import('@/pages/demo/playground/store/sys'), meta: { ...meta, title: '系统状态' } },
      { path: 'store/menu', name: `${pre}store-menu`, component: () => import('@/pages/demo/playground/store/menu'), meta: { ...meta, title: '菜单控制' } },
      { path: 'store/ua', name: `${pre}store-ua`, component: () => import('@/pages/demo/playground/store/ua'), meta: { ...meta, title: '浏览器信息' } },
      { path: 'store/gray', name: `${pre}store-gray`, component: () => import('@/pages/demo/playground/store/gray'), meta: { ...meta, title: '灰度模式' } },
      { path: 'store/fullscreen', name: `${pre}store-fullscreen`, component: () => import('@/pages/demo/playground/store/fullscreen'), meta: { ...meta, title: '全屏' } },
      { path: 'store/theme', name: `${pre}store-theme`, component: () => import('@/pages/demo/playground/store/theme'), meta: { ...meta, title: '主题' } },
      { path: 'store/transition', name: `${pre}store-transition`, component: () => import('@/pages/demo/playground/store/transition'), meta: { ...meta, title: '页面过渡开关' } },
      { path: 'db/all', name: `${pre}db-all`, component: () => import('@/pages/demo/playground/db/all'), meta: { ...meta, title: '总览' } },
      { path: 'db/public', name: `${pre}db-public`, component: () => import('@/pages/demo/playground/db/public'), meta: { ...meta, title: '公共存储' } },
      { path: 'db/user', name: `${pre}db-user`, component: () => import('@/pages/demo/playground/db/user'), meta: { ...meta, title: '私有存储' } },
      { path: 'db/page-public', name: `${pre}db-page-public`, component: () => import('@/pages/demo/playground/db/page-public'), meta: { ...meta, title: '路由存储' } },
      { path: 'db/page-user', name: `${pre}db-page-user`, component: () => import('@/pages/demo/playground/db/page-user'), meta: { ...meta, title: '私有路由存储' } },
      { path: 'db/page-snapshot-public', name: `${pre}db-page-snapshot-public`, component: () => import('@/pages/demo/playground/db/page-snapshot-public'), meta: { ...meta, title: '路由快照' } },
      { path: 'db/page-snapshot-user', name: `${pre}db-page-snapshot-user`, component: () => import('@/pages/demo/playground/db/page-snapshot-user'), meta: { ...meta, title: '私有路由快照' } },
      { path: 'log/log', name: `${pre}log-log`, component: () => import('@/pages/demo/playground/log/log'), meta: { ...meta, title: '日志记录' } },
      { path: 'log/error', name: `${pre}log-error`, component: () => import('@/pages/demo/playground/log/error'), meta: { ...meta, title: '错误捕捉' } },
      { path: 'log/console', name: `${pre}log-console`, component: () => import('@/pages/demo/playground/log/console'), meta: { ...meta, title: '控制台日志' } },
      { path: 'env', name: `${pre}env`, component: () => import('@/pages/demo/playground/env'), meta: { ...meta, title: '环境信息' } }
    ])('demo-playground-')
  },
  {
    path: '/demo/plugins',
    name: 'demo-plugins',
    meta,
    redirect: { name: 'demo-plugins-index' },
    component: layoutHeaderAside,
    children: (pre => [
      { path: 'better-scroll/base', name: `${pre}better-scroll-base`, component: () => import('@/pages/demo/plugins/better-scroll/base.vue'), meta: { ...meta, title: '滚动插件基础' } },
      { path: 'better-scroll/to', name: `${pre}better-scroll-to`, component: () => import('@/pages/demo/plugins/better-scroll/to.vue'), meta: { ...meta, title: '滚动定位' } },
      { path: 'clipboard-polyfill', name: `${pre}clipboard-polyfill`, component: () => import('@/pages/demo/plugins/clipboard-polyfill'), meta: { ...meta, title: '剪贴板访问' } },
      { path: 'day', name: `${pre}day`, component: () => import('@/pages/demo/plugins/day'), meta: { ...meta, title: '日期计算' } },
      { path: 'export/table', name: `${pre}export-table`, component: () => import('@/pages/demo/plugins/export/table.vue'), meta: { ...meta, title: '导出表格' } },
      { path: 'export/txt', name: `${pre}export-txt`, component: () => import('@/pages/demo/plugins/export/txt.vue'), meta: { ...meta, title: '导出文本' } },
      { path: 'i18n/demo1', name: `${pre}i18n-demo1`, component: () => import('@/pages/demo/plugins/i18n/demo1.vue'), meta: { ...meta, title: '多国语示例 1' } },
      { path: 'i18n/demo2', name: `${pre}i18n-demo2`, component: () => import('@/pages/demo/plugins/i18n/demo2.vue'), meta: { ...meta, title: '多国语示例 2' } },
      { path: 'import/csv', name: `${pre}import-csv`, component: () => import('@/pages/demo/plugins/import/csv.vue'), meta: { ...meta, title: '导入 csv' } },
      { path: 'import/xlsx', name: `${pre}import-xlsx`, component: () => import('@/pages/demo/plugins/import/xlsx.vue'), meta: { ...meta, title: '导入 xlsx' } },
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/plugins/index'), meta: { ...meta, title: '插件首页' } },
      { path: 'js-cookie', name: `${pre}js-cookie`, component: () => import('@/pages/demo/plugins/js-cookie'), meta: { ...meta, title: 'Cookie' } },
      { path: 'mock/ajax', name: `${pre}mock-ajax`, component: () => import('@/pages/demo/plugins/mock/ajax.vue'), meta: { ...meta, title: '模拟数据' } },
      { path: 'mock/dpd', name: `${pre}mock-dpd`, component: () => import('@/pages/demo/plugins/mock/dpd.vue'), meta: { ...meta, title: 'mock dpd规则' } },
      { path: 'mock/dtd', name: `${pre}mock-dtd`, component: () => import('@/pages/demo/plugins/mock/dtd.vue'), meta: { ...meta, title: 'mock dtd规则' } }
    ])('demo-plugins-')
  },
  {
    path: '/demo/charts',
    name: 'demo-charts',
    meta,
    redirect: { name: 'demo-charts-index' },
    component: layoutHeaderAside,
    children: (pre => [
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/charts/index'), meta: { ...meta, title: '图表首页' } },
      { path: 'list/line/demo1', name: `${pre}list-line-demo1`, component: () => import('@/pages/demo/charts/list/line/demo1/index.vue'), meta: { ...meta, title: '折线图示例 1' } },
      { path: 'list/line/demo2', name: `${pre}list-line-demo2`, component: () => import('@/pages/demo/charts/list/line/demo2/index.vue'), meta: { ...meta, title: '折线图示例 2' } },
      { path: 'list/line/demo3', name: `${pre}list-line-demo3`, component: () => import('@/pages/demo/charts/list/line/demo3/index.vue'), meta: { ...meta, title: '折线图示例 3' } },
      { path: 'list/line/demo4', name: `${pre}list-line-demo4`, component: () => import('@/pages/demo/charts/list/line/demo4/index.vue'), meta: { ...meta, title: '折线图示例 4' } },
      { path: 'list/line/demo5', name: `${pre}list-line-demo5`, component: () => import('@/pages/demo/charts/list/line/demo5/index.vue'), meta: { ...meta, title: '折线图示例 5' } },
      { path: 'list/histogram/demo1', name: `${pre}list-histogram-demo1`, component: () => import('@/pages/demo/charts/list/histogram/demo1/index.vue'), meta: { ...meta, title: '柱状图示例 1' } },
      { path: 'list/histogram/demo2', name: `${pre}list-histogram-demo2`, component: () => import('@/pages/demo/charts/list/histogram/demo2/index.vue'), meta: { ...meta, title: '柱状图示例 2' } },
      { path: 'list/histogram/demo3', name: `${pre}list-histogram-demo3`, component: () => import('@/pages/demo/charts/list/histogram/demo3/index.vue'), meta: { ...meta, title: '柱状图示例 3' } },
      { path: 'list/histogram/demo4', name: `${pre}list-histogram-demo4`, component: () => import('@/pages/demo/charts/list/histogram/demo4/index.vue'), meta: { ...meta, title: '柱状图示例 4' } },
      { path: 'list/histogram/demo5', name: `${pre}list-histogram-demo5`, component: () => import('@/pages/demo/charts/list/histogram/demo5/index.vue'), meta: { ...meta, title: '柱状图示例 5' } },
      { path: 'list/histogram/demo6', name: `${pre}list-histogram-demo6`, component: () => import('@/pages/demo/charts/list/histogram/demo6/index.vue'), meta: { ...meta, title: '柱状图示例 6' } },
      { path: 'list/bar/demo1', name: `${pre}list-bar-demo1`, component: () => import('@/pages/demo/charts/list/bar/demo1/index.vue'), meta: { ...meta, title: '条形图示例 1' } },
      { path: 'list/bar/demo2', name: `${pre}list-bar-demo2`, component: () => import('@/pages/demo/charts/list/bar/demo2/index.vue'), meta: { ...meta, title: '条形图示例 2' } },
      { path: 'list/bar/demo3', name: `${pre}list-bar-demo3`, component: () => import('@/pages/demo/charts/list/bar/demo3/index.vue'), meta: { ...meta, title: '条形图示例 3' } },
      { path: 'list/bar/demo4', name: `${pre}list-bar-demo4`, component: () => import('@/pages/demo/charts/list/bar/demo4/index.vue'), meta: { ...meta, title: '条形图示例 4' } },
      { path: 'list/bar/demo5', name: `${pre}list-bar-demo5`, component: () => import('@/pages/demo/charts/list/bar/demo5/index.vue'), meta: { ...meta, title: '条形图示例 5' } },
      { path: 'list/pie/demo1', name: `${pre}list-pie-demo1`, component: () => import('@/pages/demo/charts/list/pie/demo1/index.vue'), meta: { ...meta, title: '饼图示例 1' } },
      { path: 'list/pie/demo2', name: `${pre}list-pie-demo2`, component: () => import('@/pages/demo/charts/list/pie/demo2/index.vue'), meta: { ...meta, title: '饼图示例 2' } },
      { path: 'list/pie/demo3', name: `${pre}list-pie-demo3`, component: () => import('@/pages/demo/charts/list/pie/demo3/index.vue'), meta: { ...meta, title: '饼图示例 3' } },
      { path: 'list/pie/demo4', name: `${pre}list-pie-demo4`, component: () => import('@/pages/demo/charts/list/pie/demo4/index.vue'), meta: { ...meta, title: '饼图示例 4' } },
      { path: 'list/pie/demo5', name: `${pre}list-pie-demo5`, component: () => import('@/pages/demo/charts/list/pie/demo5/index.vue'), meta: { ...meta, title: '饼图示例 5' } },
      { path: 'list/pie/demo6', name: `${pre}list-pie-demo6`, component: () => import('@/pages/demo/charts/list/pie/demo6/index.vue'), meta: { ...meta, title: '饼图示例 6' } },
      { path: 'list/ring/demo1', name: `${pre}list-ring-demo1`, component: () => import('@/pages/demo/charts/list/ring/demo1/index.vue'), meta: { ...meta, title: '环图示例 1' } },
      { path: 'list/ring/demo2', name: `${pre}list-ring-demo2`, component: () => import('@/pages/demo/charts/list/ring/demo2/index.vue'), meta: { ...meta, title: '环图示例 2' } },
      { path: 'list/ring/demo3', name: `${pre}list-ring-demo3`, component: () => import('@/pages/demo/charts/list/ring/demo3/index.vue'), meta: { ...meta, title: '环图示例 3' } },
      { path: 'list/ring/demo4', name: `${pre}list-ring-demo4`, component: () => import('@/pages/demo/charts/list/ring/demo4/index.vue'), meta: { ...meta, title: '环图示例 4' } },
      { path: 'list/ring/demo5', name: `${pre}list-ring-demo5`, component: () => import('@/pages/demo/charts/list/ring/demo5/index.vue'), meta: { ...meta, title: '环图示例 5' } },
      { path: 'list/waterfall/demo1', name: `${pre}list-waterfall-demo1`, component: () => import('@/pages/demo/charts/list/waterfall/demo1/index.vue'), meta: { ...meta, title: '瀑布图示例 1' } },
      { path: 'list/funnel/demo1', name: `${pre}list-funnel-demo1`, component: () => import('@/pages/demo/charts/list/funnel/demo1/index.vue'), meta: { ...meta, title: '漏斗图示例 1' } },
      { path: 'list/funnel/demo2', name: `${pre}list-funnel-demo2`, component: () => import('@/pages/demo/charts/list/funnel/demo2/index.vue'), meta: { ...meta, title: '漏斗图示例 2' } },
      { path: 'list/radar/demo1', name: `${pre}list-radar-demo1`, component: () => import('@/pages/demo/charts/list/radar/demo1/index.vue'), meta: { ...meta, title: '雷达图示例 1' } },
      { path: 'list/map/demo1', name: `${pre}list-map-demo1`, component: () => import('@/pages/demo/charts/list/map/demo1/index.vue'), meta: { ...meta, title: '地图示例 1' } },
      { path: 'list/map/demo2', name: `${pre}list-map-demo2`, component: () => import('@/pages/demo/charts/list/map/demo2/index.vue'), meta: { ...meta, title: '地图示例 2' } },
      { path: 'list/map/demo3', name: `${pre}list-map-demo3`, component: () => import('@/pages/demo/charts/list/map/demo3/index.vue'), meta: { ...meta, title: '地图示例 3' } },
      { path: 'list/sankey/demo1', name: `${pre}list-sankey-demo1`, component: () => import('@/pages/demo/charts/list/sankey/demo1/index.vue'), meta: { ...meta, title: '桑基图示例 1' } },
      { path: 'list/heatmap/demo1', name: `${pre}list-heatmap-demo1`, component: () => import('@/pages/demo/charts/list/heatmap/demo1/index.vue'), meta: { ...meta, title: '热力图示例 1' } },
      { path: 'list/heatmap/demo2', name: `${pre}list-heatmap-demo2`, component: () => import('@/pages/demo/charts/list/heatmap/demo2/index.vue'), meta: { ...meta, title: '热力图示例 2' } },
      { path: 'list/scatter/demo1', name: `${pre}list-scatter-demo1`, component: () => import('@/pages/demo/charts/list/scatter/demo1/index.vue'), meta: { ...meta, title: '散点图示例 1' } },
      { path: 'list/scatter/demo2', name: `${pre}list-scatter-demo2`, component: () => import('@/pages/demo/charts/list/scatter/demo2/index.vue'), meta: { ...meta, title: '散点图示例 2' } },
      { path: 'list/candle/demo1', name: `${pre}list-candle-demo1`, component: () => import('@/pages/demo/charts/list/candle/demo1/index.vue'), meta: { ...meta, title: 'K线图示例 1' } },
      { path: 'list/candle/demo2', name: `${pre}list-candle-demo2`, component: () => import('@/pages/demo/charts/list/candle/demo2/index.vue'), meta: { ...meta, title: 'K线图示例 2' } },
      { path: 'list/candle/demo3', name: `${pre}list-candle-demo3`, component: () => import('@/pages/demo/charts/list/candle/demo3/index.vue'), meta: { ...meta, title: 'K线图示例 3' } },
      { path: 'list/gauge/demo1', name: `${pre}list-gauge-demo1`, component: () => import('@/pages/demo/charts/list/gauge/demo1/index.vue'), meta: { ...meta, title: '仪表盘示例 1' } },
      { path: 'list/tree/demo1', name: `${pre}list-tree-demo1`, component: () => import('@/pages/demo/charts/list/tree/demo1/index.vue'), meta: { ...meta, title: '树图示例 1' } }
    ])('demo-charts-')
  },
  {
    path: '/demo/components',
    name: 'demo-components',
    meta,
    redirect: { name: 'demo-components-index' },
    component: layoutHeaderAside,
    children: (pre => [
      { path: 'container/full', name: `${pre}container-full`, component: () => import('@/pages/demo/components/container/full.vue'), meta: { ...meta, title: '布局组件 填充' } },
      { path: 'container/full-slot', name: `${pre}container-full-slot`, component: () => import('@/pages/demo/components/container/full-slot.vue'), meta: { ...meta, title: '布局组件 填充 插槽' } },
      { path: 'container/full-bs', name: `${pre}container-full-bs`, component: () => import('@/pages/demo/components/container/full-bs.vue'), meta: { ...meta, title: '布局组件 填充 滚动优化' } },
      { path: 'container/ghost', name: `${pre}container-ghost`, component: () => import('@/pages/demo/components/container/ghost.vue'), meta: { ...meta, title: '布局组件 隐形' } },
      { path: 'container/ghost-slot', name: `${pre}container-ghost-slot`, component: () => import('@/pages/demo/components/container/ghost-slot.vue'), meta: { ...meta, title: '布局组件 隐形 插槽' } },
      { path: 'container/ghost-bs', name: `${pre}container-ghost-bs`, component: () => import('@/pages/demo/components/container/ghost-bs.vue'), meta: { ...meta, title: '布局组件 隐形 滚动优化' } },
      { path: 'container/card', name: `${pre}container-card`, component: () => import('@/pages/demo/components/container/card.vue'), meta: { ...meta, title: '布局组件 卡片' } },
      { path: 'container/card-slot', name: `${pre}container-card-slot`, component: () => import('@/pages/demo/components/container/card-slot.vue'), meta: { ...meta, title: '布局组件 卡片 插槽' } },
      { path: 'container/card-bs', name: `${pre}container-card-bs`, component: () => import('@/pages/demo/components/container/card-bs.vue'), meta: { ...meta, title: '布局组件 卡片 滚动优化' } },
      { path: 'contextmenu/simple', name: `${pre}contextmenu-simple`, component: () => import('@/pages/demo/components/contextmenu/simple.vue'), meta: { ...meta, title: '右键菜单 基础' } },
      { path: 'contextmenu/divier', name: `${pre}contextmenu-divier`, component: () => import('@/pages/demo/components/contextmenu/divier.vue'), meta: { ...meta, title: '右键菜单 分割线' } },
      { path: 'contextmenu/group', name: `${pre}contextmenu-group`, component: () => import('@/pages/demo/components/contextmenu/group.vue'), meta: { ...meta, title: '右键菜单 分组' } },
      { path: 'contextmenu/submenu', name: `${pre}contextmenu-submenu`, component: () => import('@/pages/demo/components/contextmenu/submenu.vue'), meta: { ...meta, title: '右键菜单 子菜单' } },
      { path: 'contextmenu/disabled', name: `${pre}contextmenu-disabled`, component: () => import('@/pages/demo/components/contextmenu/disabled.vue'), meta: { ...meta, title: '右键菜单 禁用' } },
      { path: 'contextmenu/custom-trigger', name: `${pre}contextmenu-custom-trigger`, component: () => import('@/pages/demo/components/contextmenu/custom-trigger.vue'), meta: { ...meta, title: '右键菜单 自定义触发' } },
      { path: 'countup', name: `${pre}countup`, component: () => import('@/pages/demo/components/countup'), meta: { ...meta, title: '数字动画' } },
      { path: 'editor-quill', name: `${pre}editor-quill`, component: () => import('@/pages/demo/components/editor-quill'), meta: { ...meta, title: '富文本编辑器' } },
      { path: 'editor-simpleMDE', name: `${pre}editor-simpleMDE`, component: () => import('@/pages/demo/components/editor-simpleMDE'), meta: { ...meta, title: 'markdown编辑器' } },
      { path: 'highlight', name: `${pre}highlight`, component: () => import('@/pages/demo/components/highlight'), meta: { ...meta, title: '代码高亮组件' } },
      { path: 'icon/icon', name: `${pre}icon-icon`, component: () => import('@/pages/demo/components/icon/icon.vue'), meta: { ...meta, title: '图标组件' } },
      { path: 'icon/list', name: `${pre}icon-list`, component: () => import('@/pages/demo/components/icon/list.vue'), meta: { ...meta, title: '图标列表' } },
      { path: 'icon/select', name: `${pre}icon-select`, component: () => import('@/pages/demo/components/icon/select.vue'), meta: { ...meta, title: '图表选择器组件' } },
      { path: 'icon/svg', name: `${pre}icon-svg`, component: () => import('@/pages/demo/components/icon/svg.vue'), meta: { ...meta, title: 'svg 图标' } },
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/components/index'), meta: { ...meta, title: '组件首页' } },
      { path: 'json-tree', name: `${pre}json-tree`, component: () => import('@/pages/demo/components/json-tree'), meta: { ...meta, title: 'JSON 展示' } },
      { path: 'layout/grid', name: `${pre}layout-grid`, component: () => import('@/pages/demo/components/layout/grid.vue'), meta: { ...meta, title: '拖拽网格布局' } },
      { path: 'layout/splitpane', name: `${pre}layout-splitpane`, component: () => import('@/pages/demo/components/layout/splitpane.vue'), meta: { ...meta, title: '区域布局' } },
      { path: 'markdown/source', name: `${pre}markdown-source`, component: () => import('@/pages/demo/components/markdown/source.vue'), meta: { ...meta, title: 'markdown指定资源渲染' } },
      { path: 'markdown/url', name: `${pre}markdown-url`, component: () => import('@/pages/demo/components/markdown/url.vue'), meta: { ...meta, title: 'markdown指定url渲染' } }
    ])('demo-components-')
  },
  {
    path: '/demo/element',
    name: 'demo-element',
    meta,
    redirect: { name: 'demo-element-index' },
    component: layoutHeaderAside,
    children: (pre => [
      { path: 'basic-layout', name: `${pre}basic-layout`, component: () => import('@/pages/demo/element/basic-layout'), meta: { ...meta, title: 'Element 布局' } },
      { path: 'basic-container', name: `${pre}basic-container`, component: () => import('@/pages/demo/element/basic-container'), meta: { ...meta, title: 'Element 布局容器' } },
      { path: 'basic-color', name: `${pre}basic-color`, component: () => import('@/pages/demo/element/basic-color'), meta: { ...meta, title: 'Element 色彩' } },
      { path: 'basic-typography', name: `${pre}basic-typography`, component: () => import('@/pages/demo/element/basic-typography'), meta: { ...meta, title: 'Element 字体' } },
      { path: 'basic-icon', name: `${pre}basic-icon`, component: () => import('@/pages/demo/element/basic-icon'), meta: { ...meta, title: 'Element 图标' } },
      { path: 'basic-button', name: `${pre}basic-button`, component: () => import('@/pages/demo/element/basic-button'), meta: { ...meta, title: 'Element 按钮' } },
      { path: 'form-radio', name: `${pre}form-radio`, component: () => import('@/pages/demo/element/form-radio'), meta: { ...meta, title: 'Element 单选框' } },
      { path: 'form-checkbox', name: `${pre}form-checkbox`, component: () => import('@/pages/demo/element/form-checkbox'), meta: { ...meta, title: 'Element 多选框' } },
      { path: 'form-input', name: `${pre}form-input`, component: () => import('@/pages/demo/element/form-input'), meta: { ...meta, title: 'Element 输入框' } },
      { path: 'form-input-number', name: `${pre}form-input-number`, component: () => import('@/pages/demo/element/form-input-number'), meta: { ...meta, title: 'Element 计数器' } },
      { path: 'form-select', name: `${pre}form-select`, component: () => import('@/pages/demo/element/form-select'), meta: { ...meta, title: 'Element 选择器' } },
      { path: 'form-cascader', name: `${pre}form-cascader`, component: () => import('@/pages/demo/element/form-cascader'), meta: { ...meta, title: 'Element 级联选择器' } },
      { path: 'form-switch', name: `${pre}form-switch`, component: () => import('@/pages/demo/element/form-switch'), meta: { ...meta, title: 'Element 开关' } },
      { path: 'form-slider', name: `${pre}form-slider`, component: () => import('@/pages/demo/element/form-slider'), meta: { ...meta, title: 'Element 滑块' } },
      { path: 'form-time-picker', name: `${pre}form-time-picker`, component: () => import('@/pages/demo/element/form-time-picker'), meta: { ...meta, title: 'Element 时间选择器' } },
      { path: 'form-date-picker', name: `${pre}form-date-picker`, component: () => import('@/pages/demo/element/form-date-picker'), meta: { ...meta, title: 'Element 日期选择器' } },
      { path: 'form-datetime-picker', name: `${pre}form-datetime-picker`, component: () => import('@/pages/demo/element/form-datetime-picker'), meta: { ...meta, title: 'Element 时间日期选择器' } },
      { path: 'form-upload', name: `${pre}form-upload`, component: () => import('@/pages/demo/element/form-upload'), meta: { ...meta, title: 'Element 上传' } },
      { path: 'form-rate', name: `${pre}form-rate`, component: () => import('@/pages/demo/element/form-rate'), meta: { ...meta, title: 'Element 评分' } },
      { path: 'form-color-picker', name: `${pre}form-color-picker`, component: () => import('@/pages/demo/element/form-color-picker'), meta: { ...meta, title: 'Element 颜色选择器' } },
      { path: 'form-transfer', name: `${pre}form-transfer`, component: () => import('@/pages/demo/element/form-transfer'), meta: { ...meta, title: 'Element 穿梭框' } },
      { path: 'form-form', name: `${pre}form-form`, component: () => import('@/pages/demo/element/form-form'), meta: { ...meta, title: 'Element 表单' } },
      { path: 'data-table', name: `${pre}data-table`, component: () => import('@/pages/demo/element/data-table'), meta: { ...meta, title: 'Element 表格' } },
      { path: 'data-tag', name: `${pre}data-tag`, component: () => import('@/pages/demo/element/data-tag'), meta: { ...meta, title: 'Element 标签' } },
      { path: 'data-progress', name: `${pre}data-progress`, component: () => import('@/pages/demo/element/data-progress'), meta: { ...meta, title: 'Element 进度条' } },
      { path: 'data-tree', name: `${pre}data-tree`, component: () => import('@/pages/demo/element/data-tree'), meta: { ...meta, title: 'Element 树形控件' } },
      { path: 'data-pagination', name: `${pre}data-pagination`, component: () => import('@/pages/demo/element/data-pagination'), meta: { ...meta, title: 'Element 分页' } },
      { path: 'data-badge', name: `${pre}data-badge`, component: () => import('@/pages/demo/element/data-badge'), meta: { ...meta, title: 'Element 标记' } },
      { path: 'notice-alert', name: `${pre}notice-alert`, component: () => import('@/pages/demo/element/notice-alert'), meta: { ...meta, title: 'Element 警告' } },
      { path: 'notice-loading', name: `${pre}notice-loading`, component: () => import('@/pages/demo/element/notice-loading'), meta: { ...meta, title: 'Element 加载' } },
      { path: 'notice-message', name: `${pre}notice-message`, component: () => import('@/pages/demo/element/notice-message'), meta: { ...meta, title: 'Element 消息提示' } },
      { path: 'notice-message-box', name: `${pre}notice-message-box`, component: () => import('@/pages/demo/element/notice-message-box'), meta: { ...meta, title: 'Element 弹框' } },
      { path: 'notice-notification', name: `${pre}notice-notification`, component: () => import('@/pages/demo/element/notice-notification'), meta: { ...meta, title: 'Element 通知' } },
      { path: 'navigation-menu', name: `${pre}navigation-menu`, component: () => import('@/pages/demo/element/navigation-menu'), meta: { ...meta, title: 'Element 导航菜单' } },
      { path: 'navigation-tabs', name: `${pre}navigation-tabs`, component: () => import('@/pages/demo/element/navigation-tabs'), meta: { ...meta, title: 'Element 标签页' } },
      { path: 'navigation-breadcrumb', name: `${pre}navigation-breadcrumb`, component: () => import('@/pages/demo/element/navigation-breadcrumb'), meta: { ...meta, title: 'Element 面包屑' } },
      { path: 'navigation-dropdown', name: `${pre}navigation-dropdown`, component: () => import('@/pages/demo/element/navigation-dropdown'), meta: { ...meta, title: 'Element 下拉菜单' } },
      { path: 'navigation-steps', name: `${pre}navigation-steps`, component: () => import('@/pages/demo/element/navigation-steps'), meta: { ...meta, title: 'Element 步骤条' } },
      { path: 'others-dialog', name: `${pre}others-dialog`, component: () => import('@/pages/demo/element/others-dialog'), meta: { ...meta, title: 'Element 对话框' } },
      { path: 'others-tooltip', name: `${pre}others-tooltip`, component: () => import('@/pages/demo/element/others-tooltip'), meta: { ...meta, title: 'Element 文字提示' } },
      { path: 'others-popover', name: `${pre}others-popover`, component: () => import('@/pages/demo/element/others-popover'), meta: { ...meta, title: 'Element 弹出框' } },
      { path: 'others-card', name: `${pre}others-card`, component: () => import('@/pages/demo/element/others-card'), meta: { ...meta, title: 'Element 卡片' } },
      { path: 'others-carousel', name: `${pre}others-carousel`, component: () => import('@/pages/demo/element/others-carousel'), meta: { ...meta, title: 'Element 走马灯' } },
      { path: 'others-collapse', name: `${pre}others-collapse`, component: () => import('@/pages/demo/element/others-collapse'), meta: { ...meta, title: 'Element 折叠面板' } },
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/element/index'), meta: { ...meta, title: 'ElementUI' } }
    ])('demo-element-')
  },
  {
    path: '/demo/business',
    name: 'demo-business',
    meta,
    redirect: { name: 'demo-business-index' },
    component: layoutHeaderAside,
    children: (pre => [
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/demo/business/index'), meta: { ...meta, title: '示例首页' } },
      { path: 'table/1', name: `${pre}table-1`, component: () => import('@/pages/demo/business/table/1'), meta: { ...meta, title: '表格 1' } }
    ])('demo-business-')
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登陆
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  // 404
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/error-page-404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
