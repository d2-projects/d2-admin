<template>
  <div
    class="d2-layout-main-group"
    :style="styleLayoutMainGroup"
    :class="{grayMode: isGrayMode}">
    <!-- 半透明遮罩 -->
    <div class="d2-layout-main-mask"></div>
    <!-- 主体内容 -->
    <el-container class="d2-layout-main-content">
      <!-- 顶栏 -->
      <el-header class="d2-theme-header">
        <div class="logo-group" :style="{width: collapse ? asideWidthCollapse : asideWidth}">
          <img v-if="collapse" :src="`${$assetsPublicPath}static/image/theme/${themeActive.value}/logo/icon-only.png`">
          <img v-else :src="`${$assetsPublicPath}static/image/theme/${themeActive.value}/logo/all.png`">
        </div>
        <div class="toggle-aside-btn" @click="collapse = !collapse">
          <d2-icon name="bars"/>
        </div>
        <d2-layout-main-menu-header class="d2-theme-header-menu"/>
        <!-- 顶栏右侧 -->
        <div class="d2-header-right">
          <d2-layout-main-header-github/>
          <d2-layout-main-header-help/>
          <d2-layout-main-header-full-screen/>
          <d2-layout-main-header-theme/>
          <d2-layout-main-header-user/>
        </div>
      </el-header>
      <!-- 下面 主体 -->
      <el-container class="d2-theme-container">
        <!-- 主体 侧边栏 -->
        <el-aside ref="aside" class="d2-theme-container-aside" :style="{width: collapse ? asideWidthCollapse : asideWidth}">
          <d2-layout-main-menu-side :collapse="collapse"/>
        </el-aside>
        <!-- 主体 -->
        <el-main class="d2-theme-container-main">
          <div class="d2-theme-container-main-header">
            <d2-multiple-page-control/>
          </div>
          <div class="d2-theme-container-main-body">
            <transition name="fade-transverse">
              <keep-alive>
                <router-view v-if="alive"/>
              </keep-alive>
            </transition>
            <transition name="fade-transverse">
              <router-view v-if="!alive"/>
            </transition>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
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
      themeActive: state => state.d2admin.themeActive,
      isGrayMode: state => state.d2admin.isGrayMode
    }),
    styleLayoutMainGroup () {
      return {
        ...this.themeActive.backgroundImage ? {
          backgroundImage: `url('${this.$assetsPublicPath}${this.themeActive.backgroundImage}')`
        } : {}
      }
    },
    alive () {
      if (this.$route.meta) {
        if (this.$route.meta.alive) {
          return true
        }
      }
      return false
    }
  },
  mounted () {
    // 加载主题
    this.d2adminThemeLoad()
  },
  methods: {
    ...mapMutations([
      'd2adminThemeLoad'
    ])
  }
}
</script>

<style lang="scss">
// 注册主题
@import '~@/assets/style/theme/register.scss';
</style>
