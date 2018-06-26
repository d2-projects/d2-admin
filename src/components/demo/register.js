import Vue from 'vue'

import d2DemoLinkBtn from '@/components/demo/d2-demo-link-btn'

Vue.component('d2-demo-link-btn', d2DemoLinkBtn)
Vue.component('d2-demo-page-header', () => import('@/components/demo/d2-demo-page-header'))
Vue.component('d2-demo-page-cover', () => import('@/components/demo/d2-demo-page-cover'))
