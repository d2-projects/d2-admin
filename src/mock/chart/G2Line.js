import Mock from 'mockjs'
import * as fn from './_publicFunction'

Mock.mock('/api/chart/G2Line', 'post', ({body, type, url}) => {
  const _body = JSON.parse(body)
  switch (_body.type) {
    // 基础折线图
    case 'base': {
      let last = 0
      const data = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'].map(x => ({
        x,
        y: 0
      })).map(e => {
        e.y = last + fn.r()
        last = e.y
        return e
      })
      last = 0
      return fn.returnMaker(data)
    }
    // 阶梯折线图
    case 'step': {
      return fn.returnMaker(['3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'].map(x => ({x, y: fn.r()})))
    }
    default:
      return {}
  }
})
