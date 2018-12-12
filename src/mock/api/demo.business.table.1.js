export default {
  path: RegExp('/api/demo/business/table/1'),
  method: 'post',
  handle ({ method, url, params, body, Mock, Random, Generator, Repeat }) {
    const { page } = body
    page.total = 1000
    return Mock.mock(
      {
        code: 0,
        msg: '获取数据成功',
        data: {
          page,
          'list|20': [
            {
              'key': '@guid',
              'value|1': [10, 100, 200, 500],
              'type': '@boolean',
              'admin': '@cname',
              'adminNote': '@cparagraph(0.5)',
              'dateTimeCreat': '@datetime',
              'used': '@boolean',
              'dateTimeUse': '@datetime'
            }
          ]
        }
      }
    )
  }
}
