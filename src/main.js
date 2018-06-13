import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './i18n'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// font-awesome
import '@/assets/library/font-awesome-4.7.0/css/font-awesome.min.css'

// simplemde css
import 'simplemde/dist/simplemde.min.css'

// svg图标
import '@/assets/icons/index.js'

// markdown主题
import 'github-markdown-css'

// 代码高亮主题
import '@/assets/library/highlight/styles/atom-one-light.css'

// 全局注册的组件
import '@/components'

// 异步请求库
import '@/plugin/axios'

// mock接口设置
import '@/mock/register'

// vuex
import store from '@/store/index.js'

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

Vue.use(ElementUI)

Vue.use(pluginImport)
Vue.use(pluginExport)
Vue.use(pluginLog)
Vue.use(pluginOpen)
Vue.use(bigdataTable)

Vue.config.productionTip = false

Vue.prototype.$env = process.env.NODE_ENV === 'development'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
  router,
  template: '<App/>',
  components: { App }
})
