import * as business from './_business'
import * as chart from './_chart'
import * as plugin from './_plugin'
import * as components from './_components'

// 菜单
export const menu = [
  business.menu,
  chart.menu,
  plugin.menu,
  components.menu
]

// 路由
export const router = [
  business.router,
  chart.router,
  plugin.router,
  components.router
]
