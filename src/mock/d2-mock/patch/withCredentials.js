export default function (Mock) {
  // http://cnine.me/note/FrontEnd/mock-lose-cookies-dbg.html
  Mock.XHR.prototype.__send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false
      // https://github.com/d2-projects/d2-admin/issues/254
      if (!this.custom.async) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.__send.apply(this, arguments)
  }
}
