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
      demoPlayground,
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
      }
    ]
  },
  demoBusiness
]
