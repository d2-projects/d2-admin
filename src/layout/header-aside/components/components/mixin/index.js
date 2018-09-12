import { uniqueId } from 'lodash'

export default {
  methods: {
    handleMenuIndex (menu) {
      let index = ''
      if (menu.path) {
        if (/^https:\/\/|http:\/\//.test(menu.path)) {
          index = menu.path
        } else {
          index = menu.name
        }
      } else {
        index = uniqueId('d2-menu-empty-')
      }
      return index
    }
  }
}
