import setting from '@/setting.js'

export default {
  namespaced: true,
  state: {
    // 搜索面板激活状态
    active: false,
    // 快捷键
    hotkey: {
      open: setting.hotkey.search.open,
      close: setting.hotkey.search.close
    },
    // 所有可以搜索的页面
    pool: []
  },
  mutations: {
    /**
     * @description 切换激活状态
     * @param {Object} state vuex state
     */
    toggle (state) {
      state.active = !state.active
    },
    /**
     * @description 设置激活模式
     * @param {Object} state vuex state
     * @param {Boolean} active active
     */
    set (state, active) {
      state.active = active
    },
    /**
     * @description 初始化
     * @param {Object} state vuex state
     * @param {Array} menu menu
     */
    init (state, menu) {
      const pool = []
      const push = function (menu, titlePrefix = [], pathPrefix = []) {
        menu.forEach(m => {
          if (m.children) {
            push(m.children, [ ...titlePrefix, m.meta.title ], [ ...pathPrefix, m.path ])
          } else {
            if (!(/^https:\/\/|http:\/\//.test(m.path)) && m.path !== undefined) {
              m.path = '/' + [ ...pathPrefix, m.path ].join('/')
            }
            m.meta.fullTitle = [ ...titlePrefix, m.meta.title ].join(' / ')
            pool.push(m)
          }
        })
      }
      push(menu)
      state.pool = pool
    }
  }
}
