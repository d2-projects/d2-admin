// 设置文件
import setting from '@/setting.js'

export default {
  namespaced: true,
  state: {
    // 顶栏菜单
    header: [],
    // 侧栏菜单
    aside: [],
    // 侧栏数组
    menuAside: [],
    // 侧边栏收缩
    asideCollapse: setting.menu.asideCollapse,
    // 用户可以访问的页面
    pool: []
  },
  mutations: {
    /**
     * @description 设置侧边栏菜单
     * @param {Object} state vuex state
     * @param {Array} menu menu setting
     */
    asideSet (state, menu) {
      // store 赋值
      state.aside = menu
    },
    /**
     * 设置侧边栏展开或者收缩
     * @param {Object} state vuex state
     * @param {Boolean} collapse is collapse
     */
    asideCollapseSet (state, collapse) {
      // store 赋值
      state.asideCollapse = collapse
      // 持久化
      this.dispatch('d2admin/db/set', {
        dbName: 'sys',
        path: 'menu.asideCollapse',
        value: state.asideCollapse,
        user: true
      })
    },
    /**
     * 切换侧边栏展开和收缩
     * @param {Object} state vuex state
     */
    asideCollapseToggle (state) {
      // store 赋值
      state.asideCollapse = !state.asideCollapse
      // 持久化
      this.dispatch('d2admin/db/set', {
        dbName: 'sys',
        path: 'menu.asideCollapse',
        value: state.asideCollapse,
        user: true
      })
    },
    /**
     * 从持久化存储读取侧边栏展开或者收缩
     * @param {Object} state vuex state
     */
    async asideCollapseLoad (state) {
      // store 赋值
      state.asideCollapse = await this.dispatch('d2admin/db/get', {
        dbName: 'sys',
        path: 'menu.asideCollapse',
        defaultValue: setting.menu.asideCollapse,
        user: true
      })
    },
    /**
     * @description 初始化
     * @param {Object} state vuex state
     * @param {Array} menu menu
     */
    init (state, menus) {
      const pool = []
      const menuAside = []
      const push = function (menus) {
        menus.forEach(menu => {
          if (menu.aside) menuAside.push(menu)
          if (menu.children) {
            push(menu.children)
          } else {
            const { path } = menu
            pool.push(path)
          }
        })
      }
      push(menus)
      state.header = menus
      state.menuAside = menuAside
      state.pool = pool
    }
  }
}
