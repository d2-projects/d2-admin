import Mock from 'mockjs'
import qs from 'qs'
import withCredentials from './patch/withCredentials'

/* 补丁 */
withCredentials(Mock)

/* Mock 默认配置 */
Mock.setup({ timeout: '200-300' })

/* 扩展 [生成器] */
const Generator = (prop, template) => {
  const obj = {}
  obj[prop] = [template]
  return Mock.mock(obj)
}

/* 扩展 [循环] */
const Repeat = (num, itemTemplate) => Generator(`data|${num}`, itemTemplate).data

const CustomExtends = {
  Generator,
  Repeat,
  Mock,
  Random: Mock.Random
}

const extend = (prop, value) => {
  CustomExtends[prop] = value
}

/* 装配配置组 */
const wired = ({ url, type, body }) => ({
  method: type,
  params: qs.parse(url.split('?').length > 1 ? url.split('?')[1] : ''),
  body: JSON.parse(body),
  url: qs.parse(url.split('?')[0]),
  ...CustomExtends
})

const setup = (path, method, handle) => {
  Mock.mock(
    RegExp(path),
    method,
    typeof handle === 'function' ? o => handle(wired(o)) : handle
  )
}

const load = (collection) => {
  collection.map(({ path, method, handle }) => {
    if (method === '*') {
      method = [
        'get',
        'head',
        'post',
        'put',
        'delete',
        'connect',
        'options',
        'trace',
        'patch'
      ]
    }
    if (typeof method === 'string' && method.indexOf('|') > -1) method = method.split('|')
    if (method instanceof Array) {
      method.map(item => setup(path, item, handle))
    } else {
      setup(path, method, handle)
    }
  })
}

export default { setup, load, extend }
