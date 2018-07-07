// polyfill
import 'babel-polyfill'

// Vue
import Vue from 'vue'
import App from './App'

// 多国语
import i18n from './i18n'

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

// v-charts
import VCharts from 'v-charts'

// font-awesome
import '@/assets/library/font-awesome-4.7.0/css/font-awesome.min.css'

// simplemde css
import 'simplemde/dist/simplemde.min.css'

// svg图标
import '@/assets/icons/index'

// markdown主题
import 'github-markdown-css'

// 全屏控制
import screenfull from 'screenfull'

// 代码高亮主题
import '@/assets/library/highlight/styles/atom-one-light.css'

// 全局注册的组件
import '@/components'

// 异步请求库
import '@/plugin/axios'

// mock接口设置
import '@/mock/register'

// 右键菜单
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'

// 插件 导出文件
import pluginImport from '@/plugin/import'
// 插件 导出文件
import pluginExport from '@/plugin/export'
// 插件 log简化
import pluginLog from '@/plugin/log'
// 插件 打开页面
import pluginOpen from '@/plugin/open'
// 插件 支持百万级数据的表格
import bigdataTable from '@/plugin/vue-bigdata-table'
// 插件 json 展示
import vueJsonTreeView from 'vue-json-tree-view'

// 打包的设置 用户获取路径
import buildConfig from '../config/index'

Vue.use(ElementUI)
Vue.use(VCharts)
Vue.use(contentmenu)

Vue.use(pluginImport)
Vue.use(pluginExport)
Vue.use(pluginLog)
Vue.use(pluginOpen)
Vue.use(bigdataTable)
Vue.use(vueJsonTreeView)

Vue.config.productionTip = false

Vue.prototype.$env = process.env.NODE_ENV

Vue.prototype.$assetsPublicPath = process.env.NODE_ENV === 'development' ? buildConfig.dev.assetsPublicPath : buildConfig.build.assetsPublicPath

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
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
