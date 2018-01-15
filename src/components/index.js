import Vue from 'vue'

import {GridLayout, GridItem} from 'vue-grid-layout'

import SplitPane from 'vue-splitpane'

// 名称：网格布局组件
// 用途：实现网格布局
Vue.component('GridLayout', GridLayout)
Vue.component('GridItem', GridItem)

// 名称：可调节的布局切分组件
// 用途：像codepen类似的布局
Vue.component('SplitPane', SplitPane)

// 名称：页面容器
// 用途：每个页面的最外层元素，统一样式
Vue.component('Container', resolve => {
  require(['@/components/core/Container/index.vue'], resolve)
})

// 名称：markdown加载器
// 用途：加载一个markdown文件
Vue.component('Markdown', resolve => {
  require(['@/components/core/Markdown/index.vue'], resolve)
})

// 名称：github 链接
// 用途：本质上这就是一个 github 的链接
Vue.component('GithubLink', resolve => {
  require(['@/components/demo/GithubLink/index.vue'], resolve)
})

// 名称：SimpleMDE markdown 编辑器
// 用途：SimpleMDE markdown 编辑器
Vue.component('SimpleMDE', resolve => {
  require(['@/components/core/SimpleMDE/index.vue'], resolve)
})

// 名称：数字动画
// 用途：数字动画
Vue.component('CountUp', resolve => {
  require(['@/components/core/CountUp/index.vue'], resolve)
})

// 名称：代码高亮
// 用途：代码高亮
Vue.component('Highlight', resolve => {
  require(['@/components/core/Highlight/index.vue'], resolve)
})

// 名称：页面Header
// 用途：页面Header
Vue.component('PageHeader', resolve => {
  require(['@/components/demo/PageHeader/index.vue'], resolve)
})
