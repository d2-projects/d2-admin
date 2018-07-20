<template>
  <div
    class="d2-layout-header-aside-group"
    :style="styleLayoutMainGroup"
    :class="{grayMode: isGrayMode}">
    <!-- 半透明遮罩 -->
    <div class="d2-layout-header-aside-mask"></div>
    <!-- 主体内容 -->
    <div class="d2-layout-header-aside-content">
      <!-- 顶栏 -->
      <div class="d2-theme-header">
        <div class="logo-group" :style="{width: collapse ? asideWidthCollapse : asideWidth}">
          <img v-if="collapse" :src="`${$baseUrl}image/theme/${themeActiveSetting.name}/logo/icon-only.png`">
          <img v-else :src="`${$baseUrl}image/theme/${themeActiveSetting.name}/logo/all.png`">
        </div>
        <div class="toggle-aside-btn" @click="collapse = !collapse">
          <d2-icon name="bars"/>
        </div>
        <d2-menu-header/>
        <!-- 顶栏右侧 -->
        <div class="d2-header-right">
          <d2-header-help/>
          <d2-header-fullscreen/>
          <d2-header-theme/>
          <d2-header-user/>
        </div>
      </div>
      <!-- 下面 主体 -->
      <div class="d2-theme-container">
        <!-- 主体 侧边栏 -->
        <div ref="aside" class="d2-theme-container-aside" :style="{width: collapse ? asideWidthCollapse : asideWidth}">
          <d2-menu-side :collapse="collapse"/>
        </div>
        <!-- 主体 -->
        <div class="d2-theme-container-main">
          <div class="d2-theme-container-main-header">
            <d2-tabs/>
          </div>
          <div class="d2-theme-container-main-body">
            <transition name="fade-transverse">
              <keep-alive :include="keepAliveList">
                <router-view/>
              </keep-alive>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import menuSide from './components/menu-side'
import menuHeader from './components/menu-header'
import tabs from './components/tabs'
import headerFullscreen from './components/header-fullscreen'
import headerTheme from './components/header-theme'
import headerUser from './components/header-user'
import headerHelp from './components/header-help'

export default {
  name: 'd2-layout-header-aside',
  components: {
    'd2-menu-side': menuSide,
    'd2-menu-header': menuHeader,
    'd2-tabs': tabs,
    'd2-header-fullscreen': headerFullscreen,
    'd2-header-theme': headerTheme,
    'd2-header-user': headerUser,
    'd2-header-help': headerHelp
  },
  data () {
    return {
      collapse: false,
      // [侧边栏宽度] 正常状态
      asideWidth: '200px',
      // [侧边栏宽度] 折叠状态
      asideWidthCollapse: '65px'
    }
  },
  computed: {
    ...mapState({
      isGrayMode: state => state.d2admin.isGrayMode,
      pageOpenedList: state => state.d2admin.pageOpenedList
    }),
    ...mapGetters([
      'themeActiveSetting'
    ]),
    /**
     * @description 返回现在需要缓存的页面 name 数组
     */
    keepAliveList () {
      return this.pageOpenedList.filter(item => !(item.meta && item.meta.notCache)).map(e => e.name)
    },
    /**
     * @description 最外层容器的背景图片样式
     */
    styleLayoutMainGroup () {
      return {
        ...this.themeActiveSetting.backgroundImage ? {
          backgroundImage: `url('${this.$baseUrl}${this.themeActiveSetting.backgroundImage}')`
        } : {}
      }
    }
  }
}
</script>

<style lang="scss">
// 注册主题
@import '~@/assets/style/theme/register.scss';
</style>
