export default {
  path: '/demo/element',
  title: '基础组件库',
  icon: 'cubes',
  children: (pre => [
    { path: `${pre}index`, title: '基础组件库', icon: 'home' },
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
