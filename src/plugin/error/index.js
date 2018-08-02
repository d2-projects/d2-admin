import store from '@/store'
import util from '@/libs/util'

export default {
  install (Vue, options) {
    Vue.config.errorHandler = function (err, vm, info) {
      Vue.nextTick(() => {
        store.commit('d2adminLogAdd', {
          type: 'error',
          err,
          vm,
          info
        })
        if (process.env.NODE_ENV === 'development') {
          util.log.capsule('D2Admin', 'ErrorHandler', 'danger')
          util.log.danger('>>>>>> 错误对象 >>>>>>')
          console.log(err)
          util.log.danger('>>>>>> 报错 Vue 实例 >>>>>>')
          console.log(vm)
          util.log.danger('>>>>>> 错误信息 >>>>>>')
          console.log(info)
        }
      })
    }
  }
}
