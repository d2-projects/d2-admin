// user相关
import userModule from './modules/user-module'

// 菜单 侧边栏
export const menuAside = [
  userModule
]

// 菜单 顶栏
export const menuHeader = [
  {
    path: '/index',
    title: '首页',
    icon: 'home'
  },
  userModule
]
