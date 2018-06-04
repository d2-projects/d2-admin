<template>
  <el-container class="layout-main theme" :class="theme">
    <!-- 顶栏 -->
    <el-header>
      <div class="logo-group" :style="{width: collapse ? asideWidthCollapse : asideWidth}">
        <img v-if="collapse" src="@/assets/image/logo/header-icon-only.png">
        <img v-else src="@/assets/image/logo/header.png">
      </div>
      <div class="toggle-aside-btn" @click="collapse = !collapse">
        <Icon name="bars"/>
      </div>
      <HeaderMenu/>
      <HeaderRight/>
    </el-header>
    <!-- 下面 主体 -->
    <el-container>
      <!-- 主体 侧边栏 -->
      <el-aside :style="{width: collapse ? asideWidthCollapse : asideWidth}">
        <SideMenu :collapse="collapse"/>
      </el-aside>
      <!-- 主体 -->
      <el-main>
        <transition name="fade-transverse">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  components: {
    SideMenu: () => import('./components/SideMenu'),
    HeaderMenu: () => import('./components/HeaderMenu'),
    HeaderRight: () => import('./components/HeaderRight')
  },
  data () {
    return {
      theme: 'theme-star',
      collapse: false,
      // [侧边栏宽度] 正常状态
      asideWidth: '200px',
      // [侧边栏宽度] 折叠状态
      asideWidthCollapse: '65px'
    }
  }
}
</script>

<style lang="scss">
// 主题
@import '~@/assets/style/theme/star/index.scss';
</style>
