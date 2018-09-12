// Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// flex 布局库
import 'flex.css'
// store
import store from '@/store/index'
// 组件
import '@/components'
// svg 图标
import '@/assets/svg-icons'
// 功能插件
import pluginError from '@/plugin/error'
import pluginExport from '@/plugin/export'
import pluginImport from '@/plugin/import'
import pluginLog from '@/plugin/log'
import pluginOpen from '@/plugin/open'

export default {
  async install (Vue, options) {
    // 获得用户设置的全局尺寸
    const size = await store.dispatch('d2admin/db/get', {
      dbName: 'sys',
      path: 'size.value',
      defaultValue: '',
      user: true
    })
    // Element
    Vue.use(ElementUI, {
      size
    })
    // 插件
    Vue.use(pluginError)
    Vue.use(pluginExport)
    Vue.use(pluginImport)
    Vue.use(pluginLog)
    Vue.use(pluginOpen)
    // 设置为 false 以阻止 vue 在启动时生成生产提示。
    // https://cn.vuejs.org/v2/api/#productionTip
    Vue.config.productionTip = false
    // 当前环境
    Vue.prototype.$env = process.env.NODE_ENV
    // 当前的 baseUrl
    // 简化代码中 process.env.BASE_URL 取值
    Vue.prototype.$baseUrl = process.env.BASE_URL
  }
}
