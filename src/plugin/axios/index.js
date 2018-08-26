import axios from 'axios'
import { Message } from 'element-ui'
import util from '@/libs/util'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 5000 // 请求超时时间
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (!(/^https:\/\/|http:\/\//.test(config.url))) {
      // Do something before request is sent
      const token = util.cookies.get('token')
      if (token && token !== 'undefined') {
        // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
        config.headers['X-Token'] = token
      }
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
