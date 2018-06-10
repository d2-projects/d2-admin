import Vue from 'vue'

Vue.component('d2-chart-area-base', () => import('@/components/charts/G2/components/Area/base.vue'))

Vue.component('d2-chart-bar-base', () => import('@/components/charts/G2/components/Bar/base.vue'))

Vue.component('d2-chart-column-base', () => import('@/components/charts/G2/components/Column/base.vue'))

Vue.component('d2-chart-line-base', () => import('@/components/charts/G2/components/Line/base.vue'))
Vue.component('d2-chart-line-step', () => import('@/components/charts/G2/components/Line/step.vue'))

Vue.component('d2-chart-nightingale-rose-base', () => import('@/components/charts/G2/components/NightingaleRose/base.vue'))

Vue.component('d2-chart-pie-base', () => import('@/components/charts/G2/components/Pie/base.vue'))

Vue.component('d2-chart-radar-base', () => import('@/components/charts/G2/components/Radar/base.vue'))
