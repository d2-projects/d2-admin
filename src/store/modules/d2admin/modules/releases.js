import util from '@/libs/util.js'

export default {
  namespaced: true,
  mutations: {
    /**
     * @description 显示版本信息
     * @param {Object} state state
     */
    versionShow () {
      util.log.capsule('D2Admin', `v${process.env.VUE_APP_VERSION}`)
      console.log('D2 Admin  https://github.com/d2-projects/d2-admin')
      console.log('D2 Crud   https://github.com/d2-projects/d2-crud')
      console.log('Document  https://d2.pub/zh/doc/d2-admin')
      console.log('请不要吝啬您的 star，谢谢 ~')
    }
  }
}
