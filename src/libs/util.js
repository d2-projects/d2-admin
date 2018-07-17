// 插件
import Cookies from 'js-cookie'
import axios from 'axios'
import semver from 'semver'
import dayjs from 'dayjs'

// 获取项目信息
import packJson from '../../package.json'

let util = {}

/**
 * @description 得到现在的用户
 */
util.uuid = function () {
  return Cookies.get('uuid')
}

/**
 * @description 更新标题
 * @param {string} title 标题
 */
util.title = function title (titleText) {
  window.document.title = `${process.env.VUE_APP_TITLE}${titleText ? ` | ${titleText}` : ''}`
}

/**
 * @description 判断是否在其内
 * @param {*} ele element
 * @param {array} targetArr array
 */
util.isOneOf = function (ele, targetArr) {
  if (targetArr.indexOf(ele) >= 0) {
    return true
  } else {
    return false
  }
}

/**
 * @description 打印一个 “胶囊” 样式的信息
 * @param {string} title title text
 * @param {string} info info text
 */
util.logCapsule = function (title, info) {
  console.log(
    `%c ${title} %c ${info} %c`,
    'background:#29384b; padding: 1px; border-radius: 3px 0 0 3px; color: #fff',
    'background:#3488ff; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
    'background:transparent'
  )
}

/**
 * @description 检查版本更新
 * @param {object} vm vue
 */
util.checkUpdate = function (vm) {
  axios.get('https://api.github.com/repos/FairyEver/d2-admin/releases/latest')
    .then(res => {
      let version = res.tag_name
      const update = semver.lt(packJson.version, version)
      if (update) {
        util.logCapsule('D2Admin', `New version ${res.name}`)
        console.log(`${dayjs(res.created_at).format('YYYY年M月D日')}更新 版本号: ${res.tag_name} | 详情${res.html_url}`)
      }
      vm.$store.commit('d2adminUpdateSet', res)
    })
    .catch(err => {
      console.log('checkUpdate error', err)
    })
}

/**
 * @description 显示版本信息
 */
util.showInfo = function showInfo () {
  util.logCapsule('D2Admin', `v${packJson.version}`)
  console.log('Github https://github.com/d2-projects/d2-admin')
  console.log('Doc    http://d2admin.fairyever.com/zh/')
}

export default util
