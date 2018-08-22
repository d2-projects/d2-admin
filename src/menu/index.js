// 插件
import demoPlugins from './modules/demo-plugins'
// 组件
import demoComponents from './modules/demo-components'
// 组件
import demoCharts from './modules/demo-charts'
// 组件库
import demoElement from './modules/demo-element'
// 试验台
import demoPlayground from './modules/demo-playground'
// 示例
import demoBusiness from './modules/demo-business'

// 菜单 侧边栏
export const menuAside = [
  demoComponents,
  demoPlugins,
  demoCharts,
  demoElement,
  demoPlayground,
  demoBusiness
]

// 菜单 顶栏
export const menuHeader = [
  {
    path: '/index',
    title: '首页',
    icon: 'home'
  },
  {
    title: '功能',
    icon: 'puzzle-piece',
    children: [
      demoComponents,
      demoElement,
      demoCharts,
      demoPlugins,
      {
        title: '跳转外部链接',
        icon: 'link',
        children: [
          { path: 'https://github.com/d2-projects/d2-admin', title: 'D2Admin Github', icon: 'github' },
          { path: 'https://juejin.im/user/57a48b632e958a006691b946/posts', title: '掘金', icon: 'globe' },
          { path: 'https://my.oschina.net/u/3871516', title: '开源中国', icon: 'globe' },
          { path: 'https://www.zhihu.com/people/fairy-ever/activities', title: '知乎', icon: 'globe' },
          { path: 'https://segmentfault.com/blog/liyang-note-book', title: 'segmentfault 专栏', icon: 'globe' },
          { path: 'http://www.fairyever.com/', title: 'www.fairyever.com', icon: 'globe' }
        ]
      },
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
      },
      {
        title: 'svg 菜单图标',
        iconSvg: 'd2admin',
        children: [
          { title: 'add', iconSvg: 'add' },
          { title: 'alarm', iconSvg: 'alarm' },
          { title: 'camera', iconSvg: 'camera' },
          { title: 'history', iconSvg: 'history' },
          { title: 'like', iconSvg: 'like' },
          { title: 'love', iconSvg: 'love' },
          { title: 'message', iconSvg: 'message' },
          { title: 'notice', iconSvg: 'notice' },
          { title: 'search', iconSvg: 'search' },
          { title: 'share', iconSvg: 'share' },
          { title: 'star', iconSvg: 'star' },
          { title: 'user', iconSvg: 'user' }
        ]
      }
    ]
  },
  demoPlayground,
  demoBusiness
]
