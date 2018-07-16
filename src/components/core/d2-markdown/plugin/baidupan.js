export default (quote, assetsPublicPath) => {
  const _quote = quote.replace(/<[^<>]+>/g, '').trim()
  const bdPanUrl = /^https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+$/i
  const bdPanUrlPwd = /^链接: https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+ 密码: [a-z0-9]{4}$/i
  if (bdPanUrl.test(_quote)) {
    return `<div class="baidupan">
      <a href="${_quote}" class="container">
        <div class="icon">
          <img src="${assetsPublicPath}image/baidu-pan-logo.png" style="background-color: transparent;">
        </div>
        <div class="url">${_quote}</div>
      </a>
    </div>`
  } else if (bdPanUrlPwd.test(_quote)) {
    const url = _quote.match(/https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+/i)
    const pwd = _quote.match(/[a-z0-9]{4}$/i)
    return `<div class="baidupan">
      <div class="container">
        <a href="${url[0]}">
          <div class="icon">
            <img src="${assetsPublicPath}image/baidu-pan-logo.png" style="background-color: transparent;">
          </div>
          <div class="url">${url[0]}</div>
        </a>
        <div class="line"></div>
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
