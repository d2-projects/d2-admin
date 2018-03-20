<template>
  <el-container class="layout-main" :class="theme">
    <el-header>
      <div class="logo-group" :style="logoGroupStyle">
        <img :style="{opacity: collapse ? 1 : 0}" src="@/assets/image/logo/header-icon-only.png">
        <img :style="{opacity: collapse ? 0 : 1}" src="@/assets/image/logo/header.png">
      </div>
      <div class="toggle-sidemenu-btn" @click="toggleAside">
        <Icon name="bars"></Icon>
      </div>
      <HeaderMenu></HeaderMenu>
      <HeaderRight></HeaderRight>
    </el-header>
    <el-container>
      <el-aside :style="asideStyle">
        <SideMenu :collapse="collapse"></SideMenu>
      </el-aside>
      <el-main>
        <router-view></router-view>
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
      theme: 'default',
      collapse: false
    }
  },
  computed: {
    logoGroupStyle () {
      return {
        width: `${this.collapse ? '65' : '200'}px`
      }
    },
    asideStyle () {
      return {
        width: `${this.collapse ? '65' : '200'}px`
      }
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
@import '~@/assets/style/theme/default.scss';
</style>

