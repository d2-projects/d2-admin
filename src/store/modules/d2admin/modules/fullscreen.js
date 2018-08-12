import screenfull from 'screenfull'

export default {
  namespaced: true,
  state: {
    // 全屏激活
    active: false
  },
  mutations: {
    /**
     * @description 切换全屏
     */
    toggle () {
      if (screenfull.isFullscreen) {
        screenfull.exit()
        this.commit('d2admin/fullscreen/set', false)
      } else {
        screenfull.request()
        this.commit('d2admin/fullscreen/set', true)
      }
    },
    /**
     * @description 设置 store 里的全屏状态
     * @param {Object} state vuex state
     * @param {Boolean} active active
     */
    set (state, active) {
      state.active = active
    }
  }
}
