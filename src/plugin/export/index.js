export default {
  install (Vue, options) {
    // 导出
    Vue.prototype.$export = {
      csv () {
        console.log('export csv')
      }
    }
  }
}
