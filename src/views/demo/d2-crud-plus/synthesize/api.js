// 请求模拟数据
import { requestForMock } from '@/api/service'

export function GetList (query) {
  return requestForMock({
    url: '/d2-crud-plus/synthesize/page',
    method: 'get',
    data: query
  })
}

export function AddObj (obj) {
  return requestForMock({
    url: '/d2-crud-plus/synthesize/add',
    method: 'post',
    data: obj
  })
}

export function UpdateObj (obj) {
  return requestForMock({
    url: '/d2-crud-plus/synthesize/update',
    method: 'post',
    data: obj
  })
}
export function DelObj (id) {
  return requestForMock({
    url: '/d2-crud-plus/synthesize/delete',
    method: 'post',
    data: { id }
  })
}
export function BatchDel (ids) {
  return requestForMock({
    url: '/d2-crud-plus/synthesize/batchDelete',
    method: 'post',
    data: { ids }
  })
}
