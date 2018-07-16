<template>
  <div class="info" :class="theme">
    <p class="name">{{name}}</p>
    <p class="sass">{{sass}}</p>
    <p class="color">{{color}}</p>
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
  padding: 10px;
  p {
    margin: 0px;
  }
  .name {
    font-size: 16px;
    font-weight: bold;
  }
  .sass {
    font-size: 12px;
    margin-top: 4px;
  }
  .color {
    font-size: 12px;
    opacity: .7;
    margin-top: 2px;
  }
  &.dark {
    color: #333;
  }
  &.light {
    color: #FFF;
  }
}
</style>
