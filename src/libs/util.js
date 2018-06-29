let util = {}

util.closeFullScreen = function () {
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

util.fullScreen = function () {
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

export default util
