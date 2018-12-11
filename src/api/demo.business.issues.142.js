import request from '@/plugin/axios'

export function get (id) {
  return request({
    url: '/demo/business/issues/142',
    method: 'get',
    params: {
      id
    }
  })
}
