import store from '@/store'

export default{
  inserted (el, binding, vnode) {
    const { value } = binding
    const permissions = store.state && store.state.d2admin.user.permission

    if (value && value instanceof Array && value.length > 0) {
      const permission = value

      const hasPermission = permissions.some(perm => {
        return permission.includes(perm)
      })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`need roles! Like v-permission="['admin','editor']"`)
    }
  }
}
