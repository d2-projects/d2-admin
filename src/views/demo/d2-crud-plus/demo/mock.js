import mockUtil from '../mock/base'
const options = {
  name: 'd2crudplus/test',
  idGenerator: 0
}
const list = [
  {
    date: '2016-05-02',
    status: '0',
    address: 'sz'
  },
  {
    date: '2016-05-04',
    status: '1',
    address: 'sh,sz'
  },
  {
    date: 2232433534511,
    status: '1',
    address: 'gz'
  },
  {
    date: '2016-05-03',
    status: '2',
    address: 'wh,gz'
  }
]
const openStatus = [
  { value: '1', label: '打开', color: 'success' },
  { value: '2', label: '停止', color: 'info' },
  { value: '0', label: '关闭', color: 'danger' }
]

options.list = list
const mock = mockUtil.buildMock(options)
mock.push(
  {
    path: '/d2crudplus/dicts/OpenStatusEnum',
    method: 'get',
    handle ({ body }) {
      return {
        code: 0,
        msg: 'success',
        data: openStatus
      }
    }
  }
)
export default mock
