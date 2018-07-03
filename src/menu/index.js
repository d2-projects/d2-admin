// 路由菜单 插件
const demoPlugins = {
  path: '/demo/plugins',
  title: '插件',
  icon: 'plug',
  children: (pre => [
    { path: `${pre}index`, title: '插件首页', icon: 'home' },
    {
      path: `${pre}mock`,
      title: '模拟数据',
      icon: 'globe',
      children: [
        { path: `${pre}mock/ajax`, title: '拦截异步请求' },
        { path: `${pre}mock/dpd`, title: 'DPD 规则' },
        { path: `${pre}mock/dtd`, title: 'DTD 规则' }
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
      path: `${pre}i18n`,
      title: '多国语',
      icon: 'language',
      children: [
        { path: `${pre}i18n/demo1`, title: '示例1' },
        { path: `${pre}i18n/demo2`, title: '示例2' }
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
    { path: `${pre}build`, title: '环境区分', icon: 'database' },
    { path: `${pre}clipboard-polyfill`, title: '剪贴板访问', icon: 'clipboard' },
    { path: `${pre}day`, title: '日期计算', icon: 'clock-o' },
    { path: `${pre}js-cookie`, title: 'Cookie 读写', icon: 'asterisk' }
  ])('/demo/plugins/')
}

// 路由菜单 组件
const demoComponents = {
  path: '/demo/components',
  title: '组件',
  icon: 'puzzle-piece',
  children: (pre => [
    { path: `${pre}index`, title: '组件首页', icon: 'home' },
    {
      path: `${pre}container`,
      title: '布局容器',
      icon: 'window-restore',
      children: [
        { path: `${pre}container/card`, title: '卡片' },
        { path: `${pre}container/full`, title: '填满' },
        { path: `${pre}container/full-bs`, title: '填满 滚动优化' },
        { path: `${pre}container/ghost`, title: '隐形' },
        { path: `${pre}container/ghost-header`, title: '隐形带头部' }
      ]
    },
    {
      path: `${pre}layout/grid`,
      title: '高级布局',
      icon: 'tasks',
      children: [
        { path: `${pre}layout/grid`, title: '拖拽位置和大小' },
        { path: `${pre}layout/splitpane`, title: '区域划分' }
      ]
    },
    {
      path: `${pre}icon`,
      title: '图标',
      icon: 'star',
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
      icon: 'file-text-o',
      children: [
        { path: `${pre}markdown/source`, title: '指定资源' },
        { path: `${pre}markdown/url`, title: '异步加载文件' }
      ]
    },
    {
      path: `${pre}contextmenu`,
      title: '右键菜单',
      icon: 'mouse-pointer',
      children: [
        { path: `${pre}contextmenu/simple`, title: '基础' },
        { path: `${pre}contextmenu/divier`, title: '分割线' },
        { path: `${pre}contextmenu/group`, title: '按钮组' },
        { path: `${pre}contextmenu/submenu`, title: '子菜单' },
        { path: `${pre}contextmenu/disabled`, title: '禁用' },
        { path: `${pre}contextmenu/custom-trigger`, title: '自定义事件' }
      ]
    },
    { path: `${pre}bigdata-table`, title: '百万数量级表格', icon: 'table' },
    { path: `${pre}countup`, title: '数字动画', icon: 'motorcycle' },
    { path: `${pre}editor-quill`, title: '富文本编辑器', icon: 'pencil-square-o (edit, edit)' },
    { path: `${pre}editor-simpleMDE`, title: 'markdown编辑器', icon: 'font' },
    { path: `${pre}highlight`, title: '代码高亮显示', icon: 'code' },
    { path: `${pre}json-tree`, title: 'JSON 展示', icon: 'sitemap' }
  ])('/demo/components/')
}

// 路由菜单 组件
const demoCharts = {
  path: '/demo/charts',
  title: '图表',
  icon: 'line-chart',
  children: (pre => [
    { path: `${pre}index`, title: '图表首页', icon: 'home' },
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

// 路由菜单 组件库
const demoElement = {
  path: '/demo/element',
  title: 'Element 组件库',
  icon: 'cubes',
  children: (pre => [
    { path: `${pre}index`, title: '组件库首页', icon: 'home' },
    {
      path: `${pre}basic`,
      title: '基础',
      icon: 'cube',
      children: [
        { path: `${pre}basic-layout`, title: '布局' },
        { path: `${pre}basic-container`, title: '布局容器' },
        { path: `${pre}basic-color`, title: '色彩' },
        { path: `${pre}basic-typography`, title: '字体' },
        { path: `${pre}basic-icon`, title: '图标' },
        { path: `${pre}basic-button`, title: '按钮' }
      ]
    },
    {
      path: `${pre}form`,
      title: '表单',
      icon: 'check-square-o',
      children: [
        { path: `${pre}form-radio`, title: '单选框' },
        { path: `${pre}form-checkbox`, title: '多选框' },
        { path: `${pre}form-input`, title: '输入框' },
        { path: `${pre}form-input-number`, title: '计数器' },
        { path: `${pre}form-select`, title: '选择器' },
        { path: `${pre}form-cascader`, title: '级联选择器' },
        { path: `${pre}form-switch`, title: '开关' },
        { path: `${pre}form-slider`, title: '滑块' },
        { path: `${pre}form-time-picker`, title: '时间选择器' },
        { path: `${pre}form-date-picker`, title: '日期选择器' },
        { path: `${pre}form-datetime-picker`, title: '日期时间选择器' },
        { path: `${pre}form-upload`, title: '上传' },
        { path: `${pre}form-rate`, title: '评分' },
        { path: `${pre}form-color-picker`, title: '颜色选择器' },
        { path: `${pre}form-transfer`, title: '穿梭框' },
        { path: `${pre}form-form`, title: '表单' }
      ]
    },
    {
      path: `${pre}data`,
      title: '数据',
      icon: 'table',
      children: [
        { path: `${pre}data-table`, title: '表格' },
        { path: `${pre}data-tag`, title: '标签' },
        { path: `${pre}data-progress`, title: '进度条' },
        { path: `${pre}data-tree`, title: '树形控件' },
        { path: `${pre}data-pagination`, title: '分页' },
        { path: `${pre}data-badge`, title: '标记' }
      ]
    },
    {
      path: `${pre}notice`,
      title: '消息',
      icon: 'commenting',
      children: [
        { path: `${pre}notice-alert`, title: '警告' },
        { path: `${pre}notice-loading`, title: '加载' },
        { path: `${pre}notice-message`, title: '消息提示' },
        { path: `${pre}notice-message-box`, title: '弹框' },
        { path: `${pre}notice-notification`, title: '通知' }
      ]
    },
    {
      path: `${pre}navigation`,
      title: '导航',
      icon: 'map',
      children: [
        { path: `${pre}navigation-menu`, title: '导航菜单' },
        { path: `${pre}navigation-tabs`, title: '标签页' },
        { path: `${pre}navigation-breadcrumb`, title: '面包屑' },
        { path: `${pre}navigation-dropdown`, title: '下拉菜单' },
        { path: `${pre}navigation-steps`, title: '步骤条' }
      ]
    },
    {
      path: `${pre}others`,
      title: '其它',
      icon: 'cubes',
      children: [
        { path: `${pre}others-dialog`, title: '对话框' },
        { path: `${pre}others-tooltip`, title: '文字提示' },
        { path: `${pre}others-popover`, title: '弹出框' },
        { path: `${pre}others-card`, title: '卡片' },
        { path: `${pre}others-carousel`, title: '走马灯' },
        { path: `${pre}others-collapse`, title: '折叠面板' }
      ]
    }
  ])('/demo/element/')
}

// 路由菜单 试验台
const demoPlayground = {
  path: '/demo/playground',
  title: '试验台',
  icon: 'flask',
  children: (pre => [
    { path: `${pre}index`, title: '试验台首页', icon: 'home' },
    {
      path: `${pre}page-cache`,
      title: '页面缓存',
      icon: 'hdd-o',
      children: [
        { path: `${pre}page-cache/on`, title: '开启缓存' },
        { path: `${pre}page-cache/off`, title: '关闭缓存' }
      ]
    },
    {
      path: `${pre}page-argu`,
      title: '参数传递和留存',
      icon: 'assistive-listening-systems',
      children: [
        { path: `${pre}page-argu/send`, title: '发送' },
        { path: `${pre}page-argu/get/username-from-menu?userid=userid-from-menu`, title: '接收' }
      ]
    },
    { path: `${pre}theme`, title: '主题', icon: 'flask' },
    { path: `${pre}fullscreen`, title: '全屏', icon: 'arrows-alt' },
    { path: `${pre}gray`, title: '灰度模式', icon: 'eye' },
    { path: `${pre}db`, title: '数据持久化', icon: 'database' }
  ])('/demo/playground/')
}

const setting = {
  path: '/core/setting',
  title: '设置',
  icon: 'cog',
  children: (pre => [
    { path: `${pre}index`, title: '设置首页', icon: 'home' },
    {
      path: `${pre}theme`,
      title: '主题设置',
      icon: 'diamond',
      children: [
        { path: `${pre}theme/theme`, title: '选择主题' },
        { path: `${pre}theme/custom`, title: '个性化' }
      ]
    },
    { path: `${pre}releases`, title: '版本', icon: 'info-circle' }
  ])('/core/setting/')
}

// 菜单 侧边栏
export const side = [
  demoPlugins,
  demoComponents,
  demoCharts,
  demoElement,
  demoPlayground,
  setting
]

// 菜单 顶栏
export default [
  {
    path: '/index',
    title: '首页',
    icon: 'home'
  },
  {
    path: '/demo',
    title: '功能',
    icon: 'puzzle-piece',
    children: [
      demoElement,
      demoComponents,
      demoCharts,
      demoPlugins,
      demoPlayground,
      {
        title: '空菜单演示',
        icon: 'folder-o',
        children: [
          {
            title: '正在开发 1',
            children: [
              { title: '正在开发 1-1' },
              { title: '正在开发 1-2' }
            ]
          },
          { title: '正在开发 2' },
          { title: '正在开发 3' }
        ]
      }
    ]
  },
  {
    path: '/demo/business',
    title: '示例',
    icon: 'briefcase'
  },
  setting
]
