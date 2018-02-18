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

Mock.mock('/api/chart/G2Line', 'post', ({body, type, url}) => {
  const _body = JSON.parse(body)
  switch (_body.type) {
    case 'base': {
      let last = 0
      const year = ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999']
      const data = year.map(e => ({
        year: e,
        value: 0
      })).map(e => {
        e.value = last + r()
        last = e.value
        return e
      }).map(e => ({
        x: e.year,
        y: e.value
      }))
      last = 0
      return returnMaker(data)
    }
    case 'step': {
      const month = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      const data = month.map(e => ({
        month: e,
        value: 0
      })).map(e => {
        e.value = r()
        return e
      }).map(e => ({
        x: e.month,
        y: e.value
      }))
      return returnMaker(data)
    }
    default:
      return {}
  }
})
