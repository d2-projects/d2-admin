// 请求真实后端
// import { request } from '@/api/service'

// 请求模拟数据
import { requestForMock } from '@/api/service'

export function GetList (query) {
  return requestForMock({
    url: '/d2crudplus/group/page',
    method: 'get',
    data: query
  })
}

export function AddObj (obj) {
  return requestForMock({
    url: '/d2crudplus/group/add',
    method: 'post',
    data: obj
  })
}

export function UpdateObj (obj) {
  return requestForMock({
    url: '/d2crudplus/group/update',
    method: 'post',
    data: obj
  })
}
export function DelObj (id) {
  return requestForMock({
    url: '/d2crudplus/group/delete',
    method: 'post',
    data: { id }
  })
}
