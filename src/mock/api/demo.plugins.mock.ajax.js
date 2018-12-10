import Mock from 'mockjs'

Mock.mock('/api/demo/plugins/mock/ajax', {
  code: 0,
  msg: '获取数据成功',
  data: {
    'list|4-10': [
      {
        'id|+1': 1,
        'name': '@CNAME',
        'star|1-5': '★',
        'delFlag|1': [0, 1],
        'creatDate': '@DATE',
        'address': '@CITY',
        'zip': '@ZIP'
      }
    ]
  }
})
