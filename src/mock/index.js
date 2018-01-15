import Mock from 'mockjs'

Mock.mock('/abc', {
  'list|1-10': [{
    'id|+1': 1,
    'email': '@EMAIL'
  }]
})
