import { mock } from '@/api/service'
import * as tools from '@/api/tools'

const req = context => context.keys().map(context)

// 模拟数据
const apiList = req(require.context('../', true, /mock\.js$/))
  .filter(e => e.default)
  .map(e => e.default)

apiList.forEach(apiFile => {
  for (const item of apiFile) {
    mock
      .onAny(new RegExp('^/api' + item.path))
      .reply(config => {
        console.log('------------fake request start -------------')
        console.log('request:', config)
        const data = config.data ? JSON.parse(config.data) : {}
        const query = config.url.indexOf('?') >= 0 ? config.url.substring(config.url.indexOf('?') + 1) : undefined
        let params = {}
        if (query) {
          const arr = query.split('&')
          for (const item of arr) {
            const kv = item.split('=')
            params[kv[0]] = kv[1]
          }
        } else {
          params = data
        }
        const req = {
          body: data,
          params: params
        }
        const ret = item.handle(req)
        console.log('response:', ret)
        console.log('------------fake request end-------------')
        if (ret.code === 0) {
          return tools.responseSuccess(ret.data, ret.msg)
        } else {
          return tools.responseError(ret.data, ret.msg, ret.code)
        }
      })
  }
})
