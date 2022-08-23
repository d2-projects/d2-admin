import Vue from 'vue'

import d2Container from './d2-container'
import d2ContainerFrame from './d2-container-frame'
import d2LinkBtn from './d2-link-btn'

// 注意 有些组件使用异步加载会有影响
Vue.component('d2-container', d2Container)
Vue.component('d2-container-frame', d2ContainerFrame)
Vue.component('d2-link-btn', d2LinkBtn)
Vue.component('d2-count-up', () => import('./d2-count-up'))
Vue.component('d2-highlight', () => import('./d2-highlight'))
Vue.component('d2-icon', () => import('./d2-icon'))
Vue.component('d2-icon-svg', () => import('./d2-icon-svg/index.vue'))
Vue.component('d2-icon-select', () => import('./d2-icon-select/index.vue'))
Vue.component('d2-icon-svg-select', () => import('./d2-icon-svg-select/index.vue'))
Vue.component('d2-markdown', () => import('./d2-markdown'))
Vue.component('d2-module-index-banner', () => import('./d2-module-index-banner'))
Vue.component('d2-module-index-menu', () => import('./d2-module-index-menu'))
Vue.component('d2-quill', () => import('./d2-quill'))
Vue.component('d2-scrollbar', () => import('./d2-scrollbar'))
Vue.component('d2-ueditor', () => import('./d2-ueditor'))
