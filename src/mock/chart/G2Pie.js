import Mock from 'mockjs'

Mock.mock('/api/chart/G2Pie', 'post', ({body, type, url}) => {
  const _body = JSON.parse(body)
  switch (_body.code) {
    case 1:
      return {
        code: 0,
        msg: '请求成功',
        data: [
          { item: '分类1', count: 40 },
          { item: '分类2', count: 21 },
          { item: '分类3', count: 17 },
          { item: '分类4', count: 22 }
        ]
      }
    default:
      return {}
  }
})
