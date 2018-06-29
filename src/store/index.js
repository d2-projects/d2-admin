import Vue from 'vue'
import Vuex from 'vuex'

import d2admin from './modules/d2admin'

import menu from './modules/menu'
import fullScreen from './modules/fullScreen'
import theme from './modules/theme'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    d2admin,
    menu,
    fullScreen,
    theme
  }
})
