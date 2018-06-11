import Cookies from 'js-cookie'

export default {
  state: {
    list: [
      {
        name: 'd2admin 经典',
        value: 'd2',
        preview: '/static/image/theme/d2/preview.png'
      },
      {
        name: '流星',
        value: 'star',
        preview: '/static/image/theme/star/preview.png'
      }
    ],
    name: ''
  },
  mutations: {
    // 从 cookie 加载主题
    loadTheme (state) {
      const name = Cookies.get('themeName')
      if (name) {
        // 设置 store
        state.name = name
        // 激活主题
        this.commit('activeTheme')
      } else {
        // 设置新的主题为列表第一项
        this.commit('setTheme', state.list[0].value)
      }
    },
    // 设置新的主题
    setTheme (state, name) {
      // 设置 store
      state.name = name
      // 设置 Cookie
      Cookies.set('themeName', name)
      // 激活主题
      this.commit('activeTheme')
    },
    // 激活当前主题
    activeTheme (state) {
      document.body.className = `theme-${state.name}`
    }
  }
}
