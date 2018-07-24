import Vue from 'vue'

import { GridLayout, GridItem } from 'vue-grid-layout'
import SplitPane from 'vue-splitpane'

import d2Container from '@/components/d2-container'
import d2LinkBtn from '@/components/d2-link-btn'

Vue.component('d2-grid-layout', GridLayout)
Vue.component('d2-grid-item', GridItem)
Vue.component('SplitPane', SplitPane)

Vue.component('d2-container', d2Container)
Vue.component('d2-link-btn', d2LinkBtn)
Vue.component('d2-page-cover', () => import('@/components/d2-page-cover'))
Vue.component('d2-count-up', () => import('@/components/d2-count-up'))
Vue.component('d2-highlight', () => import('@/components/d2-highlight'))
Vue.component('d2-icon', () => import('@/components/d2-icon'))
Vue.component('d2-icon-select', () => import('@/components/d2-icon-select/index.vue'))
Vue.component('d2-icon-svg', () => import('@/components/d2-icon-svg/index.vue'))
Vue.component('d2-markdown', () => import('@/components/d2-markdown'))
Vue.component('d2-mde', () => import('@/components/d2-mde'))
Vue.component('d2-quill', () => import('@/components/d2-quill'))
