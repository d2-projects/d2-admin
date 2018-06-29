import Cookies from 'js-cookie'

let util = {}

/**
 * 得到现在的用户
 */
util.uuid = function () {
  return Cookies.get('uuid')
}

/**
 * 打开全屏
 */
util.openFullScreen = function () {
  const body = document.body
  if (body.requestFullscreen) {
    body.requestFullscreen()
  } else if (body.mozRequestFullScreen) {
    body.mozRequestFullScreen()
  } else if (body.webkitRequestFullScreen) {
    body.webkitRequestFullScreen()
  } else if (body.msRequestFullscreen) {
    body.msRequestFullscreen()
  }
}

/**
 * 关闭全屏
 */
util.exitFullScreen = function () {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  }
}

export default util
