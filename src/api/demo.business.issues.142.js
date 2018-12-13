import request from '@/plugin/axios'

export function get (id) {
  return request({
    url: '/demo/business/issues/142/detail',
    method: 'get',
    params: {
      id
    }
  })
}
