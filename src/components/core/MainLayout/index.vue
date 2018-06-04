<template>
  <el-container class="layout-main" :class="theme">
    <!-- 顶栏 -->
    <el-header>
      <div class="logo-group" :style="{width: collapse ? asideWidthCollapse : asideWidth}">
        <img v-if="collapse" src="@/assets/image/logo/header-icon-only.png">
        <img v-else src="@/assets/image/logo/header.png">
      </div>
      <div class="toggle-sidemenu-btn" @click="toggleAside">
        <Icon name="bars"></Icon>
      </div>
      <HeaderMenu></HeaderMenu>
      <HeaderRight></HeaderRight>
    </el-header>
    <!-- 下面 主体 -->
    <el-container>
      <!-- 主体 侧边栏 -->
      <el-aside :style="{width: collapse ? asideWidthCollapse : asideWidth}">
        <SideMenu :collapse="collapse"></SideMenu>
      </el-aside>
      <!-- 主体 -->
      <el-main>
        <transition name="fade-transverse">
          <router-view></router-view>
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
      theme: 'classic',
      collapse: false,
      // 侧边栏宽度
      asideWidth: '200px',
      asideWidthCollapse: '65px'
    }
  },
  methods: {
    toggleAside () {
      this.collapse = !this.collapse
    }
  }
}
</script>

<style lang="scss">
// 主题
@import '~@/assets/style/theme/classic.scss';
</style>

