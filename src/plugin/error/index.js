import store from '@/store'
import util from '@/libs/util'

export default {
  install (Vue, options) {
    Vue.config.errorHandler = function (err, vm, info) {
      Vue.nextTick(() => {
        store.commit('d2adminLogAdd', {
          err, vm, info
        })
        util.log.capsule('D2Admin', 'ErrorHandler', 'danger')
        util.log.error('>>>>> err')
        console.log(err)
        util.log.error('>>>>> vm')
        console.log(vm)
        util.log.error('>>>>> info')
        console.log(info)
      })
    }
  }
}
