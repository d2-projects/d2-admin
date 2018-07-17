import Vue from 'vue'
import axios from 'axios'

axios.interceptors.response.use(res => {
  if (res.data.code !== undefined) {
    if (res.data.code !== 0) {
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
