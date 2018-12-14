import util from '@/libs/util.js'

export default {
  namespaced: true,
  mutations: {
    /**
     * @description 显示版本信息
     * @param {Object} state vuex state
     */
    versionShow () {
      util.log.capsule('D2Admin', `v${process.env.VUE_APP_VERSION}`)
      console.log('Github https://github.com/d2-projects/d2-admin')
      console.log('Doc    https://doc.d2admin.fairyever.com/zh/')
      console.log('请不要吝啬您的 star，谢谢 ~')
    }
  }
}
