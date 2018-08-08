export default {
  namespaced: true,
  state: {
    // 顶栏菜单
    header: [],
    // 侧栏菜单
    aside: [],
    // 侧边栏收缩
    asideCollapse: false
  },
  mutations: {
    /**
     * @param {Object} state vuex state
     * @param {Array} menu menu setting
     */
    headerSet (state, menu) {
      state.header = menu
    },
    /**
     * @param {Object} state vuex state
     * @param {Array} menu menu setting
     */
    asideSet (state, menu) {
      state.aside = menu
    },
    /**
     * 设置侧边栏展开或者收缩
     * @param {Object} state vuex state
     * @param {Boolean} collapse is collapse
     */
    asideCollapseSet (state, collapse) {
      // store 赋值
      state.asideCollapse = collapse
      // 持久化
      this.commit('d2admin/util/dbValueSetByUser', {
        dbName: 'sys',
        path: 'menu.asideCollapse',
        value: collapse
      })
    },
    /**
     * 切换侧边栏展开和收缩
     * @param {Object} state vuex state
     */
    asideCollapseToggle (state) {
      state.asideCollapse = !state.asideCollapse
      // 持久化
      this.commit('d2admin/util/dbValueSetByUser', {
        dbName: 'sys',
        path: 'menu.asideCollapse',
        value: state.asideCollapse
      })
    },
    /**
     * 从数据库读取侧边栏展开或者收缩
     * @param {Object} state vuex state
     */
    async asideCollapseLoad (state) {
      // store 赋值
      state.asideCollapse = await this.dispatch('d2admin/util/dbValueGetByUser', {
        dbName: 'sys',
        path: 'menu.asideCollapse',
        defaultValue: false
      })
    }
  }
}
