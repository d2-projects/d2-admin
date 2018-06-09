<template>
  <div class="d2-header-right">
    <FullScreen></FullScreen>
    <UserDropdown></UserDropdown>
  </div>
</template>

<script>
export default {
  name: 'HeaderRight',
  components: {
    FullScreen: () => import('./components/FullScreen.vue'),
    UserDropdown: () => import('./components/UserDropdown.vue')
  }
}
</script>
