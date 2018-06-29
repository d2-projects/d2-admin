import util from '@/libs/util.js'

export default {
  state: {
    // 系统
    appName: 'D2Admin',
    // 全屏
    isFullScreen: false
  },
  mutations: {
    toggleFullScreen (state) {
      if (state.isFullScreen) {
        util.closeFullScreen()
        state.isFullScreen = false
      } else {
        util.fullScreen()
        state.isFullScreen = true
      }
    }
  }
}
