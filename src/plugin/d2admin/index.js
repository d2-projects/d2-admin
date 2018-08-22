export default {
  install (Vue, options) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示。
    // https://cn.vuejs.org/v2/api/#productionTip
    Vue.config.productionTip = false
    // 当前环境
    Vue.prototype.$env = process.env.NODE_ENV
    // 当前的 baseUrl
    // 简化代码中 process.env.BASE_URL 取值
    Vue.prototype.$baseUrl = process.env.BASE_URL
  }
}
