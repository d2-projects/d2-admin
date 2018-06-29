import util from '@/libs/util.js'

import themeList from '@/assets/style/theme/list.js'

import db from '@/libs/db.js'

export default {
  state: {
    // 系统
    appName: 'D2Admin',
    // 用户
    userId: '',
    // 全屏
    isFullScreen: false,
    // 主题
    themeList,
    themeActive: themeList[1]
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
    },
    /**
     * 激活新的主题
     * @param {state} state vuex state
     */
    d2adminThemeSet (state, themeActiveValue) {
      console.log('d2adminThemeSet', themeActiveValue)
    },
    /**
     * 从本地加载主题设置
     * @param {state} state vuex state
     */
    d2adminThemeLoadFromLo (state) {
      console.log(db.get('themeActive').find({name: 'hhh'}).value())
      // db.get('themeActive').push({name: 'hhh'}).write()
    }
  }
}
