export default {
  path: 'demo/plugins',
  name: 'demo-plugins',
  meta: {
    title: '插件',
    icon: 'plug',
    aside: true
  },
  children: (pre => [{
    path: 'index',
    name: `${pre}index`,
    meta: {
      title: '插件首页',
      icon: 'home'
    }
  },
  {
    path: 'mock',
    name: `${pre}mock`,
    meta: {
      title: '模拟数据',
      icon: 'globe'
    },
    children: [{
      path: 'ajax',
      name: `${pre}mock-ajax`,
      meta: {
        title: '拦截异步请求',
        description: '模拟数据'
      }
    },
    {
      path: 'dpd',
      name: `${pre}mock-dpd`,
      meta: {
        title: 'DPD 规则',
        description: 'mock dpd规则'
      }
    },
    {
      path: 'dtd',
      name: `${pre}mock-dtd`,
      meta: {
        title: 'DTD 规则',
        description: 'mock dtd规则'
      }
    }
    ]
  },
  {
    path: 'import',
    name: `${pre}import`,
    meta: {
      title: '导入',
      icon: 'download'
    },
    children: [{
      path: 'csv',
      name: `${pre}import-csv`,
      meta: {
        title: 'csv',
        description: '导入 csv'
      }
    },
    {
      path: 'xlsx',
      name: `${pre}import-xlsx`,
      meta: {
        title: 'xlsx',
        description: '导入 xlsx'
      }
    }
    ]
  },
  {
    path: 'export',
    name: `${pre}export`,
    meta: {
      title: '导出',
      icon: 'upload'
    },
    children: [{
      path: 'table',
      name: `${pre}export-table`,
      meta: {
        title: '表格',
        description: '导出表格'
      }
    },
    {
      path: 'txt',
      name: `${pre}export-txt`,
      meta: {
        title: '文本',
        description: '导出文本'
      }
    }
    ]
  },
  {
    path: 'i18n',
    name: `${pre}i18n`,
    meta: {
      title: '多国语',
      icon: 'language'
    },
    children: [{
      path: 'demo1',
      name: `${pre}i18n-demo1`,
      meta: {
        title: '示例1',
        description: '多国语示例 1'
      }
    },
    {
      path: 'demo2',
      name: `${pre}i18n-demo2`,
      meta: {
        title: '示例2',
        description: '多国语示例 2'
      }
    }
    ]
  },
  {
    path: 'better-scroll',
    name: `${pre}better-scroll`,
    meta: {
      title: '滚动扩展',
      icon: 'crosshairs'
    },
    children: [{
      path: 'base',
      name: `${pre}better-scroll-base`,
      meta: {
        title: '基础用法',
        description: '滚动插件基础'
      }
    },
    {
      path: 'to',
      name: `${pre}better-scroll-to`,
      meta: {
        title: '滚动定位'
      }
    }
    ]
  },
  {
    path: 'clipboard-polyfill',
    name: `${pre}clipboard-polyfill`,
    meta: {
      title: '剪贴板访问',
      icon: 'clipboard'
    }
  },
  {
    path: 'day',
    name: `${pre}day`,
    meta: {
      title: '日期计算',
      icon: 'clock-o'
    }
  },
  {
    path: 'js-cookie',
    name: `${pre}js-cookie`,
    meta: {
      title: 'Cookie 读写',
      icon: 'asterisk',
      description: 'Cookie'
    }
  }
  ])('demo-plugins-')
}
