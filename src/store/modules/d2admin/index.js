import get from 'lodash.get'
import set from 'lodash.set'
import utilLib from '@/libs/util.js'
import dbLib from '@/libs/db.js'

// 模块

import db from './modules/db'
import releases from './modules/releases'
import user from './modules/user'
import menu from './modules/menu'
import theme from './modules/theme'
import log from './modules/log'
import account from './modules/account'
import fullscreen from './modules/fullscreen'
import ua from './modules/ua'
import gray from './modules/gray'
import page from './modules/page'

export default {
  namespaced: true,
  modules: {
    db,
    releases,
    user,
    menu,
    theme,
    log,
    account,
    fullscreen,
    ua,
    gray,
    page
  },
  mutations: {
    /**
     * @class 通用工具
     * @description 将 state 中某一项存储到数据库 如果已经有的话就更新数据 需要 uuid
     * @param {Object} state vuex state
     * @param {String} key key name
     */
    utilVuex2DbByUuid (state, key) {
      const dbKey = key.split('.')[key.split('.').length - 1]
      const row = dbLib.get(dbKey).find({uuid: utilLib.cookies.get('uuid')})
      const value = get(state, key, '')
      if (row.value()) {
        row.assign({ value }).write()
      } else {
        dbLib.get(dbKey).push({
          uuid: utilLib.cookies.get('uuid'),
          value
        }).write()
      }
    },
    /**
     * @class 通用工具
     * @description 从数据库取值到 vuex 需要 uuid
     * @param {Object} state vuex state
     * @param {Object} param key 键名, defaultValue 取值失败默认值, handleFunction 处理函数
     */
    utilDb2VuexByUuid (state, { key, defaultValue, handleFunction }) {
      const dbKey = key.split('.')[key.split('.').length - 1]
      const row = dbLib.get(dbKey).find({uuid: utilLib.cookies.get('uuid')}).value()
      const handle = handleFunction || (res => res)
      set(state, key, row ? handle(row.value) : defaultValue)
    },
    /**
     * @class 通用工具
     * @description 将 state 中某一项存储到数据库 如果已经有的话就更新数据 不需要 uuid 所有用户共享
     * @param {Object} state vuex state
     * @param {String} key key name
     */
    utilVuex2Db (state, key) {
      const dbKey = key.split('.')[key.split('.').length - 1]
      const row = dbLib.get(dbKey).find({pub: 'pub'})
      const value = get(state, key, '')
      if (row.value()) {
        row.assign({ value }).write()
      } else {
        dbLib.get(dbKey).push({
          pub: 'pub',
          value
        }).write()
      }
    },
    /**
     * @class 通用工具
     * @description 从数据库取值到 vuex 不需要 uuid 所有用户共享
     * @param {Object} state vuex state
     * @param {Object} param key 键名, defaultValue 取值失败时的默认值, handleFunction 处理函数
     */
    utilDb2Vuex (state, { key, defaultValue, handleFunction }) {
      const dbKey = key.split('.')[key.split('.').length - 1]
      const row = dbLib.get(dbKey).find({pub: 'pub'}).value()
      const handle = handleFunction || (res => res)
      set(state, key, row ? handle(row.value) : defaultValue)
    }
  }
}
