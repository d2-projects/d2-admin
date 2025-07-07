import { uniqueId } from 'lodash'

// 插件模块
import demoPlugins from './modules/demo-plugins'
// 组件模块
import demoComponents from './modules/demo-components'
// 功能模块
import demoPlayground from './modules/demo-playground'

/**
 * @description Adds missing path fields to menu items
 * @param {Array} menu - The original menu array
 * @returns {Array} - Menu with guaranteed paths
 */
function supplementPath(menu = []) {
  if (!Array.isArray(menu)) return []

  return menu.map(item => {
    const { path, title = 'Untitled', icon = 'menu', children } = item
    const fullItem = {
      ...item,
      path: path || uniqueId('d2-menu-empty-'),
      title,
      icon
    }

    if (Array.isArray(children)) {
      fullItem.children = supplementPath(children)
    }

    return fullItem
  })
}

// 菜单 侧边栏
export const menuAside = supplementPath([
  demoComponents,
  demoPlugins,
  demoPlayground
])

// 菜单 顶栏
export const menuHeader = supplementPath([
  {
    path: '/index',
    title: '首页',
    icon: 'home'
  },
  demoPlayground,
  demoComponents,
  demoPlugins
])
