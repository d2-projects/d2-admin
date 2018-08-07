<template>
  <div
    class="d2-layout-header-aside-group"
    :style="styleLayoutMainGroup"
    :class="{grayMode: isGrayMode}">
    <!-- 半透明遮罩 -->
    <div class="d2-layout-header-aside-mask"></div>
    <!-- 主体内容 -->
    <div class="d2-layout-header-aside-content" flex="dir:top">
      <!-- 顶栏 -->
      <div class="d2-theme-header" flex-box="0">
        <div class="logo-group" :style="{width: isMenuAsideCollapse ? asideWidthCollapse : asideWidth}">
          <img v-if="isMenuAsideCollapse" :src="`${$baseUrl}image/theme/${d2adminThemeActiveSetting.name}/logo/icon-only.png`">
          <img v-else :src="`${$baseUrl}image/theme/${d2adminThemeActiveSetting.name}/logo/all.png`">
        </div>
        <div class="toggle-aside-btn" @click="handleToggleAside">
          <d2-icon name="bars"/>
        </div>
        <d2-menu-header/>
        <!-- 顶栏右侧 -->
        <div class="d2-header-right">
          <!-- 如果你只想在开发环境显示这个按钮请添加 v-if="$env === 'development'" -->
          <d2-header-error-log/>
          <d2-header-help/>
          <d2-header-fullscreen/>
          <d2-header-theme/>
          <d2-header-user/>
        </div>
      </div>
      <!-- 下面 主体 -->
      <div class="d2-theme-container" flex-box="1" flex>
        <!-- 主体 侧边栏 -->
        <div
          flex-box="0"
          ref="aside"
          class="d2-theme-container-aside"
          :style="{width: isMenuAsideCollapse ? asideWidthCollapse : asideWidth}">
          <d2-menu-side/>
        </div>
        <!-- 主体 -->
        <div class="d2-theme-container-main" flex-box="1" flex="dir:top">
          <div class="d2-theme-container-main-header" flex-box="0">
            <d2-tabs/>
          </div>
          <div class="d2-theme-container-main-body" flex-box="1">
            <transition name="fade-transverse">
              <keep-alive :include="d2adminKeepAliveInclude">
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
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'd2-layout-header-aside',
  components: {
    'd2-menu-side': () => import('./components/menu-side'),
    'd2-menu-header': () => import('./components/menu-header'),
    'd2-tabs': () => import('./components/tabs'),
    'd2-header-fullscreen': () => import('./components/header-fullscreen'),
    'd2-header-theme': () => import('./components/header-theme'),
    'd2-header-user': () => import('./components/header-user'),
    'd2-header-help': () => import('./components/header-help'),
    'd2-header-error-log': () => import('./components/header-error-log')
  },
  data () {
    return {
      // [侧边栏宽度] 正常状态
      asideWidth: '200px',
      // [侧边栏宽度] 折叠状态
      asideWidthCollapse: '65px'
    }
  },
  computed: {
    ...mapState({
      isGrayMode: state => state.d2admin.isGrayMode,
      pageOpenedList: state => state.d2admin.pageOpenedList,
      isMenuAsideCollapse: state => state.d2admin.isMenuAsideCollapse
    }),
    ...mapGetters([
      'd2adminThemeActiveSetting',
      'd2adminKeepAliveInclude'
    ]),
    /**
     * @description 最外层容器的背景图片样式
     */
    styleLayoutMainGroup () {
      return {
        ...this.d2adminThemeActiveSetting.backgroundImage ? {
          backgroundImage: `url('${this.$baseUrl}${this.d2adminThemeActiveSetting.backgroundImage}')`
        } : {}
      }
    }
  },
  methods: {
    ...mapMutations([
      'd2adminMenuAsideCollapseToggle'
    ]),
    /**
     * 接收点击切换侧边栏的按钮
     */
    handleToggleAside () {
      this.d2adminMenuAsideCollapseToggle()
    }
  }
}
</script>

<style lang="scss">
// 注册主题
@import '~@/assets/style/theme/register.scss';
</style>
