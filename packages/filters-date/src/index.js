import filters from './filters'

const vueFiltersDate = {
  install: function (Vue, options) {
    Object.keys(filters).forEach(name => {
      Vue.filter(name, filters[name])
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueFiltersDate)
}

export default vueFiltersDate
