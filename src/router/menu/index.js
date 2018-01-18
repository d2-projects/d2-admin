import { pluginMenu, pluginRouter } from './_plugin'
import { chartsMenu, chartsRouter } from './_charts'
import { businessMenu, businessRouter } from './_business'

// 菜单
export const menu = [
  pluginMenu,
  chartsMenu,
  businessMenu
]

// 路由
export const router = [
  pluginRouter,
  chartsRouter,
  businessRouter
]
