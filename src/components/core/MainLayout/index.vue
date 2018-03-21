<template>
  <el-container class="layout-main" :class="theme">
    <el-header>
      <div class="logo-group" :style="logoGroupStyle">
        <img v-if="collapse" src="@/assets/image/logo/header-icon-only.png">
        <img v-else src="@/assets/image/logo/header.png">
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
        <transition name="fade">
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

