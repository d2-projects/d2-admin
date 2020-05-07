export default ({ request }) => ({
  /**
   * @description https://d2.pub/d2-admin/preview/#/demo/business/issues/142
   * @description 列表
   */
  DEMO_BUSINESS_ISSUE_142_LIST () {
    return request({
      url: '/demo/business/issues/142/fetch',
      method: 'get'
    })
  },
  /**
   * @description https://d2.pub/d2-admin/preview/#/demo/business/issues/142
   * @description 详情
   */
  DEMO_BUSINESS_ISSUE_142_DETAIL ({ id } = {}) {
    return request({
      url: '/demo/business/issues/142/detail',
      method: 'get',
      params: {
        id
      }
    })
  },
  /**
   * @description https://d2.pub/d2-admin/preview/#/demo/business/table/1
   * @description 列表
   */
  DEMO_BUSINESS_TABLE_1_LIST () {
    return request({
      url: '/demo/business/table/1/fetch',
      method: 'get'
    })
  },
  /**
   * @description 错误日志示例 请求一个不存在的地址
   */
  DEMO_LOG_AJAX () {
    return request({
      url: '/invalid-url',
      method: 'get'
    })
  }
})
