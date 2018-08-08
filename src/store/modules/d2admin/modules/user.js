export default {
  state: {
    userInfo: {
      name: ''
    }
  },
  mutations: {
    /**
     * @description 设置用户数据
     * @param {Object} state vuex state
     * @param {*} userInfo userInfo
     */
    userInfoSet (state, userInfo) {
      // store 赋值
      state.userInfo = userInfo
      // 持久化
      this.commit('d2admin/util/dbValueSetByUser', {
        dbName: 'sys',
        path: 'user.userInfo',
        value: userInfo
      })
    },
    /**
     * @description 从数据库取用户数据
     * @param {Object} state vuex state
     */
    async userInfoLoad (state) {
      // store 赋值
      state.userInfo = await this.dispatch('d2admin/util/dbValueGetByUser', {
        dbName: 'sys',
        path: 'user.userInfo',
        defaultValue: '请重新登陆'
      })
    }
  }
}
