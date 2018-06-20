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
    {
      path: `${pre}better-scroll`,
      title: '滚动扩展',
      children: [
        { path: `${pre}better-scroll/base`, title: '基础用法' },
        { path: `${pre}better-scroll/to`, title: '滚动定位' }
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
    {
      path: `${pre}contextmenu`,
      title: '右键菜单',
      children: [
        { path: `${pre}contextmenu/simple`, title: '基础' },
        { path: `${pre}contextmenu/divier`, title: '分割线' },
        { path: `${pre}contextmenu/group`, title: '按钮组' },
        { path: `${pre}contextmenu/submenu`, title: '子菜单' },
        { path: `${pre}contextmenu/disabled`, title: '禁用' }
      ]
    },
    { path: `${pre}bigdata-table`, title: '百万数量级表格' },
    { path: `${pre}scrollbar`, title: 'ElementUI 滚动条组件' },
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

// 路由菜单 组件库
const demoElement = {
  path: '/demo/element',
  title: '组件库',
  icon: 'puzzle-piece',
  children: (pre => [
    { path: `${pre}index`, title: '组件库首页' },
    {
      path: `${pre}basic`,
      title: '基础',
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

// 菜单 侧边栏
export const side = [
  demoPlugins,
  demoComponents,
  demoElement,
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
    title: '集成功能',
    children: [
      demoPlugins,
      demoComponents,
      demoElement,
      demoChart
    ]
  },
  {
    path: '/demo/business',
    title: '示例业务界面'
  }
]
