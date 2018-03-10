<template>
  <div class="btn-group">
    <!-- 全屏按钮 -->
    <FullScreen></FullScreen>
    <!-- 用户菜单 -->
    <UserDropdown></UserDropdown>
  </div>
</template>

<script>
export default {
  components: {
    FullScreen: () => import('./components/FullScreen.vue'),
    UserDropdown: () => import('./components/UserDropdown.vue')
  }
}
</script>
