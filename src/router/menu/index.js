import * as plugin from './_plugin'
import * as charts from './_charts'
import * as business from './_business'

// 菜单
export const menu = [
  plugin.menu,
  charts.menu,
  business.menu
]

// 路由
export const router = [
  plugin.router,
  charts.router,
  business.router
]
