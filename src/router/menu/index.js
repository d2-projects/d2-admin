import * as business from './_business'
import * as chart from './_chart'
import * as plugin from './_plugin'
import * as components from './_components'

// 菜单 这里的顺序决定了在顶栏显示的顺序
export const menu = [
  plugin.menu,
  components.menu,
  chart.menu,
  business.menu
]

// 路由
export const router = [
  business.router,
  chart.router,
  plugin.router,
  components.router
]
