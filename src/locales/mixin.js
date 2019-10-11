export default {
  methods: {
    onChangeLocale (command) {
      this.$i18n.locale = command
      let message = `当前语言：${this.$t('_name')} [ ${this.$i18n.locale} ]`
      if (['TRAVIS', 'NETLIFY'].includes(process.env.VUE_APP_BUILD_MODE)) {
        message = [
          `当前语言：${this.$t('_name')} [ ${this.$i18n.locale} ]`,
          `仅提供切换功能，没有配置具体的语言数据 `,
          `文档参考：<a class="el-link el-link--primary is-underline" target="_blank" href="https://fairyever.com/d2-admin/doc/zh/sys-locales/">《国际化 | D2Admin》</a>`
        ].join('<br/>')
      }
      this.$notify({
        title: '语言变更',
        dangerouslyUseHTMLString: true,
        message
      })
    }
  }
}
