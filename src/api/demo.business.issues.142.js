import request from '@/plugin/axios'

export function fetch () {
  return request({
    url: '/demo/business/issues/142/fetch',
    method: 'get'
  })
}

export function detail (id) {
  return request({
    url: '/demo/business/issues/142/detail',
    method: 'get',
    params: {
      id
    }
  })
}
