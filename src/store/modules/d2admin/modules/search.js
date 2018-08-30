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
     * @param {Array} menus menus
     */
    init (state, menus) {
      const pool = []
      const push = function (menus, titlePrefix = []) {
        menus.forEach(menu => {
          if (menu.children) {
            push(menu.children, [ ...titlePrefix, menu.title ])
          } else {
            pool.push({
              ...menu,
              fullTitle: [ ...titlePrefix, menu.title ].join(' / ')
            })
          }
        })
      }
      push(menus)
      state.pool = pool
    }
  }
}
