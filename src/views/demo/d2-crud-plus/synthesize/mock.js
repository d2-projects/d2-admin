import mockUtil from '../mock/base'

const options = {
  name: 'd2-crud-plus/synthesize',
  idGenerator: 0
}
const list = [
  {
    data: '我会懒加载',
    time: '2020-01-01 11:11:11',
    province: 'wh',
    amount: 100,
    hasChildren: true,
    loaded: false,
    children: [
      {
        data: '懒加载的子数据',
        province: ['sh', 'gz'],
        time: '2020-01-01 11:11:11',
        amount: 100
      },
      {
        data: '懒加载的子数据2',
        province: ['sh', 'sz'],
        time: '2020-01-01 11:11:11',
        amount: 100
      }
    ]
  },
  {
    data: 'data2',
    province: 'sh',
    time: '2020-01-01 11:11:11',
    amount: 100,
    children: [
      {
        id: 999,
        data: 'data1_1',
        time: '2020-01-01 11:11:11',
        province: ['gz', 'sz'], // 可以逗号分隔的字符串 'gz,sz'
        amount: 100,
        children: [
          {
            id: 1000,
            data: 'data1_1_1',
            time: '2020-01-01 11:11:11',
            province: ['sz', 'gz'], // 可以逗号分隔的字符串 'gz,sz'
            amount: 100
          }
        ]
      },
      {
        id: 888,
        data: 'data1_2',
        time: '2020-01-01 11:11:11',
        province: 'sh',
        amount: 100,
        children: [
          {
            id: 889,
            data: 'data1_2_1',
            time: '2020-01-01 11:11:11',
            province: 'gz',
            amount: 100
          }
        ]
      }
    ]
  },
  {
    data: 'data3',
    province: ['sh', 'gz'],
    time: '2020-01-01 11:11:11',
    amount: 100
  },
  {
    data: 'data4',
    province: ['sh', 'sz'],
    time: '2020-01-01 11:11:11',
    amount: 100
  }
]
options.list = list
const mock = mockUtil.buildMock(options)

mock.push({
  path: '/d2crudplus/synthesize/children',
  method: 'get',
  handle (req) {
    console.log('req', req)
    const id = parseInt(req.params.id)
    const item = mockUtil.findById(id, options.list)
    console.log('children:', item.children)
    return {
      code: 0,
      msg: 'success',
      data: item.children
    }
  }
})
export default mock
