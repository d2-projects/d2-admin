import store from '@/store'
import util from '@/libs/util'

export default {
  install (Vue, options) {
    function writeLog (logType) {
      return (error, vm, info = '') => {
        Vue.nextTick(() => {
          // store 追加 log
          store.dispatch('d2admin/log/push', {
            message: `${info}: ${(typeof error === 'object') ? error.message : error}`,
            type: logType,
            meta: {
              error,
              vm
            }
          })
          // 只在开发模式下打印 log
          if (process.env.NODE_ENV === 'development') {
            util.log.capsule('D2Admin', 'ErrorHandler', logType)
            util.log.danger('>>>>>> 错误信息 >>>>>>')
            console.log(info)
            util.log.danger('>>>>>> Vue 实例 >>>>>>')
            console.log(vm)
            util.log.danger('>>>>>> Error >>>>>>')
            console.log(error)
          }
        })
      }
    }
    if (process.env.NODE_ENV === 'development') {
      Vue.config.warnHandler = writeLog('warning')
    }
    Vue.config.errorHandler = writeLog('danger')

    window.onunhandledrejection = error => {
      store.dispatch('d2admin/log/push', {
        message: (('message' in error.reason) && error.reason.message) || 'Unknown error',
        type: 'danger',
        meta: {
          error: error.reason,
          trace: 'stack' in error.reason && error.reason.stack
        }
      })
    }
    window.onerror = (event, source, lineno, colno, error) => {
      store.dispatch('d2admin/log/push', {
        message: (error && error.message) || 'Unknown error',
        type: 'danger',
        meta: {
          error,
          trace: error.stack,
          source: `${source}@${lineno}:${colno}`,
          event: event
        }
      })
    }
  }
}
