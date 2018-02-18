import Mock from 'mockjs'
import * as fn from './_fn'

Mock.mock('/api/chart/G2Pie', 'post', ({body, type, url}) => {
  const _body = JSON.parse(body)
  switch (_body.type) {
    // 基础折线图
    case 'base': {
      return fn.returnMaker(['中国', '日本', '美国', '法国', '英国'].map(e => ({item: e, count: fn.r()})))
    }
    default:
      return {}
  }
})
