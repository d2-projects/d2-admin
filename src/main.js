// polyfill
import 'babel-polyfill'

// Vue
import Vue from 'vue'
import App from './App'

// 工具
import util from '@/libs/util'

// vuex
import store from '@/store/index'

// 路由
import router from './router'
// 框架内的路由
import { frameInRoutes } from '@/router/routes'

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// font-awesome
import '@/assets/library/font-awesome-4.7.0/css/font-awesome.min.css'

// 全屏控制
import screenfull from 'screenfull'

// 全局注册的组件
import '@/components'

// 异步请求库
import '@/plugin/axios'

// 打包的设置 用户获取路径
import buildConfig from '../config/index'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$env = process.env.NODE_ENV

Vue.prototype.$assetsPublicPath = process.env.NODE_ENV === 'development' ? buildConfig.dev.assetsPublicPath : buildConfig.build.assetsPublicPath

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  created () {
    // 处理路由 得到每一级的路由设置
    this.getAllTagFromRoutes()
  },
  mounted () {
    // DB -> store 加载用户名
    this.$store.commit('d2adminUsernameLoad')
    // DB -> store 加载版本更新弹窗的设置
    this.$store.commit('d2adminUpdateNotifyLoad')
    // DB -> store 加载主题
    this.$store.commit('d2adminThemeLoad')
    // DB -> store 数据库加载上次退出时的多页列表
    this.$store.commit('d2adminPageOpenedListLoad')
    // D2Admin 开发环境检查更新
    util.checkUpdate(this)
    // 检测退出全屏
    if (screenfull.enabled) {
      screenfull.on('change', () => {
        if (!screenfull.isFullscreen) {
          this.$store.commit('d2adminFullScreenSet', false)
        }
      })
    }
    // 完整版
    console.log('D2Admin 完整版项目地址：https://github.com/d2-projects/d2-admin')
  },
  methods: {
    /**
     * 处理路由 得到每一级的路由设置
     */
    getAllTagFromRoutes () {
      // 所有加载在主框架内的页面
      const tagPool = []
      const push = function (routes) {
        routes.forEach(route => {
          if (route.children) {
            push(route.children)
          } else {
            const { meta, name, path } = route
            tagPool.push({ meta, name, path })
          }
        })
      }
      push(frameInRoutes)
      this.$store.commit('d2adminTagPoolSet', tagPool)
    }
  }
})
