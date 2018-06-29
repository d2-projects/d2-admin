import util from '@/libs/util.js'

export default {
  state: {
    // 系统
    appName: 'D2Admin',
    // 全屏
    isFullScreen: false
  },
  mutations: {
    /**
     * 切换全屏
     * @param {state} state 
     */
    toggleFullScreen (state) {
      if (state.isFullScreen) {
        util.exitFullScreen()
        state.isFullScreen = false
      } else {
        util.openFullScreen()
        state.isFullScreen = true
      }
    }
  }
}
