import { Message } from 'element-ui'
import axios from 'axios'
import Adapter from 'axios-mock-adapter'
import { get, isEmpty, merge } from 'lodash'
import qs from 'qs'
import util from '@/libs/util'
import store from '@/store'

// 🔥 Handle and log request errors
function handleError(error) {
  // Push error to log store
  store.dispatch('d2admin/log/push', {
    message: '数据请求异常',
    type: 'danger',
    meta: { error }
  })

  // Show in console (only in dev mode)
  if (process.env.NODE_ENV === 'development') {
    util.log.danger('>>>>>> Error >>>>>>')
    console.error(error)
  }

  // UI feedback
  Message({
    message: error.message,
    type: 'error',
    duration: 5000
  })
}

// 🚀 Create Axios instance with default interceptors
function createService() {
  const service = axios.create()

  // Request interceptor
  service.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
  )

  // Response interceptor
  service.interceptors.response.use(
    response => {
      const { data, config } = response

      // Not our API (no 'code' field)
      if (data.code === undefined) return data

      // Our API: handle based on code
      switch (data.code) {
        case 0: return data.data
        case 401: throw new Error('请重新登录')
        default: throw new Error(`${data.msg || '接口错误'}: ${config.url}`)
      }
    },
    error => {
      const status = get(error, 'response.status')

      // Map common HTTP errors to user-friendly messages
      const statusMap = {
        400: '请求错误',
        401: '未授权，请登录',
        403: '拒绝访问',
        404: `请求地址出错: ${get(error, 'response.config.url')}`,
        408: '请求超时',
        500: '服务器内部错误',
        501: '服务未实现',
        502: '网关错误',
        503: '服务不可用',
        504: '网关超时',
        505: 'HTTP版本不受支持'
      }

      if (statusMap[status]) error.message = statusMap[status]

      handleError(error)
      throw error
    }
  )

  return service
}

// 🧠 Convert object to query string (supports dot notation)
function stringify(data) {
  return qs.stringify(data, { allowDots: true, encode: false })
}

// 🛠 Create request wrapper using an axios instance
function createRequest(service) {
  return function (config) {
    const token = util.cookies.get('token')

    const configDefault = {
      headers: {
        Authorization: token,
        'Content-Type': get(config, 'headers.Content-Type', 'application/json')
      },
      timeout: 5000,
      baseURL: process.env.VUE_APP_API,
      data: {}
    }

    const option = merge({}, configDefault, config)

    // ⏩ Move params to URL for GET requests
    if (!isEmpty(option.params)) {
      option.url += '?' + stringify(option.params)
      option.params = {}
    }

    // ⛳ Handle form-urlencoded data
    if (
      !isEmpty(option.data) &&
      option.headers['Content-Type'] === 'application/x-www-form-urlencoded'
    ) {
      option.data = stringify(option.data)
    }

    return service(option)
  }
}

// 🌐 Real HTTP setup
export const service = createService()
export const request = createRequest(service)

// 🧪 Mock HTTP setup
export const serviceForMock = createService()
export const requestForMock = createRequest(serviceForMock)
export const mock = new Adapter(serviceForMock)
