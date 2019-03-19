import dayjs from 'dayjs'
import { get } from 'lodash'
import util from '@/libs/util.js'

export default {
  namespaced: true,
  state: {
    // 错误日志
    // + 日志条目的属性
    //   - message 必须 日志信息
    //   - time 必须 日志记录时间
    //   - type 非必须 类型 success | warning | info | error
    //   - meta 非必须 其它携带信息
    list: []
  },
  getters: {
    /**
     * @description 返回现存 log (all) 的条数
     * @param {*} state vuex state
     */
    length (state) {
      return state.list.length
    },
    /**
     * @description 返回现存 log (error) 的条数
     * @param {*} state vuex state
     */
    lengthError (state) {
      return state.list.filter(l => l.type === 'error').length
    }
  },
  actions: {
    /**
     * @description 添加一个日志
     * @param {Object} param type {String} 类型
     * @param {Object} param err {Error} 错误对象
     * @param {Object} param instance {Object} vue 实例
     * @param {Object} param info {String} 信息
     */
    add ({ rootState, commit }, { message, type, meta }) {
      commit('add', {
        message,
        time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        type,
        meta: {
          // 当前用户信息
          user: rootState.d2admin.user.info,
          // 当前用户的 uuid
          uuid: util.cookies.get('uuid'),
          // 当前的 token
          token: util.cookies.get('token'),
          // 当前地址
          url: get(window, 'location.href', ''),
          // 用户设置
          ...meta
        }
      })
    }
  },
  mutations: {
    /**
     * @description 添加日志
     * @param {Object} state vuex state
     * @param {Object} log data
     */
    add (state, log) {
      state.list.push(log)
    },
    /**
     * @description 清空日志
     * @param {Object} state vuex state
     */
    clean (state) {
      // store 赋值
      state.list = []
    }
  }
}
