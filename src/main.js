import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import 'flex.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VCharts from 'v-charts'
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'
import vueJsonTreeView from 'vue-json-tree-view'
import i18n from './i18n'
import store from '@/store/index'
import '@/assets/svg-icons'
import '@/components'
import '@/mock'
import '@/plugin/axios'
import pluginLog from '@/plugin/log'
import pluginOpen from '@/plugin/open'
import pluginD2Admin from '@/plugin/d2admin'
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
Vue.use(pluginOpen)
Vue.use(pluginD2Admin)
Vue.use(pluginError)
Vue.use(pluginImport)
Vue.use(pluginExport)
Vue.use(vueJsonTreeView)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  created () {
    // 处理路由 得到每一级的路由设置
    this.$store.commit('d2admin/page/init', frameInRoutes)
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
    this.$store.commit('d2admin/fullscreen/listen')
  },
  watch: {
    // 监听路由 控制侧边栏显示
    '$route.matched' (val) {
      const _side = menuAside.filter(menu => menu.path === val[0].path)
      this.$store.commit('d2admin/menu/asideSet', _side.length > 0 ? _side[0].children : [])
    }
  }
}).$mount('#app')
