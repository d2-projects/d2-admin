import util from '@/libs/util.js'

import themeList from '@/assets/style/theme/list.js'

export default {
  state: {
    // 系统
    appName: 'D2Admin',
    // 全屏
    isFullScreen: false,
    // 主题
    themeList,
    themeActive: themeList[0]
  },
  mutations: {
    /**
     * 切换全屏
     * @param {state} state vuex state
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
