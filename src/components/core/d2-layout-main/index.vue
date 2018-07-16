<template>
  <div
    class="d2-layout-main-group"
    :style="styleLayoutMainGroup"
    :class="{grayMode: isGrayMode}">
    <!-- 半透明遮罩 -->
    <div class="d2-layout-main-mask"></div>
    <!-- 主体内容 -->
    <div class="d2-layout-main-content">
      <!-- 顶栏 -->
      <div class="d2-theme-header">
        <div class="logo-group" :style="{width: collapse ? asideWidthCollapse : asideWidth}">
          <img v-if="collapse" :src="`${$baseUrl}/theme/${themeActiveSetting.name}/logo/icon-only.png`">
          <img v-else :src="`${$baseUrl}/theme/${themeActiveSetting.name}/logo/all.png`">
        </div>
        <div class="toggle-aside-btn" @click="collapse = !collapse">
          <d2-icon name="bars"/>
        </div>
        <d2-layout-main-menu-header/>
        <!-- 顶栏右侧 -->
        <div class="d2-header-right">
          <d2-layout-main-header-github/>
          <d2-layout-main-header-help/>
          <d2-layout-main-header-full-screen/>
          <d2-layout-main-header-theme/>
          <d2-layout-main-header-user/>
        </div>
      </div>
      <!-- 下面 主体 -->
      <div class="d2-theme-container">
        <!-- 主体 侧边栏 -->
        <div ref="aside" class="d2-theme-container-aside" :style="{width: collapse ? asideWidthCollapse : asideWidth}">
          <d2-layout-main-menu-side :collapse="collapse"/>
        </div>
        <!-- 主体 -->
        <div class="d2-theme-container-main">
          <div class="d2-theme-container-main-header">
            <d2-multiple-page-control/>
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
export default {
  name: 'd2-layout-main',
  components: {
    'd2-layout-main-menu-side': () => import('./components/-menu-side'),
    'd2-layout-main-menu-header': () => import('./components/-menu-header'),
    'd2-layout-main-header-full-screen': () => import('./components/-full-screen'),
    'd2-layout-main-header-theme': () => import('./components/-theme'),
    'd2-layout-main-header-user': () => import('./components/-user'),
    'd2-layout-main-header-help': () => import('./components/-help'),
    'd2-layout-main-header-github': () => import('./components/-github')
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
     * @description 返回现在需要缓存的页面 name
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
