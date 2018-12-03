<template>
  <el-button
    class="d2-module-index-menu-item"
    @click="handleClick">
    {{menu.title}}
  </el-button>
</template>

<script>
export default {
  props: {
    menu: {
      default: () => ({})
    }
  },
  methods: {
    handleClick () {
      if (this.menu.path) {
        this.$router.push(this.menu.path)
      }
    }
  }
}
</script>

<style lang="scss">
.d2-module-index-menu-item {
  margin-bottom: 10px;
}
</style>
