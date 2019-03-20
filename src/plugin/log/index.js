import store from '@/store'
import util from '@/libs/util'

export default {
  install (Vue, options) {
    // 快速打印 log
    Vue.prototype.$log = {
      ...util.log,
      push (data) {
        store.dispatch('d2admin/log/add', data)
      }
    }
  }
}
