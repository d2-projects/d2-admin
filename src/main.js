// polyfill
import 'babel-polyfill'
// Vue
import Vue from 'vue'
import App from './App'
// store
import store from '@/store/index'
// 模拟数据
import '@/mock'
// 多国语
import i18n from './i18n'
// 核心插件
import d2Admin from '@/plugin/d2admin'
// 权限
import permission from '@/directive/permission'

// [ 可选插件组件 ]D2-Crud
import D2Crud from '@d2-projects/d2-crud'
// [ 可选插件组件 ] 图表
import VCharts from 'v-charts'
// [ 可选插件组件 ] 右键菜单
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'
// [ 可选插件组件 ] JSON 树状视图
import vueJsonTreeView from 'vue-json-tree-view'
// [ 可选插件组件 ] 网格布局组件
import { GridLayout, GridItem } from 'vue-grid-layout'
// [ 可选插件组件 ] 区域划分组件
import SplitPane from 'vue-splitpane'

// 路由设置
import router from './router'

// 核心插件
Vue.use(d2Admin)

// 自定义权限验证指令
Vue.use(permission)

// 可选插件组件
Vue.use(D2Crud)
Vue.use(VCharts)
Vue.use(contentmenu)
Vue.use(vueJsonTreeView)
Vue.component('d2-grid-layout', GridLayout)
Vue.component('d2-grid-item', GridItem)
Vue.component('SplitPane', SplitPane)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  mounted () {
    // 展示系统信息
    this.$store.commit('d2admin/releases/versionShow')
    // 检查最新版本
    this.$store.dispatch('d2admin/releases/checkUpdate')
    // 获取并记录用户 UA
    this.$store.commit('d2admin/ua/get')
    // 初始化全屏监听
    this.$store.commit('d2admin/fullscreen/listen')
  }
}).$mount('#app')
