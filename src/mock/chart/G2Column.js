import Mock from 'mockjs'

Mock.mock('/api/chart/G2Column', 'post', ({body, type, url}) => {
  const _body = JSON.parse(body)
  switch (_body.code) {
    case 1:
      return {
        code: 0,
        msg: '请求成功',
        data: [
          { year: '1951', sales: 38 },
          { year: '1952', sales: 52 },
          { year: '1956', sales: 61 },
          { year: '1957', sales: 145 },
          { year: '1958', sales: 48 },
          { year: '1959', sales: 38 }
        ]
      }
    default:
      return {}
  }
})
