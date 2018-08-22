import Mock from 'mockjs'

Mock.mock('/api/demo/plugins/mock/ajax', {
  'list|4-10': [{
    'id|+1': 1,
    'name': '@CNAME',
    'star|1-5': '★',
    'delFlag|1': [0, 1],
    'creatDate': '@DATE',
    'address': '@CITY',
    'zip': '@ZIP'
  }]
})
