export default {
  namespaced: true,
  state: {
    // 颜色
    value: process.env.VUE_APP_ELEMENT_COLOR
  },
  actions: {
    /**
     * @description 设置颜色
     * @param {Object} state vuex state
     * @param {String} color 尺寸
     */
    set ({ state, dispatch }, color) {
      return new Promise(async resolve => {
        // store 赋值
        state.value = color
        // 持久化
        await dispatch('d2admin/db/set', {
          dbName: 'sys',
          path: 'color.value',
          value: state.value,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    },
    /**
     * @description 从持久化数据读取颜色设置
     * @param {Object} state vuex state
     */
    load ({ state, dispatch }) {
      return new Promise(async resolve => {
        // store 赋值
        state.value = await dispatch('d2admin/db/get', {
          dbName: 'sys',
          path: 'color.value',
          defaultValue: process.env.VUE_APP_ELEMENT_COLOR,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    }
  }
}
