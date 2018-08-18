// 设置文件
import setting from '@/setting.js'

export default {
  namespaced: true,
  state: {
    // 是否开启页面过度动画
    active: setting.transition.active
  },
  mutations: {
    /**
     * @description 设置开启状态
     * @param {Object} state vuex state
     * @param {Boolean} active 新的状态
     */
    set (state, active) {
      // store 赋值
      state.active = active
      // 持久化
      this.commit('d2admin/db/setByUser', {
        dbName: 'sys',
        path: 'transition.active',
        value: state.active
      })
    },
    /**
     * 从数据库读取页面过渡动画设置
     * @param {Object} state vuex state
     */
    async load (state) {
      // store 赋值
      state.active = await this.dispatch('d2admin/db/getByUser', {
        dbName: 'sys',
        path: 'transition.active',
        defaultValue: setting.transition.active
      })
    }
  }
}
