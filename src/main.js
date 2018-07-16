import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'simplemde/dist/simplemde.min.css'
import 'github-markdown-css'
import VCharts from 'v-charts'
import screenfull from 'screenfull'
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'
import vueJsonTreeView from 'vue-json-tree-view'
import i18n from './i18n'
import util from '@/libs/util'
import store from '@/store/index'
import { frameInRoutes } from '@/router/routes'
import '@/assets/library/font-awesome-4.7.0/css/font-awesome.min.css'
import '@/assets/icons/index'
import '@/assets/library/highlight/styles/atom-one-light.css'
import '@/components'
import '@/plugin/axios'
import '@/mock/register'
import pluginImport from '@/plugin/import'
import pluginExport from '@/plugin/export'
import pluginLog from '@/plugin/log'
import pluginOpen from '@/plugin/open'
import router from './router'

Vue.use(ElementUI)
Vue.use(VCharts)
Vue.use(contentmenu)
Vue.use(pluginImport)
Vue.use(pluginExport)
Vue.use(pluginLog)
Vue.use(pluginOpen)
Vue.use(vueJsonTreeView)

Vue.config.productionTip = false

Vue.prototype.$env = process.env.NODE_ENV
Vue.prototype.$baseUrl = process.env.BASE_URL

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  created () {
    // 处理路由 得到每一级的路由设置
    this.getAllTagFromRoutes()
  },
  mounted () {
    util.showInfo()
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
    // 初始化全屏监听
    this.fullscreenListenerInit()
  },
  methods: {
    /**
     * 初始化全屏监听
     */
    fullscreenListenerInit () {
      if (screenfull.enabled) {
        screenfull.on('change', () => {
          if (!screenfull.isFullscreen) {
            this.$store.commit('d2adminFullScreenSet', false)
          }
        })
      }
    },
    /**
     * 处理路由 得到每一级的路由设置
     */
    getAllTagFromRoutes () {
      // 所有加载在主框架内的页面
      const pool = []
      const push = function (routes) {
        routes.forEach(route => {
          if (route.children) {
            push(route.children)
          } else {
            const { meta, name, path } = route
            pool.push({ meta, name, path })
          }
        })
      }
      push(frameInRoutes)
      this.$store.commit('d2adminTagPoolSet', pool)
    }
  }
}).$mount('#app')
