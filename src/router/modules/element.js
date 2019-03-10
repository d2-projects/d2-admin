import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/demo/element',
  name: 'demo-element',
  meta,
  redirect: { name: 'demo-element-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'basic-layout', name: `${pre}basic-layout`, component: _import('demo/element/basic-layout'), meta: { ...meta, title: 'Element 布局' } },
    { path: 'basic-container', name: `${pre}basic-container`, component: _import('demo/element/basic-container'), meta: { ...meta, title: 'Element 布局容器' } },
    { path: 'basic-color', name: `${pre}basic-color`, component: _import('demo/element/basic-color'), meta: { ...meta, title: 'Element 色彩' } },
    { path: 'basic-typography', name: `${pre}basic-typography`, component: _import('demo/element/basic-typography'), meta: { ...meta, title: 'Element 字体' } },
    { path: 'basic-icon', name: `${pre}basic-icon`, component: _import('demo/element/basic-icon'), meta: { ...meta, title: 'Element 图标' } },
    { path: 'basic-button', name: `${pre}basic-button`, component: _import('demo/element/basic-button'), meta: { ...meta, title: 'Element 按钮' } },
    { path: 'form-radio', name: `${pre}form-radio`, component: _import('demo/element/form-radio'), meta: { ...meta, title: 'Element 单选框' } },
    { path: 'form-checkbox', name: `${pre}form-checkbox`, component: _import('demo/element/form-checkbox'), meta: { ...meta, title: 'Element 多选框' } },
    { path: 'form-input', name: `${pre}form-input`, component: _import('demo/element/form-input'), meta: { ...meta, title: 'Element 输入框' } },
    { path: 'form-input-number', name: `${pre}form-input-number`, component: _import('demo/element/form-input-number'), meta: { ...meta, title: 'Element 计数器' } },
    { path: 'form-select', name: `${pre}form-select`, component: _import('demo/element/form-select'), meta: { ...meta, title: 'Element 选择器' } },
    { path: 'form-cascader', name: `${pre}form-cascader`, component: _import('demo/element/form-cascader'), meta: { ...meta, title: 'Element 级联选择器' } },
    { path: 'form-switch', name: `${pre}form-switch`, component: _import('demo/element/form-switch'), meta: { ...meta, title: 'Element 开关' } },
    { path: 'form-slider', name: `${pre}form-slider`, component: _import('demo/element/form-slider'), meta: { ...meta, title: 'Element 滑块' } },
    { path: 'form-time-picker', name: `${pre}form-time-picker`, component: _import('demo/element/form-time-picker'), meta: { ...meta, title: 'Element 时间选择器' } },
    { path: 'form-date-picker', name: `${pre}form-date-picker`, component: _import('demo/element/form-date-picker'), meta: { ...meta, title: 'Element 日期选择器' } },
    { path: 'form-datetime-picker', name: `${pre}form-datetime-picker`, component: _import('demo/element/form-datetime-picker'), meta: { ...meta, title: 'Element 时间日期选择器' } },
    { path: 'form-upload', name: `${pre}form-upload`, component: _import('demo/element/form-upload'), meta: { ...meta, title: 'Element 上传' } },
    { path: 'form-rate', name: `${pre}form-rate`, component: _import('demo/element/form-rate'), meta: { ...meta, title: 'Element 评分' } },
    { path: 'form-color-picker', name: `${pre}form-color-picker`, component: _import('demo/element/form-color-picker'), meta: { ...meta, title: 'Element 颜色选择器' } },
    { path: 'form-transfer', name: `${pre}form-transfer`, component: _import('demo/element/form-transfer'), meta: { ...meta, title: 'Element 穿梭框' } },
    { path: 'form-form', name: `${pre}form-form`, component: _import('demo/element/form-form'), meta: { ...meta, title: 'Element 表单' } },
    { path: 'data-table', name: `${pre}data-table`, component: _import('demo/element/data-table'), meta: { ...meta, title: 'Element 表格' } },
    { path: 'data-tag', name: `${pre}data-tag`, component: _import('demo/element/data-tag'), meta: { ...meta, title: 'Element 标签' } },
    { path: 'data-progress', name: `${pre}data-progress`, component: _import('demo/element/data-progress'), meta: { ...meta, title: 'Element 进度条' } },
    { path: 'data-tree', name: `${pre}data-tree`, component: _import('demo/element/data-tree'), meta: { ...meta, title: 'Element 树形控件' } },
    { path: 'data-pagination', name: `${pre}data-pagination`, component: _import('demo/element/data-pagination'), meta: { ...meta, title: 'Element 分页' } },
    { path: 'data-badge', name: `${pre}data-badge`, component: _import('demo/element/data-badge'), meta: { ...meta, title: 'Element 标记' } },
    { path: 'notice-alert', name: `${pre}notice-alert`, component: _import('demo/element/notice-alert'), meta: { ...meta, title: 'Element 警告' } },
    { path: 'notice-loading', name: `${pre}notice-loading`, component: _import('demo/element/notice-loading'), meta: { ...meta, title: 'Element 加载' } },
    { path: 'notice-message', name: `${pre}notice-message`, component: _import('demo/element/notice-message'), meta: { ...meta, title: 'Element 消息提示' } },
    { path: 'notice-message-box', name: `${pre}notice-message-box`, component: _import('demo/element/notice-message-box'), meta: { ...meta, title: 'Element 弹框' } },
    { path: 'notice-notification', name: `${pre}notice-notification`, component: _import('demo/element/notice-notification'), meta: { ...meta, title: 'Element 通知' } },
    { path: 'navigation-menu', name: `${pre}navigation-menu`, component: _import('demo/element/navigation-menu'), meta: { ...meta, title: 'Element 导航菜单' } },
    { path: 'navigation-tabs', name: `${pre}navigation-tabs`, component: _import('demo/element/navigation-tabs'), meta: { ...meta, title: 'Element 标签页' } },
    { path: 'navigation-breadcrumb', name: `${pre}navigation-breadcrumb`, component: _import('demo/element/navigation-breadcrumb'), meta: { ...meta, title: 'Element 面包屑' } },
    { path: 'navigation-dropdown', name: `${pre}navigation-dropdown`, component: _import('demo/element/navigation-dropdown'), meta: { ...meta, title: 'Element 下拉菜单' } },
    { path: 'navigation-steps', name: `${pre}navigation-steps`, component: _import('demo/element/navigation-steps'), meta: { ...meta, title: 'Element 步骤条' } },
    { path: 'others-dialog', name: `${pre}others-dialog`, component: _import('demo/element/others-dialog'), meta: { ...meta, title: 'Element 对话框' } },
    { path: 'others-tooltip', name: `${pre}others-tooltip`, component: _import('demo/element/others-tooltip'), meta: { ...meta, title: 'Element 文字提示' } },
    { path: 'others-popover', name: `${pre}others-popover`, component: _import('demo/element/others-popover'), meta: { ...meta, title: 'Element 弹出框' } },
    { path: 'others-card', name: `${pre}others-card`, component: _import('demo/element/others-card'), meta: { ...meta, title: 'Element 卡片' } },
    { path: 'others-carousel', name: `${pre}others-carousel`, component: _import('demo/element/others-carousel'), meta: { ...meta, title: 'Element 走马灯' } },
    { path: 'others-collapse', name: `${pre}others-collapse`, component: _import('demo/element/others-collapse'), meta: { ...meta, title: 'Element 折叠面板' } },
    { path: 'index', name: `${pre}index`, component: _import('demo/element/index'), meta: { ...meta, title: 'ElementUI' } }
  ])('demo-element-')
}
