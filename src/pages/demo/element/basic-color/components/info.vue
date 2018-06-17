<template>
  <div class="info" :class="theme">
    <p>{{name}}</p>
    <p>{{sass}}</p>
    <p>{{color}}</p>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: false,
      default: 'light' // dark
    },
    name: {
      type: String,
      required: false,
      default: ''
    },
    sass: {
      type: String,
      required: false,
      default: ''
    },
    color: {
      type: String,
      required: false,
      default: ''
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
