// 设置文件
import setting from '@/setting.js'
import { GetUserInfo } from '@/api/sys/login'
import util from '@/libs/util'

export default {
  namespaced: true,
  state: {
    // 用户信息
    info: setting.user.info,
    permission: []
  },
  actions: {
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        GetUserInfo(util.cookies.get('token'))
          .then(res => {
            const { info, menu, permission } = res
            // 设置用户信息
            state.info = info
            // 设置用户权限
            state.permission = permission
            // 初始化菜单
            commit('d2admin/menu/headerSet', menu, { root: true })
            // 初始化菜单搜索功能
            commit('d2admin/search/init', menu, { root: true })
            // 根据菜单初始化路由
            commit('d2admin/router/GenerateRoutes', menu, { root: true })
            // 用户登录后从持久化存储加载一系列的设置
            commit('d2admin/account/load', null, { root: true })
            resolve()
          }).catch(err => {
            reject(err)
          })
      })
    }
  },
  mutations: {
    /**
     * @description 设置用户数据
     * @param {Object} state vuex state
     * @param {*} info info
     */
    set (state, info) {
      // store 赋值
      state.info = info
      // 持久化
      this.dispatch('d2admin/db/set', {
        dbName: 'sys',
        path: 'user.info',
        value: info,
        user: true
      })
    },
    /**
     * @description 从数据库取用户数据
     * @param {Object} state vuex state
     */
    async load (state) {
      // store 赋值
      state.info = await this.dispatch('d2admin/db/get', {
        dbName: 'sys',
        path: 'user.info',
        defaultValue: setting.user.info,
        user: true
      })
    }
  }
}
