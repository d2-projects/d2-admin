export default ({ request, faker, mock, tools }) => ({
  /**
   * @description 请求项目中的文件
   * @param {String} url 文件地址
   */
  FILE_GET (url = '') {
    return request({
      baseURL: process.env.BASE_URL,
      url,
      method: 'get'
    })
  }
})
