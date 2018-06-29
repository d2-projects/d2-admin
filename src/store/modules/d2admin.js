export default {
  state: {
    // 系统
    appName: 'D2Admin',
    // 全屏
    isFullScreen: false
  },
  mutations: {
    alertAppName (state) {
      alert(state.appName)
    }
  }
}
