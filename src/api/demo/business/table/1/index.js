import request from '@/plugin/axios'

export function BusinessTable1List (data) {
  return request({
    url: '/demo/business/table/1',
    method: 'post',
    data
  })
}
