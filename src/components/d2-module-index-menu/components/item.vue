<template>
  <el-button
    class="d2-module-index-menu-item"
    @click="handleMenuSelect(menu.path)">
    {{menu.title}}
  </el-button>
</template>

<script>
import mixinMenu from '@/layout/header-aside/components/mixin/menu'
export default {
  mixins: [
    mixinMenu
  ],
  props: {
    menu: {
      default: () => ({})
    }
  }
}
</script>

<style lang="scss">
.d2-module-index-menu-item {
  margin-bottom: 10px;
}
</style>
