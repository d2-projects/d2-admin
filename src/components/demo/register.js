import Vue from 'vue'
import {GridLayout, GridItem} from 'vue-grid-layout'
import SplitPane from 'vue-splitpane'

Vue.component('GridLayout', GridLayout)
Vue.component('GridItem', GridItem)
Vue.component('SplitPane', SplitPane)
Vue.component('GithubLink', resolve => { require(['@/components/demo/GithubLink'], resolve) })
Vue.component('GithubLinkButton', resolve => { require(['@/components/demo/GithubLinkButton'], resolve) })
Vue.component('PageHeader', resolve => { require(['@/components/demo/PageHeader'], resolve) })
