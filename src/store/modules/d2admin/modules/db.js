import router from '@/router'
import { cloneDeep } from 'lodash'
import { database as getDatabase, dbGet, dbSet } from '@/libs/util.db'

export default {
  namespaced: true,
  actions: {
    /**
     * @description 将数据存储到指定位置 | 路径不存在会自动初始化
     * @description 效果类似于取值 dbName.path = value
     * @param {Object} context
     * @param {Object} payload dbName {String} 数据库名称
     * @param {Object} payload path {String} 存储路径
     * @param {Object} payload value {*} 需要存储的值
     * @param {Object} payload user {Boolean} 是否区分用户
     */
    set (context, {
      dbName = 'database',
      path = '',
      value = '',
      user = false
    }) {
      dbSet({ dbName, path, value, user })
    },
    /**
     * @description 获取数据
     * @description 效果类似于取值 dbName.path || defaultValue
     * @param {Object} context
     * @param {Object} payload dbName {String} 数据库名称
     * @param {Object} payload path {String} 存储路径
     * @param {Object} payload defaultValue {*} 取值失败的默认值
     * @param {Object} payload user {Boolean} 是否区分用户
     */
    get (context, {
      dbName = 'database',
      path = '',
      defaultValue = '',
      user = false
    }) {
      return dbGet({ dbName, path, defaultValue, user })
    },
    /**
     * @description 获取存储数据库对象
     * @param {Object} context
     * @param {Object} payload user {Boolean} 是否区分用户
     */
    database (context, {
      user = false
    } = {}) {
      return getDatabase({
        user,
        defaultValue: {}
      })
    },
    /**
     * @description 清空存储数据库对象
     * @param {Object} context
     * @param {Object} payload user {Boolean} 是否区分用户
     */
    databaseClear (context, {
      user = false
    } = {}) {
      return getDatabase({
        user,
        validator: () => false,
        defaultValue: {}
      })
    },
    /**
     * @description 获取存储数据库对象 [ 区分页面 ]
     * @param {Object} context
     * @param {Object} payload basis {String} 页面区分依据 [ name | path | fullPath ]
     * @param {Object} payload user {Boolean} 是否区分用户
     */
    databasePage (context, {
      basis = 'fullPath',
      user = false
    } = {}) {
      return getDatabase({
        path: `$page.${router.app.$route[basis]}`,
        user,
        defaultValue: {}
      })
    },
    /**
     * @description 清空存储数据库对象 [ 区分页面 ]
     * @param {Object} context
     * @param {Object} payload basis {String} 页面区分依据 [ name | path | fullPath ]
     * @param {Object} payload user {Boolean} 是否区分用户
     */
    databasePageClear (context, {
      basis = 'fullPath',
      user = false
    } = {}) {
      return getDatabase({
        path: `$page.${router.app.$route[basis]}`,
        user,
        validator: () => false,
        defaultValue: {}
      })
    },
    /**
     * @description 快速将页面当前的数据 ( $data ) 持久化
     * @param {Object} context
     * @param {Object} payload instance {Object} vue 实例
     * @param {Object} payload basis {String} 页面区分依据 [ name | path | fullPath ]
     * @param {Object} payload user {Boolean} 是否区分用户
     */
    pageSet (context, {
      instance,
      basis = 'fullPath',
      user = false
    }) {
      return getDatabase({
        path: `$page.${router.app.$route[basis]}.$data`,
        user,
        validator: () => false,
        defaultValue: cloneDeep(instance.$data)
      })
    },
    /**
     * @description 快速获取页面快速持久化的数据
     * @param {Object} context
     * @param {Object} payload instance {Object} vue 实例
     * @param {Object} payload basis {String} 页面区分依据 [ name | path | fullPath ]
     * @param {Object} payload user {Boolean} 是否区分用户
     */
    pageGet (context, {
      instance,
      basis = 'fullPath',
      user = false
    }) {
      return dbGet({
        path: `$page.${router.app.$route[basis]}.$data`,
        user,
        defaultValue: cloneDeep(instance.$data)
      })
    },
    /**
     * @description 清空页面快照
     * @param {Object} context
     * @param {Object} payload basis {String} 页面区分依据 [ name | path | fullPath ]
     * @param {Object} payload user {Boolean} 是否区分用户
     */
    pageClear (context, {
      basis = 'fullPath',
      user = false
    }) {
      return getDatabase({
        path: `$page.${router.app.$route[basis]}.$data`,
        user,
        validator: () => false,
        defaultValue: {}
      })
    }
  }
}
