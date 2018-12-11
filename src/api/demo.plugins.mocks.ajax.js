import request from '@/plugin/axios'

export function PluginMocksAjax () {
  return request({
    url: '/demo/plugins/mock/ajax',
    method: 'get'
  })
}
