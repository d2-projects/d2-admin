export default {
  state: {
    sideMenu: []
  },
  mutations: {
    setSideMenu (state, props) {
      state.sideMenu = props.sideMenu
    }
  }
}
