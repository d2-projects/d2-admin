export default {
  state: {
    list: [
      {
        name: 'd2admin 经典',
        value: 'd2',
        preview: '/static/image/theme-preview/d2@2x.png'
      },
      {
        name: '流星',
        value: 'star',
        preview: '/static/image/theme-preview/star@2x.png'
      }
    ],
    name: 'star'
  },
  mutations: {
    // 设置主题
    setTheme (state, name) {
      state.name = name
      document.body.className = `theme-${state.name}`
    }
  }
}
