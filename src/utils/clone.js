// 功能
// 深拷贝

const clone = (obj) => {
  var o
  if (typeof obj === 'object') {
    if (obj === null) {
      o = null
    } else {
      if (obj instanceof Array) {
        o = []
        for (var i = 0, len = obj.length; i < len; i++) {
          o.push(clone(obj[i]))
        }
      } else {
        o = {}
        for (var j in obj) {
          o[j] = clone(obj[j])
        }
      }
    }
  } else { o = obj }
  return o
}

export default clone
