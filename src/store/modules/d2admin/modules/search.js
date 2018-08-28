import setting from '@/setting.js'

export default {
  namespaced: true,
  state: {
    // 搜索面板激活状态
    active: true,
    hotkey: {
      open: setting.hotkey.search.open,
      close: setting.hotkey.search.close
    }
  },
  mutations: {
    /**
     * @description 切换激活状态
     * @param {Object} state vuex state
     */
    toggle (state) {
      state.active = !state.active
    },
    /**
     * @description 设置激活模式
     * @param {Object} state vuex state
     * @param {Boolean} active active
     */
    set (state, active) {
      state.active = active
    }
  }
}
