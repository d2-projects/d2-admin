export default {
  install (Vue, options) {
    // 打印log
    // 如果只有一个参数 就只简单打印第一个参数
    // 如果有大于一个参数 第一个参数会当做是分组的名称
    Vue.prototype.$log = (arg1 = 'log', ...logs) => {
      if (logs.length === 0) {
        console.log(arg1)
      } else {
        console.group(arg1)
        logs.forEach(e => {
          console.log(e)
        })
        console.groupEnd()
      }
    }
  }
}
