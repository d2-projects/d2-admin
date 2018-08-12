import axios from 'axios'
import semver from 'semver'
import { version } from '../../package.json'
import log from './util.log.js'
import cookies from './util.cookies.js'

let util = {
  cookies,
  log
}

/**
 * @description 更新标题
 * @param {String} title 标题
 */
util.title = function (titleText) {
  window.document.title = `${process.env.VUE_APP_TITLE}${titleText ? ` | ${titleText}` : ''}`
}

/**
 * @description 打开新页面
 * @param {String} url 地址
 */
util.open = function (url) {
  var a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
  a.setAttribute('id', 'd2admin-menu-link')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById('d2admin-menu-link'))
}

/**
 * @description 判断是否在其内
 * @param {*} ele element
 * @param {Array} targetArr array
 */
util.isOneOf = function (ele, targetArr) {
  if (targetArr.indexOf(ele) >= 0) {
    return true
  } else {
    return false
  }
}

/**
 * @description 检查版本更新
 * @param {Object} vm vue
 */
util.checkUpdate = function (vm) {
  if (!process.env.VUE_APP_RELEASES_API) {
    return
  }
  axios.get(process.env.VUE_APP_RELEASES_API)
    .then(res => {
      let versionGet = res.tag_name
      const update = semver.lt(version, versionGet)
      if (update) {
        log.capsule('D2Admin', `New version ${res.name}`)
        console.log(`版本号: ${res.tag_name} | 详情${res.html_url}`)
        vm.$store.commit('d2admin/releases/updateSet', true)
      }
      vm.$store.commit('d2admin/releases/latestSet', res)
    })
    .catch(err => {
      console.log('checkUpdate error', err)
    })
}

/**
 * @description 显示版本信息
 */
util.showInfo = function showInfo () {
  log.capsule('D2Admin', `v${version}`)
  console.log('Github https://github.com/d2-projects/d2-admin')
  console.log('Doc    http://d2admin.fairyever.com/zh/')
}

export default util
