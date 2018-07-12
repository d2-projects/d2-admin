module.exports = {
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
  head: [
    ['link', { rel: 'icon', href: `/logo@2x.png` }],
    ['script', {}, 'var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?be9d34853430c136b5d62c3081d556a5";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();']
  ],
  themeConfig: {
    // 项目仓库地址
    repo: 'https://github.com/d2-projects/d2-admin',
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
        lastUpdated: 'Last update',
        nav: [
          { text: 'preview', link: 'https://fairyever.gitee.io/d2-admin-preview/#/index' }
        ]
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
          { text: '文章', link: '/zh/article/' },
          { text: '其它', link: '/zh/others/' },
          { text: '预览', link: 'https://fairyever.gitee.io/d2-admin-preview/#/index' }
        ],
        sidebar: {
          '/zh/guide/': sideBarGuide('指南'),
          '/zh/plugins/': sideBarPlugins('插件'),
          '/zh/components/': sideBarComponents('组件'),
          '/zh/article/': sideBarArticle('版本更新'),
          '/zh/others/': sideBarOthers('其它')
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
    '',
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
        '',
        'charts',
        'charts-new',
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

function sideBarArticle (titleUpdate) {
  return [
    {
      title: titleUpdate,
      collapsable: false,
      children: [
        '',
        'update/1.1.4',
        'update/0.0.0'
      ]
    }
  ]
}

function sideBarOthers (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'css'
      ]
    }
  ]
}
