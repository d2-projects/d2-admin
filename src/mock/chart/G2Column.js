import Mock from 'mockjs'

const r = (add = 0) => {
  return Math.round(Math.random() * 100) + add
}

const returnMaker = (data = []) => {
  return {
    code: 0,
    msg: '请求成功',
    data
  }
}

Mock.mock('/api/chart/G2Column', 'post', ({body, type, url}) => {
  const _body = JSON.parse(body)
  switch (_body.type) {
    // 基础折线图
    case 'base': {
      const year = ['3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月']
      const data = year.map(e => ({
        year: e,
        value: r()
      })).map(e => ({
        x: e.year,
        y: e.value
      }))
      return returnMaker(data)
    }
    default:
      return {}
  }
})
