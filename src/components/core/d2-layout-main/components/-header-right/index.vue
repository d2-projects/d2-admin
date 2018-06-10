<template>
  <div class="d2-header-right">
    <d2-layout-main-header-right-full-screen/>
    <d2-layout-main-header-right-theme/>
    <d2-layout-main-header-right-user/>
  </div>
</template>

<script>
export default {
  name: 'd2-layout-main-header-right',
  components: {
    'd2-layout-main-header-right-full-screen': () => import('./components/-full-screen.vue'),
    'd2-layout-main-header-right-theme': () => import('./components/-theme.vue'),
    'd2-layout-main-header-right-user': () => import('./components/-user.vue')
  }
}
</script>
