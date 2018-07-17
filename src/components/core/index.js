import Vue from 'vue'

import { GridLayout, GridItem } from 'vue-grid-layout'
import SplitPane from 'vue-splitpane'

import d2Container from '@/components/core/d2-container'
import d2MultiplePageControl from '@/components/core/d2-multiple-page-control'

Vue.component('d2-grid-layout', GridLayout)
Vue.component('d2-grid-item', GridItem)
Vue.component('SplitPane', SplitPane)

Vue.component('d2-container', d2Container)
Vue.component('d2-multiple-page-control', d2MultiplePageControl)
Vue.component('d2-count-up', () => import('@/components/core/d2-count-up'))
Vue.component('d2-highlight', () => import('@/components/core/d2-highlight'))
Vue.component('d2-icon', () => import('@/components/core/d2-icon'))
Vue.component('d2-icon-select', () => import('@/components/core/d2-icon-select/index.vue'))
Vue.component('d2-icon-svg', () => import('@/components/core/d2-icon-svg/index.vue'))
Vue.component('d2-markdown', () => import('@/components/core/d2-markdown'))
Vue.component('d2-mde', () => import('@/components/core/d2-mde'))
Vue.component('d2-quill', () => import('@/components/core/d2-quill'))
Vue.component('d2-theme-list', () => import('@/components/core/d2-theme-list'))
