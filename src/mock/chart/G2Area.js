import Mock from 'mockjs'
import * as fn from './_fn'

Mock.mock('/api/chart/G2Area', 'post', ({body, type, url}) => {
  const _body = JSON.parse(body)
  switch (_body.type) {
    // 基础折线图
    case 'base': {
      let last = 0
      const data = ['3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'].map(x => ({
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
    default:
      return {}
  }
})
