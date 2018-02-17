import Mock from 'mockjs'

const r = (add = 0) => {
  return Math.round(Math.random() * 100) + add
}

Mock.mock('/api/chart/G2Line', 'post', ({body, type, url}) => {
  const _body = JSON.parse(body)
  switch (_body.code) {
    case 1:
      let lastValue = 0
      const temp = [
        { year: '1991', value: 0 },
        { year: '1992', value: 0 },
        { year: '1993', value: 0 },
        { year: '1994', value: 0 },
        { year: '1995', value: 0 },
        { year: '1996', value: 0 },
        { year: '1997', value: 0 },
        { year: '1998', value: 0 },
        { year: '1999', value: 0 }
      ]
      const data = temp.map(e => {
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
    default:
      return {}
  }
})
