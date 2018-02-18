import Mock from 'mockjs'
import * as fn from './_publicFunction'

Mock.mock('/api/chart/G2Line', 'post', ({body, type, url}) => {
  const _body = JSON.parse(body)
  switch (_body.type) {
    // 基础折线图
    case 'base': {
      let last = 0
      const year = ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999']
      const data = year.map(e => ({
        year: e,
        value: 0
      })).map(e => {
        e.value = last + fn.r()
        last = e.value
        return e
      }).map(e => ({
        x: e.year,
        y: e.value
      }))
      last = 0
      return fn.returnMaker(data)
    }
    // 阶梯折线图
    case 'step': {
      const month = ['3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月']
      const data = month.map(e => ({
        month: e,
        value: fn.r()
      })).map(e => ({
        x: e.month,
        y: e.value
      }))
      return fn.returnMaker(data)
    }
    default:
      return {}
  }
})
