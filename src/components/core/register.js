import Vue from 'vue'

Vue.component('d2-container', resolve => { require(['@/components/core/d2-container'], resolve) })
Vue.component('d2-count-up', resolve => { require(['@/components/core/d2-count-up'], resolve) })
Vue.component('d2-highlight', resolve => { require(['@/components/core/d2-highlight'], resolve) })
Vue.component('d2-icon', resolve => { require(['@/components/core/d2-icon'], resolve) })
Vue.component('d2-icon-select', resolve => { require(['@/components/core/d2-icon-select/index.vue'], resolve) })
Vue.component('d2-icon-svg', resolve => { require(['@/components/core/d2-icon-svg/index.vue'], resolve) })
Vue.component('d2-markdown', resolve => { require(['@/components/core/d2-markdown'], resolve) })
Vue.component('d2-quill', resolve => { require(['@/components/core/d2-quill'], resolve) })
Vue.component('d2-mde', resolve => { require(['@/components/core/d2-mde'], resolve) })
