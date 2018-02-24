export default (quote) => {
  const _quote = quote.replace(/<[^<>]+>/g, '').trim()
  const bdShareUrl = /^https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+$/i
  const bdShareUrlPwd = /^链接: https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+ 密码: [a-z0-9]{4}$/i
  if (bdShareUrl.test(_quote)) {
    return `<div class="baidupan">
      <a href="${_quote}" class="container">
        <div class="icon">
          <img src="/static/image/baidu-pan-logo.png">
        </div>
        <div class="url">${_quote}</div>
      </a>
    </div>`
  } else if (bdShareUrlPwd.test(_quote)) {
    const url = _quote.match(/https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+/i)
    const pwd = _quote.match(/[a-z0-9]{4}$/i)
    return `<div class="baidupan">
      <div class="container">
        <div class="icon">
          <img src="/static/image/baidu-pan-logo.png">
        </div>
        <div class="url">
          <a href="${url[0]}">${url[0]}</a>
        </div>
        <div class="pwd">
          密码
          <span>${pwd[0]}</span>
        </div>
      </div>
    </div>`
  } else {
    return false
  }
}
