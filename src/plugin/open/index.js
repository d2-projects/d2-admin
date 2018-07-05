export default {
  install (Vue, options) {
    // 打开一个url
    Vue.prototype.$open = (url = 'https://github.com/d2-projects') => {
      window.open(url)
    }
  }
}
