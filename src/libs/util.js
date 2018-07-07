// 插件
import Cookies from 'js-cookie';
import axios from 'axios';
import semver from 'semver';
import dayjs from 'dayjs';

// 获取项目信息
import packJson from '../../package.json';

const util = {};

/**
 * @description 得到现在的用户
 */
util.uuid = function uuid() {
  return Cookies.get('uuid');
};

/**
 * @description 更新标题
 * @param {string} title 标题
 */
util.title = function title(titleText) {
  window.document.title = `${process.env.VUE_APP_TITLE}${titleText ? ` | ${titleText}` : ''}`;
};

/**
 * @description 打开全屏
 */
util.openFullScreen = function openFullScreen() {
  const { body } = document;
  if (body.requestFullscreen) {
    body.requestFullscreen();
  } else if (body.mozRequestFullScreen) {
    body.mozRequestFullScreen();
  } else if (body.webkitRequestFullScreen) {
    body.webkitRequestFullScreen();
  } else if (body.msRequestFullscreen) {
    body.msRequestFullscreen();
  }
};

/**
 * @description 关闭全屏
 */
util.exitFullScreen = function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};

/**
 * @description 在每次打开新页面的时候调用 打开一个新的 tab
 * @param {object} vm vue
 * @param {string} name route name
 * @param {object} argu arguments
 * @param {object} query query object
 */
util.openNewPage = function openNewPage(vm, name, argu, query) {
  // 已经打开的页面
  const { $store: { state: { d2admin: { pageOpenedList } } } } = vm;
  // 判断此页面是否已经打开 并且记录位置
  let pageOpendIndex = 0;
  const pageOpend = pageOpenedList.find((page, index) => {
    const same = page.name === name;
    pageOpendIndex = same ? index : pageOpendIndex;
    return same;
  });
  if (pageOpend) {
    // 页面以前打开过 但是新的页面可能 name 一样，参数不一样
    vm.$store.commit('d2adminPageOpenedListUpdateItem', { index: pageOpendIndex, argu, query });
  } else {
    // 页面以前没有打开过
    const { $store: { state: { d2admin: { tagPool } } } } = vm;
    const tag = tagPool.find(t => t.name === name);
    if (tag) {
      vm.$store.commit('d2adminTagIncreate', { tag, argu, query });
    }
  }
  vm.$store.commit('d2adminPageCurrentSet', name);
};

/**
 * @description 判断是否在其内
 * @param {*} ele element
 * @param {array} targetArr array
 */
util.isOneOf = function isOneOf(ele, targetArr) {
  if (targetArr.indexOf(ele) >= 0) {
    return true;
  }
  return false;
};

/**
 * @description 检查版本更新
 * @param {object} vm vue
 */
// TODO: 添加 跳过此版本 选项
util.checkUpdate = function checkUpdate(vm) {
  axios.get('https://api.github.com/repos/FairyEver/d2-admin/releases/latest')
    .then((res) => {
      const version = res.tag_name;
      const update = semver.lt(packJson.version, version);
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
            `.trim(),
          });
        });
      }
      vm.$store.commit('d2adminUpdateSet', update);
      vm.$store.commit('d2adminReleasesSet', res);
    })
    .catch((err) => {
      console.log('checkUpdate error', err);
    });
};

export default util;
