import Mock from 'mockjs'

const mockData = Mock.mock({
  'data|3-6': [{
    'id|+1': 1,
    'name': '@CNAME',
    'delFlag|1': [0, 1],
    'creatDate': '@DATE',
    'address': '@CITY',
    'zip': '@ZIP'
  }]
})

export default {
  data: mockData.data,
  columns: Object.keys(mockData.data[0]).map(e => ({
    label: e,
    prop: e
  }))
}
