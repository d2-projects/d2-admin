<template>
  <div class="btn-group">
    <FullScreen></FullScreen>
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
