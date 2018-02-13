import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'cn',
  messages: {
    'cn': require('./lang/cn/').default,
    'ja': require('./lang/ja/').default,
    'en': require('./lang/en/').default
  }
})
