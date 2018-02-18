import Mock from 'mockjs'

const r = (add = 0) => {
  return Math.round(Math.random() * 100) + add
}

Mock.mock('/api/chart/G2Line', 'post', ({body, type, url}) => {
  const _body = JSON.parse(body)
  switch (_body.code) {
    case 1: {
      let lastValue = 0
      const year = ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999']
      const data = year.map(y => ({
        year: y,
        value: 0
      })).map(e => {
        e.value = lastValue + r()
        lastValue = e.value
        return e
      })
      lastValue = 0
      return {
        code: 0,
        msg: '请求成功',
        data
      }
    }
    case 2: {
      const month = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      const data = month.map(y => ({
        month: y,
        value: 0
      })).map(e => {
        e.value = r()
        return e
      })
      return {
        code: 0,
        msg: '请求成功',
        data
      }
    }
    default:
      return {}
  }
})
