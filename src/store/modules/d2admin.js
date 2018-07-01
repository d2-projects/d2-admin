import util from '@/libs/util.js'
import db from '@/libs/db.js'
import themeList from '@/assets/style/theme/list.js'

export default {
  state: {
    // 全屏
    isFullScreen: false,
    // 灰度
    isGrayMode: false,
    // 主题
    themeList,
    themeActive: themeList[1],
    // 可以在多页 tab 模式下显示的页面
    tagPool: [],
    // 当前显示的多页面列表
    pageOpenedList: [
      { name: 'index', title: '首页' }
    ],
    // 当前页面
    pageCurrent: ''
  },
  mutations: {
    /**
     * @class 通用工具
     * @description 将 state 中某一项存储到数据库
     * @param {state} state vuex state
     */
    d2adminVuex2Db (state, key) {
      const setting = db.get(key).find({uuid: util.uuid()})
      if (setting.value()) {
        setting.assign({value: state[key]}).write()
      } else {
        db.get(key).push({
          uuid: util.uuid(),
          value: state[key]
        }).write()
      }
    },
    /**
     * @class pageCurrent
     * @description 设置当前激活的页面 name
     * @param {state} state vuex state
     * @param {string} name new name
     */
    d2adminPageCurrentSet (state, name) {
      state.pageCurrent = name
    },
    /**
     * @class tagPool
     * @description 保存 tagPool (候选池)
     * @param {state} state vuex state
     * @param {Array} tagPool tags
     */
    d2adminTagPoolSet (state, tagPool) {
      state.tagPool = tagPool
    },
    /**
     * @class pageOpenedList
     * @description 更新页面列表上的某一项
     * @param {state} state vuex state
     * @param {info} param1 new page info
     */
    d2adminpageOpenedListUpdateItem (state, { index, argu, query }) {
      // 更新页面列表某一项
      let page = state.pageOpenedList[index]
      page.argu = argu || page.argu
      page.query = query || page.query
      state.pageOpenedList.splice(index, 1, page)
      // 更新设置到数据库
      this.commit('d2adminVuex2Db', 'pageOpenedList')
    },
    /**
     * @class pageOpenedList
     * @description 新增一个 tag (打开一个页面)
     * @param {state} state vuex state
     * @param {object} param1 new tag info
     */
    d2adminTagIncreate (state, { tag, argu, query }) {
      // 设置新的 tag 在新打开一个以前没打开过的页面时使用
      let newTag = tag
      newTag.argu = argu || newTag.argu
      newTag.query = query || newTag.query
      // 添加进当前显示的页面数组
      state.pageOpenedList.push(newTag)
      // 更新设置到数据库
      this.commit('d2adminVuex2Db', 'pageOpenedList')
    },
    /**
     * @class pageOpenedList
     * @description 关闭一个 tag (关闭一个页面)
     * @param {state} state vuex state
     * @param {string} name close tag name
     */
    d2adminTagClose (state, name) {
      // 找到这个页面在已经打开的数据里是第几个
      const index = state.pageOpenedList.findIndex(page => page.name === name)
      if (index >= 0) {
        state.pageOpenedList.splice(index, 1)
      }
      // 更新设置到数据库
      this.commit('d2adminVuex2Db', 'pageOpenedList')
    },
    /**
     * @class pageOpenedList
     * @description 关闭当前标签左边的标签
     * @param {state} state vuex state
     */
    d2adminTagCloseLeft (state) {

    },
    /**
     * @class pageOpenedList
     * @description 关闭当前标签右边的标签
     * @param {state} state vuex state
     */
    d2adminTagCloseRight (state) {

    },
    /**
     * @class pageOpenedList
     * @description 关闭当前激活之外的 tag
     * @param {state} state vuex state
     */
    d2adminTagCloseOther (state) {
      let currentIndex = 0
      state.pageOpenedList.forEach((page, index) => {
        if (page.name === state.pageCurrent) {
          currentIndex = index
        }
      })
      if (currentIndex === 0) {
        state.pageOpenedList.splice(1)
      } else {
        state.pageOpenedList.splice(currentIndex + 1)
        state.pageOpenedList.splice(1, currentIndex - 1)
      }
      // 更新设置到数据库
      this.commit('d2adminVuex2Db', 'pageOpenedList')
    },
    /**
     * @class pageOpenedList
     * @description 关闭所有 tag
     * @param {state} state vuex state
     */
    d2adminTagCloseAll (state) {
      state.pageOpenedList.splice(1)
      // 更新设置到数据库
      this.commit('d2adminVuex2Db', 'pageOpenedList')
    },
    /**
     * @class isFullScreen
     * @description 切换全屏
     * @param {state} state vuex state
     */
    d2adminFullScreenToggle (state) {
      if (state.isFullScreen) {
        util.exitFullScreen()
        state.isFullScreen = false
      } else {
        util.openFullScreen()
        state.isFullScreen = true
      }
    },
    /**
     * @class isGrayMode
     * @description 切换灰度状态
     * @param {state} state vuex state
     */
    d2adminGrayModeToggle (state) {
      state.isGrayMode = !state.isGrayMode
    },
    /**
     * @class isGrayMode
     * @description 设置灰度模式
     * @param {state} state vuex state
     * @param {boolean} value new value
     */
    d2adminGrayModeSet (state, value) {
      state.isGrayMode = value
    },
    /**
     * @class themeActive
     * @description 激活一个主题（应用到dom上）
     * @param {state} state vuex state
     * @param {string} themeValue 需要激活的主题名称
     */
    d2adminThemeSet (state, themeValue) {
      // 从列表里找到需要激活的主题的数据
      const theme = state.themeList.find(e => e.value === themeValue) || state.themeList[0]
      // 设置 state
      state.themeActive = theme
      // 设置 dom
      document.body.className = `theme-${state.themeActive.value}`
      // 保存到数据库
      this.commit('d2adminVuex2Db', 'themeActive')
    },
    /**
     * @class themeActive
     * @description 从数据库加载主题设置
     * @param {state} state vuex state
     */
    d2adminThemeLoad (state) {
      const themeActive = db.get('themeActive').find({uuid: util.uuid()}).value()
      this.commit('d2adminThemeSet', themeActive ? themeActive.value : state.themeList[0].value)
    }
  }
}
