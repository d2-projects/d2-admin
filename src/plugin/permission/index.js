import store from '@/store'

/**
 * @param {Array} value
 * @returns {Boolean}
 */
export default {
  install (Vue, options) {
    Vue.prototype.$checkPermission = (value) => {
      // 校验用户设置是否为数组 是数组的话进行下一步 不是数组的话抛出错误
      if (value && value instanceof Array && value.length > 0) {
        // 获取用户设置
        const permission = value
        const hasPermission = store.state.d2admin.user.permission.some(perm => {
          return permission.includes(perm)
        })
        if (!hasPermission) {
          return false
        }
        return true
      } else {
        console.error(`need roles! Like v-permission="['admin','editor']"`)
        return false
      }
    }
  }
}
