import screenfull from 'screenfull'

export default {
  namespaced: true,
  state: {
    // 全屏激活
    active: false
  },
  actions: {
    /**
     * @description 初始化监听
     * @param {Object} context
     */
    listen ({ commit }) {
      if (screenfull.isEnabled) {
        screenfull.on('change', () => {
          if (!screenfull.isFullscreen) commit('set', false)
        })
      }
    },
    /**
     * @description 切换全屏
     * @param {Object} context
     */
    toggle ({ commit }) {
      if (screenfull.isFullscreen) {
        screenfull.exit()
        commit('set', false)
      } else {
        screenfull.request()
        commit('set', true)
      }
    }
  },
  mutations: {
    /**
     * @description 设置 store 里的全屏状态
     * @param {Object} state state
     * @param {Boolean} active active
     */
    set (state, active) {
      state.active = active
    }
  }
}
