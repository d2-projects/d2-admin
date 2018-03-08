import Vue from 'vue'
import Vuex from 'vuex'

import menu from './modules/menu'
import fullScreen from './modules/fullScreen'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu,
    fullScreen
  }
})
