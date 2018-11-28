import Mock from 'mockjs'
import qs from 'qs'

const db = [
  { id: '1', name: '王小虎1', address: '上海市普陀区金沙江路 1518 弄' },
  { id: '2', name: '王小虎2', address: '上海市普陀区金沙江路 1517 弄' },
  { id: '3', name: '王小虎3', address: '上海市普陀区金沙江路 1519 弄' },
  { id: '4', name: '王小虎4', address: '上海市普陀区金沙江路 1516 弄' }
]

Mock.mock(RegExp('/api/demo/business/issues/142' + '.*'), 'get', ({ url, type, body }) => {
  // 解析
  const options = {
    params: qs.parse(url.split('?').length > 1 ? url.split('?')[1] : ''),
    body: qs.parse(body),
    url: qs.parse(url.split('?')[0])
  }
  // 返回数据
  return Mock.mock(
    {
      code: 0,
      msg: '获取数据成功',
      data: db.find(e => e.id === options.params.id)
    }
  )
})
