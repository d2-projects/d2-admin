import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'CN',
  messages: {
    'CN': require('./lang/cn/'),
    'JA': require('./lang/ja/'),
    'EN': require('./lang/en/')
  }
})
