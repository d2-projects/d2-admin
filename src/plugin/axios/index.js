import Vue from 'vue'
import { Message } from 'element-ui'
import axios from 'axios'

axios.interceptors.response.use(res => {
  // 在这里对返回的数据进行处理
  if (res.data.code !== undefined) {
    if (res.data.code !== 0) {
      Message.error(res.data.msg)
      return Promise.reject(res.data.msg)
    } else {
      return res.data.data
    }
  } else {
    return res.data
  }
}, err => {
  return Promise.reject(err)
})

Vue.prototype.$axios = axios
