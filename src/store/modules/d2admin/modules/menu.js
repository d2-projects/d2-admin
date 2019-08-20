import { uniqueId } from 'lodash'
// 设置文件
import setting from '@/setting.js'

/**
 * 给菜单数据补充上 path 字段
 * https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜单数据
 */
function supplementMenuPath (menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('d2-menu-empty-'),
    ...e.children ? {
      children: supplementMenuPath(e.children)
    } : {}
  }))
}

export default {
  namespaced: true,
  state: {
    // 顶栏菜单
    header: [],
    // 侧栏菜单
    aside: [],
    // 侧边栏收缩
    asideCollapse: setting.menu.asideCollapse
  },
  actions: {
    /**
     * 设置侧边栏展开或者收缩
     * @param {Object} context
     * @param {Boolean} collapse is collapse
     */
    asideCollapseSet ({ state, dispatch }, collapse) {
      return new Promise(async resolve => {
        // store 赋值
        state.asideCollapse = collapse
        // 持久化
        await dispatch('d2admin/db/set', {
          dbName: 'sys',
          path: 'menu.asideCollapse',
          value: state.asideCollapse,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    },
    /**
     * 切换侧边栏展开和收缩
     * @param {Object} context
     */
    asideCollapseToggle ({ state, dispatch }) {
      return new Promise(async resolve => {
        // store 赋值
        state.asideCollapse = !state.asideCollapse
        // 持久化
        await dispatch('d2admin/db/set', {
          dbName: 'sys',
          path: 'menu.asideCollapse',
          value: state.asideCollapse,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    },
    /**
     * 从持久化数据读取侧边栏展开或者收缩
     * @param {Object} context
     */
    asideCollapseLoad ({ state, dispatch }) {
      return new Promise(async resolve => {
        // store 赋值
        state.asideCollapse = await dispatch('d2admin/db/get', {
          dbName: 'sys',
          path: 'menu.asideCollapse',
          defaultValue: setting.menu.asideCollapse,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    }
  },
  mutations: {
    /**
     * @description 设置顶栏菜单
     * @param {Object} state state
     * @param {Array} menu menu setting
     */
    headerSet (state, menu) {
      // store 赋值
      state.header = supplementMenuPath(menu)
    },
    /**
     * @description 设置侧边栏菜单
     * @param {Object} state state
     * @param {Array} menu menu setting
     */
    asideSet (state, menu) {
      // store 赋值
      state.aside = supplementMenuPath(menu)
    }
  }
}
