import Mock from 'mockjs'

const mockData = Mock.mock({
  'data|3-6': [{
    'id|+1': 1,
    'name': '@CNAME',
    'creatDate': '@DATE',
    'address': '@CITY',
    'zip': '@ZIP'
  }]
})

export default {
  data: mockData.data,
  columns: [
    {
      label: 'ID',
      prop: 'id'
    },
    {
      label: '名称',
      prop: 'name'
    },
    {
      label: '创建日期',
      prop: 'creatDate'
    },
    {
      label: '地址',
      prop: 'address'
    },
    {
      label: '邮编',
      prop: 'zip'
    }
  ]
}
