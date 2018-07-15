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
util.title = function (title) {
  const prefix = 'D2Admin'
  window.document.title = `${prefix}${title ? ` | ${title}` : ''}`
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
 * @description 检查版本更新
 * @param {object} vm vue
 */
util.checkUpdate = function (vm) {
  axios.get('https://api.github.com/repos/FairyEver/d2-admin/releases/latest')
    .then(res => {
      let version = res.tag_name
      const update = semver.lt(packJson.version, version)
      if (vm.$env === 'development' && update && vm.$store.state.d2admin.updateNotify) {
        vm.$nextTick(() => {
          vm.$notify({
            title: `D2Admin 新版本 ${res.name}`,
            duration: 0,
            dangerouslyUseHTMLString: true,
            message: `
              <p>当前版本: ${packJson.version}</p>
              <p>${dayjs(res.created_at).format('YYYY年M月D日')}更新 版本号: ${res.tag_name}</p>
              <p style="color: #CCC;">此信息只在开发环境提示</p>
              <p>
                <a
                  href="${res.html_url}"
                  class="el-button el-button--primary el-button--mini"
                  style="text-decoration: none; margin-top: 10px;"
                  target="blank">
                  <i class="fa fa-link" style="margin-right: 5px;"></i>
                  详细信息
                </a>
              </p>
            `.trim()
          })
        })
      }
      vm.$store.commit('d2adminUpdateSet', update)
      vm.$store.commit('d2adminReleasesSet', res)
    })
    .catch(err => {
      console.log('checkUpdate error', err)
    })
}

export default util
