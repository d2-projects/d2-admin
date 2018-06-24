module.exports = {
  base: '/d2-admin-doc/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'D2 Admin',
      description: 'Elegant management system front-end integration'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'D2 Admin',
      description: '优雅的管理系统前端集成方案'
    }
  },
  themeConfig: {
    // 项目仓库地址
    repo: 'https://github.com/FairyEver/d2-admin',
    // 自定义仓库链接文字
    repoLabel: '查看源码',
    // 文档不是放在仓库的根目录下
    docsDir: 'docs',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 多国语言
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last update'
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '最后更新',
        nav: [
          { text: '指南', link: '/zh/guide/' },
          { text: '插件', link: '/zh/plugins/' },
          { text: '组件', link: '/zh/components/' },
          { text: '下载', link: 'https://github.com/FairyEver/d2-admin/releases' }
        ],
        sidebar: {
          '/zh/guide/': sideBarGuide('指南'),
          '/zh/plugins/': sideBarPlugins('插件'),
          '/zh/components/': sideBarComponents('组件')
        }
      }
    }
  }
}

function sideBarGuide (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'question',
        'pr',
        'change-log'
      ]
    }
  ]
}

function sideBarPlugins () {
  return [
    'data-export',
    'data-import',
    'i18n',
    'mock'
  ]
}

function sideBarComponents (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        'charts',
        'container',
        'count-up',
        'highlight',
        'icon-select',
        'icon-svg',
        'icon',
        'markdown'
      ]
    }
  ]
}
