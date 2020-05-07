export default ({ request }) => ({
  /**
   * @description 登录
   * @param {Object} data 登录携带的信息
   */
  COMPONENT_MARKDOWN_GET ({ url = '' } = {}) {
    return request({
      baseURL: process.env.BASE_URL,
      url,
      method: 'get'
    })
  }
})
