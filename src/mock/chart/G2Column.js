import Mock from 'mockjs'
import * as fn from './_fn'

Mock.mock('/api/chart/G2Column', 'post', ({body, type, url}) => {
  const _body = JSON.parse(body)
  switch (_body.type) {
    // 基础折线图
    case 'base': {
      return fn.returnMaker(['3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'].map(x => ({x, y: fn.r()})))
    }
    default:
      return {}
  }
})
