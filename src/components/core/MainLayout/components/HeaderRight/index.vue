<template>
  <div class="dd-header-right">
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
