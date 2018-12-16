<template>
  <div>
    <h1 class="code-title">{{title}}</h1>
    <h2 class="code-title--sub">{{subTitle}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.code-title {
  margin: 0px;
  font-size: 24px;
  font-weight: bold;
  color: $color-text-main;
  margin: 10px 0;
  &:first-child {
    margin-top: 0px;
  }
}
.code-title--sub {
  margin: 0px;
  font-size: 12px;
  font-weight: normal;
  color: $color-text-sub;
  margin: 10px 0;
}
</style>
