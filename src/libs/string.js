/// <summary>
/// 引号转义符号
/// </summary>
String.EscapeChar = '\''

/// <summary>
/// 替换所有字符串
/// </summary>
/// <param name="searchValue">检索值</param>
/// <param name="replaceValue">替换值</param>
String.prototype.replaceAll = function (searchValue, replaceValue) {
  var regExp = new RegExp(searchValue, "g")
  return this.replace(regExp, replaceValue)
}

/// <summary>
/// 格式化字符串
/// </summary>
String.prototype.format = function () {
  var regexp = /\{(\d+)\}/g
  var args = arguments
  var result = this.replace(regexp, function (m, i, o, n) {
    return args[i]
  })
  return result.replaceAll('%', String.EscapeChar)
}