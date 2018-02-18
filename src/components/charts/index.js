import Vue from 'vue'

Vue.component('G2LineBase', resolve => { require(['@/components/charts/G2/components/Line/base.vue'], resolve) })
Vue.component('G2LineStep', resolve => { require(['@/components/charts/G2/components/Line/step.vue'], resolve) })
