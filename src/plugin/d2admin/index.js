// Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// flex 布局库
import 'flex.css'
// 组件
import '@/components'
// svg 图标
import '@/assets/svg-icons'
// 过滤器
import d2VueFiltersDate from '@d2-projects/vue-filters-date'
// 功能插件
import pluginError from '@/plugin/error'
import pluginExport from '@d2-projects/vue-table-export'
import pluginImport from '@d2-projects/vue-table-import'
import pluginLog from '@/plugin/log'
import pluginOpen from '@/plugin/open'

export default {
  async install (Vue, options) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示
    // https://cn.vuejs.org/v2/api/#productionTip
    Vue.config.productionTip = false
    // 当前环境
    Vue.prototype.$env = process.env.NODE_ENV
    // 当前的 baseUrl
    Vue.prototype.$baseUrl = process.env.BASE_URL
    // 当前版本
    Vue.prototype.$version = process.env.VUE_APP_VERSION
    // 构建时间
    Vue.prototype.$buildTime = process.env.VUE_APP_BUILD_TIME
    // Element
    Vue.use(ElementUI)
    // 过滤器 日期模块
    Vue.use(d2VueFiltersDate)
    // 插件
    Vue.use(pluginError)
    Vue.use(pluginExport)
    Vue.use(pluginImport)
    Vue.use(pluginLog)
    Vue.use(pluginOpen)
  }
}
