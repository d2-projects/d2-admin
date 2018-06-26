import Cookies from 'js-cookie'

export default {
  state: {
    list: [
      {
        name: 'd2admin 经典',
        value: 'd2',
        preview: 'static/image/theme/d2/preview@2x.png'
      },
      {
        name: '紫罗兰',
        value: 'violet',
        preview: 'static/image/theme/violet/preview@2x.png'
      },
      {
        name: '简约线条',
        value: 'line',
        backgroundImage: 'static/image/bg/line-squashed.jpg',
        preview: 'static/image/theme/line/preview@2x.png'
      },
      {
        name: '流星',
        value: 'star',
        backgroundImage: 'static/image/bg/star-squashed.jpg',
        preview: 'static/image/theme/star/preview@2x.png'
      },
      {
        name: 'Tomorrow Night Blue (vsCode)',
        value: 'tomorrow-night-blue',
        preview: 'static/image/theme/tomorrow-night-blue/preview@2x.png'
      }
    ],
    name: '',
    backGroundImage: ''
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
      Cookies.set('themeName', name, {
        expires: 365
      })
      // 激活主题
      this.commit('activeTheme')
    },
    // 激活当前主题
    activeTheme (state) {
      // 设置背景图片
      const themeSetting = state.list.find(e => e.value === state.name)
      if (themeSetting) {
        state.backGroundImage = themeSetting.backgroundImage || ''
      }
      document.body.className = `theme-${state.name}`
    }
  }
}
