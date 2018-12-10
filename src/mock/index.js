import Mock from 'mockjs'

// 解决 Mock 情况下，携带 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function () {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}

// 导入所有的接口
const req = context => context.keys().map(context)
req(require.context('./api/', true, /\.js$/))

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
  timeout: '300-600'
})
