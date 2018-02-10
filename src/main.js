import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// font-awesome
import '@/assets/library/font-awesome-4.7.0/css/font-awesome.min.css'

// simplemde css
import 'simplemde/dist/simplemde.min.css'

// markdown主题
import 'github-markdown-css'

// 代码高亮主题
import '@/assets/library/highlight/styles/atom-one-light.css'

// 全局注册的组件
import '@/components'

// 异步请求库
import '@/plugin/axios'

// mock接口设置
import '@/mock/index.js'

// vuex
import store from '@/store/index.js'

// 插件 log简化
import pluginLog from '@/plugin/log'
// 插件 导出文件
import pluginExport from '@/plugin/export'

Vue.use(ElementUI)

Vue.use(pluginLog)
Vue.use(pluginExport)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
