export default {
  path: 'demo/element',
  name: 'demo-element',
  meta: {
    title: '基础组件库',
    icon: 'cubes',
    aside: true
  },
  children: (pre => [{
    path: 'index',
    name: `${pre}index`,
    meta: {
      title: '基础组件库首页',
      icon: 'home',
      description: 'ElementUI'
    }
  },
  {
    path: 'basic',
    name: `${pre}basic`,
    meta: {
      title: '基础',
      icon: 'cube'
    },
    children: [{
      path: 'layout',
      name: `${pre}basic-layout`,
      meta: {
        title: '布局',
        description: 'Element 布局'
      }
    },
    {
      path: 'container',
      name: `${pre}basic-container`,
      meta: {
        title: '布局容器',
        description: 'Element 布局容器'
      }
    },
    {
      path: 'color',
      name: `${pre}basic-color`,
      meta: {
        title: '色彩',
        description: 'Element 色彩'
      }
    },
    {
      path: 'typography',
      name: `${pre}basic-typography`,
      meta: {
        title: '字体',
        description: 'Element 字体'
      }
    },
    {
      path: 'icon',
      name: `${pre}basic-icon`,
      meta: {
        title: '图标',
        description: 'Element 图标'
      }
    },
    {
      path: 'button',
      name: `${pre}basic-button`,
      meta: {
        title: '按钮',
        description: 'Element 按钮'
      }
    }
    ]
  },
  {
    path: 'form',
    name: `${pre}form`,
    meta: {
      title: '表单',
      icon: 'check-square-o'
    },
    children: [{
      path: 'radio',
      name: `${pre}form-radio`,
      meta: {
        title: '单选框',
        description: 'Element 单选框'
      }
    },
    {
      path: 'checkbox',
      name: `${pre}form-checkbox`,
      meta: {
        title: '多选框',
        description: 'Element 多选框'
      }
    },
    {
      path: 'input',
      name: `${pre}form-input`,
      meta: {
        title: '输入框',
        description: 'Element 输入框'
      }
    },
    {
      path: 'input-number',
      name: `${pre}form-input-number`,
      meta: {
        title: '计数器',
        description: 'Element 计数器'
      }
    },
    {
      path: 'select',
      name: `${pre}form-select`,
      meta: {
        title: '选择器',
        description: 'Element 选择器'
      }
    },
    {
      path: 'cascader',
      name: `${pre}form-cascader`,
      meta: {
        title: '级联选择器',
        description: 'Element 级联选择器'
      }
    },
    {
      path: 'switch',
      name: `${pre}form-switch`,
      meta: {
        title: '开关',
        description: 'Element 开关'
      }
    },
    {
      path: 'slider',
      name: `${pre}form-slider`,
      meta: {
        title: '滑块',
        description: 'Element 滑块'
      }
    },
    {
      path: 'time-picker',
      name: `${pre}form-time-picker`,
      meta: {
        title: '时间选择器',
        description: 'Element 时间选择器'
      }
    },
    {
      path: 'date-picker',
      name: `${pre}form-date-picker`,
      meta: {
        title: '日期选择器',
        description: 'Element 日期选择器'
      }
    },
    {
      path: 'datetime-picker',
      name: `${pre}form-datetime-picker`,
      meta: {
        title: '日期时间选择器',
        description: 'Element 时间日期选择器'
      }
    },
    {
      path: 'upload',
      name: `${pre}form-upload`,
      meta: {
        title: '上传',
        description: 'Element 上传'
      }
    },
    {
      path: 'rate',
      name: `${pre}form-rate`,
      meta: {
        title: '评分',
        description: 'Element 评分'
      }
    },
    {
      path: 'color-picker',
      name: `${pre}form-color-picker`,
      meta: {
        title: '颜色选择器',
        description: 'Element 颜色选择器'
      }
    },
    {
      path: 'transfer',
      name: `${pre}form-transfer`,
      meta: {
        title: '穿梭框',
        description: 'Element 穿梭框'
      }
    },
    {
      path: 'form',
      name: `${pre}form-form`,
      meta: {
        title: '表单',
        description: 'Element 表单'
      }
    }
    ]
  },
  {
    path: 'data',
    name: `${pre}data`,
    meta: {
      title: '数据',
      icon: 'table'
    },
    children: [{
      path: 'table',
      name: `${pre}data-table`,
      meta: {
        title: '表格',
        description: 'Element 表格'
      }
    },
    {
      path: 'tag',
      name: `${pre}data-tag`,
      meta: {
        title: '标签',
        description: 'Element 标签'
      }
    },
    {
      path: 'progress',
      name: `${pre}data-progress`,
      meta: {
        title: '进度条',
        description: 'Element 进度条'
      }
    },
    {
      path: 'tree',
      name: `${pre}data-tree`,
      meta: {
        title: '树形控件',
        description: 'Element 树形控件'
      }
    },
    {
      path: 'pagination',
      name: `${pre}data-pagination`,
      meta: {
        title: '分页',
        description: 'Element 分页'
      }
    },
    {
      path: 'badge',
      name: `${pre}data-badge`,
      meta: {
        title: '标记',
        description: 'Element 标记'
      }
    }
    ]
  },
  {
    path: 'notice',
    name: `${pre}notice`,
    meta: {
      title: '消息',
      icon: 'commenting'
    },
    children: [{
      path: 'alert',
      name: `${pre}notice-alert`,
      meta: {
        title: '警告',
        description: 'Element 警告'
      }
    },
    {
      path: 'loading',
      name: `${pre}notice-loading`,
      meta: {
        title: '加载',
        description: 'Element 加载'
      }
    },
    {
      path: 'message',
      name: `${pre}notice-message`,
      meta: {
        title: '消息提示',
        description: 'Element 消息提示'
      }
    },
    {
      path: 'message-box',
      name: `${pre}notice-message-box`,
      meta: {
        title: '弹框',
        description: 'Element 弹框'
      }
    },
    {
      path: 'notification',
      name: `${pre}notice-notification`,
      meta: {
        title: '通知',
        description: 'Element 通知'
      }
    }
    ]
  },
  {
    path: 'navigation',
    name: `${pre}navigation`,
    meta: {
      title: '导航',
      icon: 'map'
    },
    children: [{
      path: 'menu',
      name: `${pre}navigation-menu`,
      meta: {
        title: '导航菜单',
        description: 'Element 导航菜单'
      }
    },
    {
      path: 'tabs',
      name: `${pre}navigation-tabs`,
      meta: {
        title: '标签页',
        description: 'Element 标签页'
      }
    },
    {
      path: 'breadcrumb',
      name: `${pre}navigation-breadcrumb`,
      meta: {
        title: '面包屑',
        description: 'Element 面包屑'
      }
    },
    {
      path: 'dropdown',
      name: `${pre}navigation-dropdown`,
      meta: {
        title: '下拉菜单',
        description: 'Element 下拉菜单'
      }
    },
    {
      path: 'steps',
      name: `${pre}navigation-steps`,
      meta: {
        title: '步骤条',
        description: 'Element 步骤条'
      }
    }
    ]
  },
  {
    path: 'others',
    name: `${pre}others`,
    meta: {
      title: '其它',
      icon: 'cubes'
    },
    children: [{
      path: 'dialog',
      name: `${pre}others-dialog`,
      meta: {
        title: '对话框',
        description: 'Element 对话框'
      }
    },
    {
      path: 'tooltip',
      name: `${pre}others-tooltip`,
      meta: {
        title: '文字提示',
        description: 'Element 文字提示'
      }
    },
    {
      path: 'popover',
      name: `${pre}others-popover`,
      meta: {
        title: '弹出框',
        description: 'Element 弹出框'
      }
    },
    {
      path: 'card',
      name: `${pre}others-card`,
      meta: {
        title: '卡片',
        description: 'Element 卡片'
      }
    },
    {
      path: 'carousel',
      name: `${pre}others-carousel`,
      meta: {
        title: '走马灯',
        description: 'Element 走马灯'
      }
    },
    {
      path: 'collapse',
      name: `${pre}others-collapse`,
      meta: {
        title: '折叠面板',
        description: 'Element 折叠面板'
      }
    }
    ]
  }
  ])('demo-element-')
}
