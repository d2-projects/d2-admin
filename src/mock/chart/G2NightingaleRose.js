import Mock from 'mockjs'
import * as fn from './_fn'

Mock.mock('/api/chart/G2NightingaleRose', 'post', ({body, type, url}) => {
  const _body = JSON.parse(body)
  switch (_body.type) {
    // 基础南丁格尔玫瑰图
    case 'base': {
      return fn.returnMaker(['中国', '日本', '美国', '法国', '英国'].map(e => ({item: e, count: 100 + fn.r()})))
    }
    default:
      return {}
  }
})
