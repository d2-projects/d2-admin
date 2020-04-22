import request from '@/plugin/axios'

export function accountLogin (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
