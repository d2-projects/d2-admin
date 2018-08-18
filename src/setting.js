import { version } from '../package'

const setting = {
  // 版本
  version: version,
  // 是否默认开启页面切换动画
  transition: {
    active: true
  },
  // 在读取页面持久化数据失败时默认页面
  page: {
    opened: [
      {
        name: 'index',
        meta: {
          title: '首页',
          requiresAuth: false
        }
      }
    ]
  }
}

export default setting
