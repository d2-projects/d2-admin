import request from '@/plugin/axios'

export function getInvalidUrl () {
  return request({
    url: '/invalid-url',
    method: 'get'
  })
}
