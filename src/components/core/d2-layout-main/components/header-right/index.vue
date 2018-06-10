<template>
  <div class="d2-header-right">
    <FullScreen></FullScreen>
    <UserDropdown></UserDropdown>
  </div>
</template>

<script>
export default {
  name: 'd2-layout-main-header-right',
  components: {
    FullScreen: () => import('./components/FullScreen.vue'),
    UserDropdown: () => import('./components/UserDropdown.vue')
  }
}
</script>
