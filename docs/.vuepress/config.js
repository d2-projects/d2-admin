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
          {
            text: '学习',
            items: [
              { text: '教程', link: '/zh/learn-guide/' },
              { text: '相关知识', link: '/zh/learn-knowledge/' }
            ]
          },
          {
            text: '系统',
            items: [
              { text: '内置组件', link: '' },
              { text: '插件', link: '' },
              { text: 'vuex', link: '' },
              { text: '菜单', link: '' },
              { text: '路由', link: '' },
              { text: '主题系统', link: '' },
              { text: '数据持久化', link: '' },
              { text: 'CSS 实用类', link: '' },
              { text: 'JS Util', link: '' }
            ]
          },
          {
            text: '生态',
            items: [
              { text: 'D2 Admin start kit', link: '' },
              { text: 'D2 Admin ICE', link: '' },
              { text: 'D2 CRUD', link: '' },
              { text: 'D2 Ribbons', link: '' }
            ]
          },
          {
            text: '其它',
            items: [
              { text: '文章归档', link: '' },
              { text: '更新日志', link: '' },
              { text: '参与者名单', link: '' },
              {
                text: '关注我们',
                items: [
                  { text: '掘金', link: '' },
                  { text: 'CSDN', link: '' },
                  { text: 'segmentfault', link: '' },
                  { text: '知乎', link: '' },
                  { text: '微信公众号', link: '' }
                ]
              }
            ]
          },
          { text: '常见问题', link: '' }
        ],
        sidebar: {
          '/zh/learn-guide/': sideBarLearnGuide()
        }
      }
    }
  }
}

function sideBarLearnGuide () {
  return [
    {
      collapsable: false,
      children: [
        '',
        'getting-started'
      ]
    }
  ]
}