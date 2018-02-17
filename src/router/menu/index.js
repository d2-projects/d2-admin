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

// 路由 这里的顺序决定了在顶栏显示的顺序
export const router = [
  chart.router,
  plugin.router,
  components.router,
  business.router
]
