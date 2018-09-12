export default {
  path: 'demo/playground',
  name: 'demo-playground',
  meta: {
    title: '试验台',
    icon: 'flask',
    aside: true
  },
  children: (pre => [{
    path: 'index',
    name: `${pre}index`,
    meta: {
      title: '试验台首页',
      icon: 'home',
      description: '试验台首页'
    }
  },
  {
    name: `${pre}svg`,
    meta: {
      title: 'svg 菜单图标',
      iconSvg: 'd2-admin'
    },
    children: [{
      name: `${pre}svg-add`,
      meta: {
        title: 'add',
        iconSvg: 'add'
      }
    },
    {
      name: `${pre}svg-alarm`,
      meta: {
        title: 'alarm',
        iconSvg: 'alarm'
      }
    },
    {
      name: `${pre}svg-camera`,
      meta: {
        title: 'camera',
        iconSvg: 'camera'
      }
    },
    {
      name: `${pre}svg-history`,
      meta: {
        title: 'history',
        iconSvg: 'history'
      }
    },
    {
      name: `${pre}svg-like`,
      meta: {
        title: 'like',
        iconSvg: 'like'
      }
    },
    {
      name: `${pre}svg-love`,
      meta: {
        title: 'love',
        iconSvg: 'love'
      }
    },
    {
      name: `${pre}svg-message`,
      meta: {
        title: 'message',
        iconSvg: 'message'
      }
    },
    {
      name: `${pre}svg-notice`,
      meta: {
        title: 'notice',
        iconSvg: 'notice'
      }
    },
    {
      name: `${pre}svg-search`,
      meta: {
        title: 'search',
        iconSvg: 'search'
      }
    },
    {
      name: `${pre}svg-share`,
      meta: {
        title: 'share',
        iconSvg: 'share'
      }
    },
    {
      name: `${pre}svg-star`,
      meta: {
        title: 'star',
        iconSvg: 'star'
      }
    },
    {
      name: `${pre}svg-user`,
      meta: {
        title: 'user',
        iconSvg: 'user'
      }
    }
    ]
  },
  {
    name: `${pre}menu`,
    meta: {
      title: '空菜单演示',
      icon: 'folder-o'
    },
    children: [{
      name: `${pre}menu-1`,
      meta: {
        title: '正在开发 1'
      },
      children: [{
        name: `${pre}menu-1-1`,
        meta: {
          title: '正在开发 1-1'
        }
      },
      {
        name: `${pre}menu-1-2`,
        meta: {
          title: '正在开发 1-2'
        }
      }
      ]
    },
    {
      name: `${pre}menu-2`,
      meta: {
        title: '正在开发 2'
      }
    },
    {
      name: `${pre}menu-3`,
      meta: {
        title: '正在开发 3'
      }
    }
    ]
  },
  {
    path: 'page-cache',
    name: `${pre}page-cache`,
    meta: {
      title: '页面缓存',
      icon: 'hdd-o'
    },
    children: [{
      path: 'on',
      name: `${pre}page-cache-on`,
      meta: {
        title: '开启缓存'
      }
    },
    {
      path: 'off',
      name: `${pre}page-cache-off`,
      meta: {
        notCache: true,
        title: '关闭缓存'
      }
    }
    ]
  },
  {
    path: 'page-argu',
    name: `${pre}page-argu`,
    meta: {
      title: '参数传递和留存',
      icon: 'assistive-listening-systems'
    },
    children: [{
      path: 'send',
      name: `${pre}page-argu-send`,
      meta: {
        title: '发送',
        description: '参数传递 发送'
      }
    },
    {
      path: 'get/:username',
      name: `${pre}page-argu-get`,
      meta: {
        title: '接收',
        description: '参数传递 接收'
      }
    }
    ]
  },
  {
    path: 'store',
    name: `${pre}store`,
    meta: {
      title: '全局状态管理',
      icon: 'bolt'
    },
    children: [{
      path: 'menu',
      name: `${pre}store-menu`,
      meta: {
        title: '菜单控制',
        icon: 'bars'
      }
    },
    {
      path: 'size',
      name: `${pre}store-size`,
      meta: {
        title: '全局尺寸',
        icon: 'font'
      }
    },
    {
      path: 'ua',
      name: `${pre}store-ua`,
      meta: {
        title: '浏览器信息',
        icon: 'info-circle'
      }
    },
    {
      path: 'gray',
      name: `${pre}store-gray`,
      meta: {
        title: '灰度模式',
        icon: 'eye'
      }
    },
    {
      path: 'fullscreen',
      name: `${pre}store-fullscreen`,
      meta: {
        title: '全屏',
        icon: 'arrows-alt'
      }
    },
    {
      path: 'theme',
      name: `${pre}store-theme`,
      meta: {
        title: '主题',
        icon: 'diamond'
      }
    },
    {
      path: 'transition',
      name: `${pre}store-transition`,
      meta: {
        title: '页面过渡开关',
        icon: 'toggle-on'
      }
    }
    ]
  },
  {
    path: 'db',
    name: `${pre}db`,
    meta: {
      title: '数据持久化',
      icon: 'database'
    },
    children: [{
      path: 'all',
      name: `${pre}db-all`,
      meta: {
        title: '总览',
        icon: 'table'
      }
    },
    {
      path: 'public',
      name: `${pre}db-public`,
      meta: {
        title: '公共存储',
        icon: 'users'
      }
    },
    {
      path: 'user',
      name: `${pre}db-user`,
      meta: {
        title: '私有存储',
        icon: 'user'
      }
    },
    {
      path: 'page-public',
      name: `${pre}db-page-public`,
      meta: {
        title: '路由存储',
        icon: 'file-o'
      }
    },
    {
      path: 'page-user',
      name: `${pre}db-page-user`,
      meta: {
        title: '私有路由存储',
        icon: 'file-o'
      }
    },
    {
      path: 'page-snapshot-public',
      name: `${pre}db-page-snapshot-public`,
      meta: {
        title: '路由快照',
        icon: 'file'
      }
    },
    {
      path: 'page-snapshot-user',
      name: `${pre}db-page-snapshot-user`,
      meta: {
        title: '私有路由快照',
        icon: 'file'
      }
    }
    ]
  },
  {
    path: 'log',
    name: `${pre}log`,
    meta: {
      title: '日志',
      icon: 'bullseye'
    },
    children: [{
      path: 'log',
      name: `${pre}log-log`,
      meta: {
        title: '日志记录',
        icon: 'dot-circle-o'
      }
    },
    {
      path: 'error',
      name: `${pre}log-error`,
      meta: {
        title: '错误捕捉',
        icon: 'bug'
      }
    },
    {
      path: 'console',
      name: `${pre}log-console`,
      meta: {
        title: '控制台日志',
        icon: 'lightbulb-o'
      }
    }
    ]
  },
  {
    path: 'env',
    name: `${pre}env`,
    meta: {
      title: '环境信息',
      icon: 'exclamation-circle'
    }
  },
  {
    path: 'permission',
    name: `${pre}permission`,
    meta: {
      title: '权限控制',
      icon: 'unlock-alt',
      description: '按钮权限控制'
    }
  }])('demo-playground-')
}
