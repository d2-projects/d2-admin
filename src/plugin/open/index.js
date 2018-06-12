export default {
  install (Vue, options) {
    // 打开一个url
    Vue.prototype.$open = (url = 'https://github.com/FairyEver') => {
      window.open(url)
    }
  }
}
