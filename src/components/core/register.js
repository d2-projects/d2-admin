import Vue from 'vue'

Vue.component('Container', resolve => { require(['@/components/core/Container'], resolve) })
Vue.component('CountUp', resolve => { require(['@/components/core/CountUp'], resolve) })
Vue.component('Highlight', resolve => { require(['@/components/core/Highlight'], resolve) })
Vue.component('Icon', resolve => { require(['@/components/core/Icon'], resolve) })
Vue.component('IconSelect', resolve => { require(['@/components/core/IconSelect/index.vue'], resolve) })
Vue.component('IconSvg', resolve => { require(['@/components/core/IconSvg/index.vue'], resolve) })
Vue.component('Markdown', resolve => { require(['@/components/core/Markdown'], resolve) })
Vue.component('QuillEditor', resolve => { require(['@/components/core/QuillEditor'], resolve) })
Vue.component('SimpleMDE', resolve => { require(['@/components/core/SimpleMDE'], resolve) })
