import db from '@/libs/db.js'
import util from '@/libs/util.js'

/**
 * @description 检查路径是否存在 不存在的话初始化
 * @param {Object} param dbName {String} 数据库名称
 * @param {Object} param path {String} 路径
 * @param {Object} param defaultValue {*} 初始化默认值
 */
function pathInit ({
  dbName = 'db',
  path = '',
  defaultValue = ''
}) {
  const sys = db.get(dbName)
  if (!sys.get(path).value()) {
    sys
      .set(path, defaultValue)
      .write()
  }
  return sys.get(path)
}

/**
 * @description 检查路径下是否有当前用户的档案
 * @param {Object} param dbName {String} 数据库名称
 * @param {Object} param path {String} 路径
 */
function isRowExistByUser ({
  dbName = 'sys',
  path = ''
}) {
  const sys = db.get(dbName)
  const row = sys
    .get(path)
    .find({
      uuid: util.cookies.get('uuid')
    })
  // 返回可以操作的 row 或者布尔值 false
  // 外部判断返回值的时候建议使用 if (!isRowExistByUser({}))
  if (row.value()) {
    return row
  } else {
    return false
  }
}

export default {
  namespaced: true,
  mutations: {
    /**
     * @description 将数据存储到指定位置 [不区分用户]
     * @param {Object} state vuex state
     * @param {Object} param dbName {String} 数据库名称
     * @param {Object} param path {String} 存储路径
     * @param {Object} param value {*} 需要存储的值
     */
    set (state, {
      dbName = 'db',
      path = '',
      value = ''
    }) {
      db
        .get(dbName)
        .set(path, value)
        .write()
    },
    /**
     * @description 将数据存储到指定位置 [区分用户]
     * @param {Object} state vuex state
     * @param {Object} param dbName {String} 数据库名称
     * @param {Object} param path {String} 存储路径
     * @param {Object} param value {*} 需要存储的值
     */
    setByUser (state, {
      dbName = 'db',
      path = '',
      value = ''
    }) {
      // 得到路径在数据库中的对象 没有初始化会自动初始化
      // ByUser 类型的默认值设置为数组
      // 以后数组的每一项是一个用户的存档
      const currentPath = pathInit({ dbName, path, defaultValue: [] })
      // 得到当前用户在数据库此路径下的存档
      const row = isRowExistByUser({ dbName, path })
      // 合并 or 追加
      if (!row) {
        currentPath.push({
          uuid: util.cookies.get('uuid'),
          value
        }).write()
      } else {
        row.assign({ value }).write()
      }
    }
  },
  actions: {
    /**
     * @description 获取数据 [区分用户]
     * @param {Object} state vuex state
     * @param {Object} param dbName {String} 数据库名称
     * @param {Object} param path {String} 存储路径
     * @param {Object} param defaultValue {*} 取值失败的默认值
     */
    getByUser (context, {
      dbName = 'db',
      path = '',
      defaultValue = ''
    }) {
      return new Promise((resolve, reject) => {
        // 得到当前用户在数据库此路径下的存档
        const row = isRowExistByUser({ path })
        // 返回存档或者默认值
        resolve(!row ? defaultValue : row.value().value)
      })
    }
  }
}
