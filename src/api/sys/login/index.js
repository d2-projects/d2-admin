import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function GetUserInfo (token) {
  return request({
    url: 'user/info',
    method: 'get',
    params: { token }
  })
}
