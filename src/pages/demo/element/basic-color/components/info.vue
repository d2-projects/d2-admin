<template>
  <div class="info" :class="theme">
    <p>颜色名称</p>
    <p>scss名称</p>
    <p>颜色值</p>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: false,
      default: 'light' // dark
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  &.light {
    color: #FFF;
  }
}
</style>
