import Mock from 'mockjs'

Mock.mock('/api/demo/business/table/1', ({ body }) => {
  // 这是通过 post 传来的参数
  body = JSON.parse(body)
  const { page } = body
  page.total = 1000
  return Mock.mock(
    {
      page,
      'list|20': [{
        'key': '@guid',
        'value|1': [10, 100, 200, 500],
        'type': '@boolean',
        'admin': '@cname',
        'adminNote': '@cparagraph(0.5)',
        'dateTimeCreat': '@datetime',
        'used': '@boolean',
        'dateTimeUse': '@datetime'
      }]
    }
  )
})
