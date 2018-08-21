import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import 'flex.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VCharts from 'v-charts'
import screenfull from 'screenfull'
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'
import vueJsonTreeView from 'vue-json-tree-view'
import i18n from './i18n'
import util from '@/libs/util.js'
import store from '@/store/index'
import '@/assets/svg-icons'
import '@/components'
import '@/mock'
import '@/plugin/axios'
import pluginLog from '@/plugin/log'
import pluginError from '@/plugin/error'
import pluginImport from '@/plugin/import'
import pluginExport from '@/plugin/export'

// 菜单和路由设置
import router from './router'
import { menuHeader, menuAside } from '@/menu'
import { frameInRoutes } from '@/router/routes'

Vue.use(ElementUI)
Vue.use(VCharts)
Vue.use(contentmenu)
Vue.use(pluginLog)
Vue.use(pluginError)
Vue.use(pluginImport)
Vue.use(pluginExport)
Vue.use(vueJsonTreeView)

Vue.config.productionTip = false

Vue.prototype.$env = process.env.NODE_ENV
Vue.prototype.$baseUrl = process.env.BASE_URL

Vue.prototype.$open = util.open

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  created () {
    // 处理路由 得到每一级的路由设置
    this.getAllPageFromRoutes()
    // 设置顶栏菜单
    this.$store.commit('d2admin/menu/headerSet', menuHeader)
  },
  mounted () {
    // 展示系统信息
    this.$store.commit('d2admin/releases/versionShow')
    // 检查最新版本
    this.$store.dispatch('d2admin/releases/checkUpdate')
    // 用户登陆后从数据库加载一系列的设置
    this.$store.commit('d2admin/account/load')
    // 获取并记录用户 UA
    this.$store.commit('d2admin/ua/get')
    // 初始化全屏监听
    this.fullscreenListenerInit()
  },
  watch: {
    // 监听路由 控制侧边栏显示
    '$route.matched' (val) {
      const _side = menuAside.filter(menu => menu.path === val[0].path)
      this.$store.commit('d2admin/menu/asideSet', _side.length > 0 ? _side[0].children : [])
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
            this.$store.commit('d2admin/fullscreen/set', false)
          }
        })
      }
    },
    /**
     * 处理路由 得到所有的页面
     */
    getAllPageFromRoutes () {
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
      this.$store.commit('d2admin/page/poolSet', pool)
    }
  }
}).$mount('#app')
