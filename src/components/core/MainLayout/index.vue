<template>
  <el-container class="layout-main" :class="theme">
    <el-header>
      <div class="logo-group">
        <img src="@/assets/image/logo/header.png">
      </div>
      <div class="toggle-sidemenu-btn">
        <Icon name="bars"></Icon>
      </div>
      <HeaderMenu></HeaderMenu>
      <HeaderRight></HeaderRight>
    </el-header>
    <el-container>
      <el-aside style="width: 200px;">
        <SideMenu></SideMenu>
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
      theme: 'default'
    }
  }
}
</script>

<style lang="scss">
// 主题
@import '~@/assets/style/theme/default.scss';
</style>

