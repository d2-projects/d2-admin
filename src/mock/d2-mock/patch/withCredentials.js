export default function (Mock) {
  // http://cnine.me/note/FrontEnd/mock-lose-cookies-dbg.html
  Mock.XHR.prototype.__send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false
      this.custom.xhr.responseType = this.responseType
    }
    this.__send.apply(this, arguments)
  }
}
