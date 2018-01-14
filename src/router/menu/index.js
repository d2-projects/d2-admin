import { pluginMenu, pluginRouter } from './_plugin'
import { chartsMenu, chartsRouter } from './_charts'

// 菜单
export const menu = [
  pluginMenu,
  chartsMenu
]

// 路由
export const router = [
  pluginRouter,
  chartsRouter
]
