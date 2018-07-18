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
import { menusAside, menusHeader } from '@/menu'
import '@/assets/library/font-awesome-4.7.0/css/font-awesome.min.css'
import '@/assets/library/highlight/styles/atom-one-light.css'
import '@/assets/svg-icons'
import '@/components'
import '@/plugin/axios'
import '@/mock/register'
import pluginImport from '@/plugin/import'
import pluginExport from '@/plugin/export'
import pluginOpen from '@/plugin/open'
import router from './router'

Vue.use(ElementUI)
Vue.use(VCharts)
Vue.use(contentmenu)
Vue.use(pluginImport)
Vue.use(pluginExport)
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
    // 设置顶栏菜单
    this.$store.commit('d2adminMenusHeaderSet', menusHeader)
  },
  mounted () {
    // D2Admin 开发环境检查更新
    util.checkUpdate(this)
    // 获取并记录用户 UA 同时对危险环境做出判断
    util.uaGet(this)
    // 展示系统信息
    util.showInfo()
    // 用户登陆后从数据库加载一系列的设置
    this.$store.commit('d2adminLoginSuccessLoad')
    // 初始化全屏监听
    this.fullscreenListenerInit()
  },
  watch: {
    // 监听路由 控制侧边栏显示
    '$route.matched' (val) {
      const _side = menusAside.filter(menu => menu.path === val[0].path)
      this.$store.commit('d2adminMenusAsideSet', _side.length > 0 ? _side[0].children : [])
    }
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
