import store from '@/store'

export default{
  inserted (el, binding, vnode) {
    // 获取用户设置
    const { value } = binding
    // 校验用户设置是否为数组 是数组的话进行下一步 不是数组的话抛出错误
    if (value && value instanceof Array && value.length > 0) {
      const permission = value
      const hasPermission = store.state.d2admin.user.permission.some(perm => {
        return permission.includes(perm)
      })
      if (!hasPermission) {
        // 移除元素
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`need roles! Like v-permission="['admin','editor']"`)
    }
  }
}
