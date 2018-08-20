import db from '@/libs/db.js'
import util from '@/libs/util.js'

/**
 * @description 检查路径是否存在 不存在的话初始化
 * @param {Object} param dbName {String} 数据库名称
 * @param {Object} param path {String} 路径
 * @param {Object} param user {Boolean} 区分用户
 * @param {Object} param validator {Function} 数据校验钩子 返回 true 表示验证通过
 * @param {Object} param defaultValue {*} 初始化默认值
 * @returns {String} 可以直接使用的路径
 */
function pathInit ({
  dbName = 'database',
  path = '',
  user = true,
  validator = () => true,
  defaultValue = ''
}) {
  const uuid = util.cookies.get('uuid') || 'ghost-uuid'
  const currentPath = `${dbName}.${user ? `user.${uuid}` : 'public'}${path ? `.${path}` : ''}`
  const value = db.get(currentPath).value()
  if (!(value !== undefined && validator(value))) {
    db
      .set(currentPath, defaultValue)
      .write()
  }
  return currentPath
}

export default {
  namespaced: true,
  actions: {
    /**
     * @description 将数据存储到指定位置 | 路径不存在会自动初始化
     * @description 效果类似于取值 dbName.path = value
     * @param {Object} param dbName {String} 数据库名称
     * @param {Object} param path {String} 存储路径
     * @param {Object} param value {*} 需要存储的值
     */
    set (context, {
      dbName = 'database',
      path = '',
      value = ''
    }) {
      db.set(pathInit({
        dbName,
        path,
        user: false
      }), value).write()
    },
    /**
     * @description 将数据存储到指定位置 | 路径不存在会自动初始化 [ 区分用户 ]
     * @description 效果类似于取值 dbName.path[user] = value
     * @param {Object} param dbName {String} 数据库名称
     * @param {Object} param path {String} 存储路径
     * @param {Object} param value {*} 需要存储的值
     */
    setByUser (context, {
      dbName = 'database',
      path = '',
      value = ''
    }) {
      db.set(pathInit({
        dbName,
        path
      }), value).write()
    },
    /**
     * @description 获取数据
     * @description 效果类似于取值 dbName.path || defaultValue
     * @param {Object} param dbName {String} 数据库名称
     * @param {Object} param path {String} 存储路径
     * @param {Object} param defaultValue {*} 取值失败的默认值
     */
    get (context, {
      dbName = 'database',
      path = '',
      defaultValue = ''
    }) {
      return new Promise(resolve => {
        resolve(db.get(pathInit({
          dbName,
          path,
          user: false,
          defaultValue
        })).value())
      })
    },
    /**
     * @description 获取数据 [ 区分用户 ]
     * @description 效果类似于取值 dbName.path[user] || defaultValue
     * @param {Object} param dbName {String} 数据库名称
     * @param {Object} param path {String} 存储路径
     * @param {Object} param defaultValue {*} 取值失败的默认值
     */
    getByUser (context, {
      dbName = 'database',
      path = '',
      defaultValue = ''
    }) {
      return new Promise((resolve, reject) => {
        resolve(db.get(pathInit({
          dbName,
          path,
          user: true,
          defaultValue
        })).value())
      })
    },
    /**
     * @description 获取存储数据库对象
     * @param {Object} context context
     * @param {Object} param user {Boolean} 是否区分用户
     */
    database (context, {
      user = false
    } = {}) {
      return new Promise(resolve => {
        resolve(db.get(pathInit({
          dbName: 'database',
          path: '',
          user,
          defaultValue: {}
        })))
      })
    },
    /**
     * @description 清空存储数据库对象
     * @param {Object} context context
     * @param {Object} param user {Boolean} 是否区分用户
     */
    databaseClear (context, {
      user = false
    } = {}) {
      return new Promise(resolve => {
        resolve(db.get(pathInit({
          dbName: 'database',
          path: '',
          user,
          validator: () => false,
          defaultValue: {}
        })))
      })
    },
    /**
     * @description 获取存储数据库对象 [ 区分页面 ]
     * @param {Object} context context
     * @param {Object} param vm {Object} vue
     * @param {Object} param basis {String} 页面区分依据 [ name | path | fullPath ]
     * @param {Object} param user {Boolean} 是否区分用户
     */
    databasePage (context, {
      vm,
      basis = 'name',
      user = false
    } = {}) {
      return new Promise(resolve => {
        resolve(db.get(pathInit({
          dbName: 'database',
          path: `$page.${vm.$route[basis]}`,
          user,
          defaultValue: {}
        })))
      })
    },
    /**
     * @description 清空存储数据库对象 [ 区分页面 ]
     * @param {Object} context context
     * @param {Object} param vm {Object} vue
     * @param {Object} param basis {String} 页面区分依据 [ name | path | fullPath ]
     * @param {Object} param user {Boolean} 是否区分用户
     */
    databasePageClear (context, {
      vm,
      basis = 'name',
      user = false
    } = {}) {
      return new Promise(resolve => {
        resolve(db.get(pathInit({
          dbName: 'database',
          path: `$page.${vm.$route[basis]}`,
          user,
          validator: () => false,
          defaultValue: {}
        })))
      })
    },
    /**
     * @description 快速将页面当前的数据 ( $data ) 持久化
     * @param {Object} context context
     * @param {Object} param vm {Object} vue
     * @param {Object} param basis {String} 页面区分依据 [ name | path | fullPath ]
     * @param {Object} param user {Boolean} 是否区分用户
     */
    pageSet (context, {
      vm,
      basis = 'name',
      user = false
    }) {
      return new Promise(resolve => {
        resolve(db.get(pathInit({
          dbName: 'database',
          path: `$page.${vm.$route[basis]}.$data`,
          user,
          validator: () => false,
          defaultValue: vm.$data
        })))
      })
    },
    /**
     * @description 快速获取页面快速持久化的数据
     * @param {Object} context context
     * @param {Object} param vm {Object} vue
     * @param {Object} param basis {String} 页面区分依据 [ name | path | fullPath ]
     * @param {Object} param user {Boolean} 是否区分用户
     */
    pageLoad (context, {
      vm,
      basis = 'name',
      user = false
    }) {
      return new Promise(resolve => {
        resolve(db.get(pathInit({
          dbName: 'database',
          path: `$page.${vm.$route[basis]}.$data`,
          user,
          defaultValue: vm.$data
        })).value())
      })
    },
    /**
     * @description 清空页面快照
     * @param {Object} context context
     * @param {Object} param vm {Object} vue
     * @param {Object} param basis {String} 页面区分依据 [ name | path | fullPath ]
     * @param {Object} param user {Boolean} 是否区分用户
     */
    pageClear (context, {
      vm,
      basis = 'name',
      user = false
    }) {
      return new Promise(resolve => {
        resolve(db.get(pathInit({
          dbName: 'database',
          path: `$page.${vm.$route[basis]}.$data`,
          user,
          validator: () => false,
          defaultValue: {}
        })))
      })
    }
  }
}
