import { version } from '../../../../../package'

export default {
  namespaced: true,
  state: {
    // D2Admin 版本
    version,
    // 最新版本的信息
    latest: {},
    // 有新版本
    update: false
  },
  mutations: {
    /**
     * @description 设置是否有新的 D2Admin 版本
     * @param {Object} state vuex state
     * @param {Boolean} update can update
     */
    updateSet (state, update) {
      // store 赋值
      state.update = update
    },
    /**
     * @description 设置最新版本的信息
     * @param {Object} state vuex state
     * @param {Object}} latest releases value
     */
    latestSet (state, latest) {
      // store 赋值
      state.latest = latest
    }
  }
}
