<template>
  <el-container class="layout-main" :class="theme">
    <el-header>
      <div class="logo-group">
        <img src="@/assets/image/logo/header.png">
      </div>
      <HeaderMenu></HeaderMenu>
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
import SiderMenu from '@/components/core/MainLayout/_siderMenu.vue'
import HeaderMenu from '@/components/core/MainLayout/_headerMenu.vue'
export default {
  components: {
    SiderMenu,
    HeaderMenu
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

