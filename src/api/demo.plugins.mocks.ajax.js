import request from '@/plugin/axios'

export function pluginMocksAjax () {
  return request({
    url: '/demo/plugins/mock/ajax',
    method: 'get'
  })
}
