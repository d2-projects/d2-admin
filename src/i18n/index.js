import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'CN',
  messages: {
    en: {
      message: {
        hello: 'hello world'
      }
    },
    cn: {
      message: {
        hello: '你好、世界'
      }
    }
  }
})
