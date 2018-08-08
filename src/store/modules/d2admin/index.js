import screenfull from 'screenfull'
import dayjs from 'dayjs'
import get from 'lodash.get'
import set from 'lodash.set'
import utilLib from '@/libs/util.js'
import db from '@/libs/db.js'

// 模块

import util from './modules/util'
import releases from './modules/releases'
import user from './modules/user'
import menu from './modules/menu'
import theme from './modules/theme'

const pageOpenedDefult = {
  name: 'index',
  meta: {
    title: '首页',
    requiresAuth: false
  }
}

export default {
  namespaced: true,
  modules: {
    util,
    releases,
    user,
    menu,
    theme
  },
  state: {
    // 全屏
    isFullScreen: false,
    // 灰度
    isGrayMode: false,
    // 可以在多页 tab 模式下显示的页面
    pagePool: [],
    // 当前显示的多页面列表
    pageOpenedList: [
      pageOpenedDefult
    ],
    // 当前页面
    pageCurrent: '',
    // 用户 UA
    ua: {},
    // 错误日志
    log: []
  },
  getters: {
    /**
     * @description 从当前所有打开的多标签页里返回需要缓存的页面 name
     * @param {*} state vuex state
     */
    keepAliveInclude (state) {
      return state.pageOpenedList.filter(item => {
        if (item.meta) {
          if (item.meta.notCache) {
            return false
          }
        }
        return true
      }).map(e => e.name)
    },
    /**
     * @description 返回现存 log (all) 的条数
     * @param {*} state vuex state
     */
    logLength (state) {
      return state.log.length
    },
    /**
     * @description 返回现存 log (error) 的条数
     * @param {*} state vuex state
     */
    logErrorLength (state) {
      return state.log.filter(l => l.type === 'error').length
    }
  },
  actions: {
    /**
     * 登陆
     * @param {Object} param context
     * @param {Object} param { vue, username, password }
     */
    login ({ commit }, { vm, username, password }) {
      // 开始请求登录接口
      vm.$axios({
        method: 'post',
        url: '/login',
        data: {
          username,
          password
        }
      })
        .then(res => {
          // 设置 cookie 一定要存 uuid 和 token 两个 cookie
          // 整个系统依赖这两个数据进行校验和存储
          // uuid 是用户身份唯一标识 用户注册的时候确定 并且不可改变 不可重复
          // token 代表用户当前登录状态 建议在网络请求中携带 token
          // 如有必要 token 需要定时更新，默认保存一天
          utilLib.cookies.set('uuid', res.data.uuid)
          utilLib.cookies.set('token', res.data.token)
          // 设置 vuex 用户信息
          commit('user/set', {
            name: res.data.name
          })
          // 用户登陆后从数据库加载一系列的设置
          commit('loginSuccessLoad')
          // 跳转路由
          vm.$router.push({
            name: 'index'
          })
        })
        .catch(err => {
          console.group('登陆结果')
          console.log('err: ', err)
          console.groupEnd()
        })
    },
    /**
     * 注销用户并返回登陆页面
     * @param {Object} param context
     * @param {Object} confirm need confirm ?
     */
    logout ({ commit }, { vm, confirm }) {
      /**
       * @description 注销
       */
      function logout () {
        // 删除cookie
        utilLib.cookies.remove('token')
        utilLib.cookies.remove('uuid')
        // 跳转路由
        vm.$router.push({
          name: 'login'
        })
      }
      // 判断是否需要确认
      if (confirm) {
        commit('grayModeSet', true)
        vm.$confirm('注销当前账户吗?  打开的标签页和用户设置将会被保存。', '确认操作', {
          confirmButtonText: '确定注销',
          cancelButtonText: '放弃',
          type: 'warning'
        })
          .then(() => {
            commit('grayModeSet', false)
            logout()
          })
          .catch(() => {
            commit('grayModeSet', false)
            vm.$message('放弃注销用户')
          })
      } else {
        logout()
      }
    }
  },
  mutations: {
    /**
     * @class 通用工具
     * @description 将 state 中某一项存储到数据库 如果已经有的话就更新数据 需要 uuid
     * @param {Object} state vuex state
     * @param {String} key key name
     */
    utilVuex2DbByUuid (state, key) {
      const dbKey = key.split('.')[key.split('.').length - 1]
      const row = db.get(dbKey).find({uuid: utilLib.cookies.get('uuid')})
      const value = get(state, key, '')
      if (row.value()) {
        row.assign({ value }).write()
      } else {
        db.get(dbKey).push({
          uuid: utilLib.cookies.get('uuid'),
          value
        }).write()
      }
    },
    /**
     * @class 通用工具
     * @description 从数据库取值到 vuex 需要 uuid
     * @param {Object} state vuex state
     * @param {Object} param key 键名, defaultValue 取值失败默认值, handleFunction 处理函数
     */
    utilDb2VuexByUuid (state, { key, defaultValue, handleFunction }) {
      const dbKey = key.split('.')[key.split('.').length - 1]
      const row = db.get(dbKey).find({uuid: utilLib.cookies.get('uuid')}).value()
      const handle = handleFunction || (res => res)
      set(state, key, row ? handle(row.value) : defaultValue)
    },
    /**
     * @class 通用工具
     * @description 将 state 中某一项存储到数据库 如果已经有的话就更新数据 不需要 uuid 所有用户共享
     * @param {Object} state vuex state
     * @param {String} key key name
     */
    utilVuex2Db (state, key) {
      const dbKey = key.split('.')[key.split('.').length - 1]
      const row = db.get(dbKey).find({pub: 'pub'})
      const value = get(state, key, '')
      if (row.value()) {
        row.assign({ value }).write()
      } else {
        db.get(dbKey).push({
          pub: 'pub',
          value
        }).write()
      }
    },
    /**
     * @class 通用工具
     * @description 从数据库取值到 vuex 不需要 uuid 所有用户共享
     * @param {Object} state vuex state
     * @param {Object} param key 键名, defaultValue 取值失败时的默认值, handleFunction 处理函数
     */
    utilDb2Vuex (state, { key, defaultValue, handleFunction }) {
      const dbKey = key.split('.')[key.split('.').length - 1]
      const row = db.get(dbKey).find({pub: 'pub'}).value()
      const handle = handleFunction || (res => res)
      set(state, key, row ? handle(row.value) : defaultValue)
    },
    /**
     * @class 通用工具
     * @description 访问本地数据库 用户单独空间 没有初始化会自动初始化
     * @param {Object} state vuex state
     * @param {Function} fn function
     */
    utilDatabaseUser (state, fn) {
      const uuid = utilLib.cookies.get('uuid')
      const database = db.get('database').find({ uuid })
      if (database.value() === undefined) {
        db.get('database').push({
          uuid,
          value: {}
        }).write()
        if (fn) {
          fn(db.get('database').find({ uuid }).get('value'))
        }
      } else {
        if (fn) {
          fn(database.get('value'))
        }
      }
    },
    /**
     * @class 通用工具
     * @description 访问本地数据库 清空用户单独空间 只负责删除 utilDatabaseUser 会初始化
     * @param {Object} state vuex state
     */
    utilDatabaseUserClear (state) {
      db.get('database')
        .remove({ uuid: utilLib.cookies.get('uuid') })
        .write()
    },
    /**
     * @class 通用工具
     * @description 访问本地数据库 这份数据是每个用户都可以访问的
     * @param {Object} state vuex state
     * @param {Function} fn function
     */
    utilDatabase (state, fn) {
      if (fn) {
        fn(db.get('databasePublic'))
      }
    },
    /**
     * @class 通用工具
     * @description 访问本地数据库 清空公用空间
     * @param {Object} state vuex state
     */
    utilDatabaseClear (state) {
      db.set('databasePublic', {})
        .write()
    },
    /**
     * @class UA
     * @description 记录 UA
     * @param {Object} state vuex state
     */
    uaGet (state) {
      state.ua = utilLib.ua()
    },
    /**
     * @class ...
     * @description 用户登陆后从数据库加载一系列的设置
     * @param {Object} state vuex state
     */
    loginSuccessLoad (state) {
      // DB -> store 加载用户名
      this.commit('d2admin/user/load')
      // DB -> store 加载主题
      this.commit('d2admin/theme/load')
      // DB -> store 数据库加载上次退出时的多页列表
      this.commit('d2admin/pageOpenedListLoad')
      // DB -> store 数据库加载这个用户之前设置的侧边栏折叠状态
      this.commit('d2admin/menu/asideCollapseLoad')
    },
    /**
     * @class pagePool
     * @description 保存 pagePool (候选池)
     * @param {Object} state vuex state
     * @param {Array} pagePool tags
     */
    pagePoolSet (state, pagePool) {
      state.pagePool = pagePool
    },
    /**
     * @class pageCurrent
     * @description 打开一个新的页面
     * @param {Object} state vuex state
     * @param {Object} param { name, params, query } 路由信息
     */
    pageOpenNew (state, { name, params, query }) {
      // 已经打开的页面
      let pageOpenedList = state.pageOpenedList
      // 判断此页面是否已经打开 并且记录位置
      let pageOpendIndex = 0
      const pageOpend = pageOpenedList.find((page, index) => {
        const same = page.name === name
        pageOpendIndex = same ? index : pageOpendIndex
        return same
      })
      if (pageOpend) {
        // 页面以前打开过 但是新的页面可能 name 一样，参数不一样
        this.commit('d2admin/pageOpenedListUpdateItem', {
          index: pageOpendIndex,
          params,
          query
        })
      } else {
        // 页面以前没有打开过
        let tag = state.pagePool.find(t => t.name === name)
        if (tag) {
          this.commit('d2admin/tagIncreate', { tag, params, query })
        }
      }
      this.commit('d2admin/pageCurrentSet', name)
    },
    /**
     * @class pageCurrent
     * @description 设置当前激活的页面 name
     * @param {Object} state vuex state
     * @param {String} name new name
     */
    pageCurrentSet (state, name) {
      state.pageCurrent = name
    },
    /**
     * @class pageOpenedList
     * @description 更新页面列表上的某一项
     * @param {Object} state vuex state
     * @param {Object} param { index, params, query } 路由信息
     */
    pageOpenedListUpdateItem (state, { index, params, query }) {
      // 更新页面列表某一项
      let page = state.pageOpenedList[index]
      page.params = params || page.params
      page.query = query || page.query
      state.pageOpenedList.splice(index, 1, page)
      // 更新设置到数据库
      this.commit('d2admin/utilVuex2DbByUuid', 'pageOpenedList')
    },
    /**
     * @class pageOpenedList
     * @description 从数据库载入分页列表
     * @param {Object} state vuex state
     */
    pageOpenedListLoad (state) {
      this.commit('d2admin/utilDb2VuexByUuid', {
        key: 'pageOpenedList',
        defaultValue: [
          pageOpenedDefult
        ],
        handleFunction (res) {
          // 在处理函数中进行数据优化 过滤掉现在已经失效的页签或者已经改变了信息的页签
          // 以 name 字段为准
          // 如果页面过多的话可能需要优化算法
          // 有效列表 1, 1, 0, 1 => 有效, 有效, 失效, 有效
          const valid = []
          // 处理数据
          return res.map(opened => {
            // 忽略首页
            if (opened.name === 'index') {
              valid.push(1)
              return opened
            }
            // 尝试在所有的支持多标签页的页面里找到 name 匹配的页面
            const find = state.pagePool.find(item => item.name === opened.name)
            // 记录有效或无效信息
            valid.push(find ? 1 : 0)
            // 返回合并后的数据 新的覆盖旧的
            // 新的数据中一般不会携带 params 和 query, 所以旧的参数会留存
            return Object.assign({}, opened, find)
          }).filter((opened, index) => valid[index] === 1)
        }
      })
    },
    /**
     * @class pageOpenedList
     * @description 新增一个 tag (打开一个页面)
     * @param {Object} state vuex state
     * @param {Object} param new tag info
     */
    tagIncreate (state, { tag, params, query }) {
      // 设置新的 tag 在新打开一个以前没打开过的页面时使用
      let newPage = tag
      newPage.params = params || newPage.params
      newPage.query = query || newPage.query
      // 添加进当前显示的页面数组
      state.pageOpenedList.push(newPage)
      // 更新设置到数据库
      this.commit('d2admin/utilVuex2DbByUuid', 'pageOpenedList')
    },
    /**
     * @class pageOpenedList
     * @description 关闭一个 tag (关闭一个页面)
     * @param {Object} state vuex state
     * @param {Object} param { tagName: 要关闭的标签名字, vm: vue }
     */
    tagClose (state, { tagName, vm }) {
      // 下个新的页面
      let newPage = state.pageOpenedList[0]
      const isCurrent = state.pageCurrent === tagName
      // 如果关闭的页面就是当前显示的页面
      if (isCurrent) {
        // 去找一个新的页面
        let len = state.pageOpenedList.length
        for (let i = 1; i < len; i++) {
          if (state.pageOpenedList[i].name === tagName) {
            if (i < len - 1) {
              newPage = state.pageOpenedList[i + 1]
            } else {
              newPage = state.pageOpenedList[i - 1]
            }
            break
          }
        }
      }
      // 找到这个页面在已经打开的数据里是第几个
      const index = state.pageOpenedList.findIndex(page => page.name === tagName)
      if (index >= 0) {
        state.pageOpenedList.splice(index, 1)
      }
      // 更新设置到数据库
      this.commit('d2admin/utilVuex2DbByUuid', 'pageOpenedList')
      // 最后需要判断是否需要跳到首页
      if (isCurrent) {
        const { name = '', params = {}, query = {} } = newPage
        let routerObj = {
          name,
          params,
          query
        }
        vm.$router.push(routerObj)
      }
    },
    /**
     * @class pageOpenedList
     * @description 关闭当前标签左边的标签
     * @param {Object} state vuex state
     * @param {Object} param { pageSelect: 当前选中的tagName, vm: vue }
     */
    tagCloseLeft (state, { pageSelect, vm } = {}) {
      const pageAim = pageSelect || state.pageCurrent
      let currentIndex = 0
      state.pageOpenedList.forEach((page, index) => {
        if (page.name === pageAim) {
          currentIndex = index
        }
      })
      if (currentIndex > 0) {
        state.pageOpenedList.splice(1, currentIndex - 1)
      }
      state.pageCurrent = pageAim
      if (vm && vm.$route.name !== pageAim) {
        vm.$router.push({
          name: pageAim
        })
      }
      // 更新设置到数据库
      this.commit('d2admin/utilVuex2DbByUuid', 'pageOpenedList')
    },
    /**
     * @class pageOpenedList
     * @description 关闭当前标签右边的标签
     * @param {Object} state vuex state
     * @param {Object} param { pageSelect: 当前选中的tagName, vm: vue }
     */
    tagCloseRight (state, { pageSelect, vm } = {}) {
      const pageAim = pageSelect || state.pageCurrent
      let currentIndex = 0
      state.pageOpenedList.forEach((page, index) => {
        if (page.name === pageAim) {
          currentIndex = index
        }
      })
      state.pageOpenedList.splice(currentIndex + 1)
      state.pageCurrent = pageAim
      if (vm && vm.$route.name !== pageAim) {
        vm.$router.push({
          name: pageAim
        })
      }
      // 更新设置到数据库
      this.commit('d2admin/utilVuex2DbByUuid', 'pageOpenedList')
    },
    /**
     * @class pageOpenedList
     * @description 关闭当前激活之外的 tag
     * @param {Object} state vuex state
     * @param {Object} param { pageSelect: 当前选中的tagName, vm: vue }
     */
    tagCloseOther (state, { pageSelect, vm } = {}) {
      const pageAim = pageSelect || state.pageCurrent
      let currentIndex = 0
      state.pageOpenedList.forEach((page, index) => {
        if (page.name === pageAim) {
          currentIndex = index
        }
      })
      if (currentIndex === 0) {
        state.pageOpenedList.splice(1)
      } else {
        state.pageOpenedList.splice(currentIndex + 1)
        state.pageOpenedList.splice(1, currentIndex - 1)
      }
      state.pageCurrent = pageAim
      if (vm && vm.$route.name !== pageAim) {
        vm.$router.push({
          name: pageAim
        })
      }
      // 更新设置到数据库
      this.commit('d2admin/utilVuex2DbByUuid', 'pageOpenedList')
    },
    /**
     * @class pageOpenedList
     * @description 关闭所有 tag
     * @param {Object} state vuex state
     * @param {Object} vm vue
     */
    tagCloseAll (state, vm) {
      state.pageOpenedList.splice(1)
      // 更新设置到数据库
      this.commit('d2admin/utilVuex2DbByUuid', 'pageOpenedList')
      // 关闭所有的标签页后需要判断一次现在是不是在首页
      if (vm.$route.name !== 'index') {
        vm.$router.push({
          name: 'index'
        })
      }
    },
    /**
     * @class isFullScreen
     * @description 切换全屏
     * @param {Object} state vuex state
     */
    fullScreenToggle () {
      if (screenfull.isFullscreen) {
        screenfull.exit()
        this.commit('d2admin/fullScreenSet', false)
      } else {
        screenfull.request()
        this.commit('d2admin/fullScreenSet', true)
      }
    },
    /**
     * @class isFullScreen
     * @description 设置 store 里的全屏状态
     * @param {Object} state vuex state
     */
    fullScreenSet (state, isFullScreen) {
      state.isFullScreen = isFullScreen
    },
    /**
     * @class isGrayMode
     * @description 切换灰度状态
     * @param {Object} state vuex state
     */
    grayModeToggle (state) {
      state.isGrayMode = !state.isGrayMode
    },
    /**
     * @class isGrayMode
     * @description 设置灰度模式
     * @param {Object} state vuex state
     * @param {Boolean} value new value
     */
    grayModeSet (state, value) {
      state.isGrayMode = value
    },
    /**
     * @class log
     * @description 添加一个 log
     * @param {Object} state vuex state
     * @param {Object} param { }
     */
    logAdd (state, { type, err, vm, info }) {
      state.log.push(Object.assign({
        // 记录类型
        type: 'log', // error
        // 信息
        info: '',
        // 错误对象
        err: '',
        // vue 实例
        vm: '',
        // 当前用户信息
        user: state.user.info,
        // 当前用户的 uuid
        uuid: utilLib.cookies.get('uuid'),
        // 当前的 token
        token: utilLib.cookies.get('token'),
        // 当前地址
        url: get(window, 'location.href', ''),
        // 当前时间
        time: dayjs().format('YYYY-M-D HH:mm:ss')
      }, { type, err, vm, info }))
    },
    /**
     * @class log
     * @description 清空日志
     * @param {Object} state vuex state
     */
    logClean (state) {
      state.log = []
    }
  }
}
