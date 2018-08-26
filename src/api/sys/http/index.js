import request from '@/plugin/axios'

export function httpGet (url, params = {}) {
  return request({
    url,
    method: 'get',
    params
  })
}

export function httpPost (url, data = {}) {
  return request({
    url,
    method: 'post',
    data
  })
}
