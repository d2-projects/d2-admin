export default ({ request }) => ({
  /**
   * @description 登录
   * @param {Object} data 登录携带的信息
   */
  SYS_USER_LOGIN (data = {}) {
    return request({
      url: '/login',
      method: 'post',
      data
    })
  }
})
