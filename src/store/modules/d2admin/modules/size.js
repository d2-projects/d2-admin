export default {
  namespaced: true,
  state: {
    // 尺寸
    value: '' // medium small mini
  },
  mutations: {
    /**
     * @description 设置尺寸
     * @param {Object} state vuex state
     * @param {String} size 尺寸
     */
    set (state, size) {
      // store 赋值
      state.value = size
      // 持久化
      this.dispatch('d2admin/db/set', {
        dbName: 'sys',
        path: 'size.value',
        value: state.value,
        user: true
      })
    },
    /**
     * @description 从持久化数据读取尺寸设置
     * @param {Object} state vuex state
     */
    async load (state) {
      // store 赋值
      state.value = await this.dispatch('d2admin/db/get', {
        dbName: 'sys',
        path: 'size.value',
        defaultValue: 'default',
        user: true
      })
    }
  }
}
