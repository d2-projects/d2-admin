import * as plugin from './_plugin'
import * as business from './_business'
import * as chart from './_chart'

// 菜单
export const menu = [
  plugin.menu,
  business.menu,
  chart.menu
]

// 路由
export const router = [
  plugin.router,
  business.router,
  chart.router
]
