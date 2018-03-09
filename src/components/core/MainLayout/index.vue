<template>
  <el-container class="layout-main" :class="theme">
    <el-header>
      <div class="logo-group">
        <img src="@/assets/image/logo/header.png">
      </div>
      <HeaderMenu></HeaderMenu>
      <HeaderRight></HeaderRight>
    </el-header>
    <el-container>
      <el-aside style="width: 200px;">
        <SiderMenu></SiderMenu>
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
    SiderMenu: () => import('./_siderMenu'),
    HeaderMenu: () => import('./_headerMenu'),
    HeaderRight: () => import('./_headerRight')
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

