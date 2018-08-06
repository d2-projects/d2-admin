import Vue from 'vue'
import { Message } from 'element-ui'
import axios from 'axios'
axios.defaults.baseURL = 'https://api.getremark.com/spotcms/';
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(res => {
  if (res.data.code !== undefined) {
    if (res.data.code !== 200) {
      Message.error(res.data.msg);
      return Promise.reject(res.data.msg)
    } else {
      return res.data
    }
  } else {
    return res.data
  }
}, err => {
  Message.error("请求异常！");
  return Promise.reject(err)
});

Vue.prototype.$axios = axios;
