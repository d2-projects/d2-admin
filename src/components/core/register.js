import Vue from 'vue'

import d2Container from '@/components/core/d2-container'
import d2MultiplePageControl from '@/components/core/d2-multiple-page-control'

Vue.component('d2-container', d2Container)
Vue.component('d2-multiple-page-control', d2MultiplePageControl)

Vue.component('d2-icon', () => import('@/components/core/d2-icon'))
Vue.component('d2-theme-list', () => import('@/components/core/d2-theme-list'))
Vue.component('d2-page-cover', () => import('@/components/core/d2-page-cover'))
