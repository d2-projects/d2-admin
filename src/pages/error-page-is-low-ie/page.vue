<template>
  <div class="page">
    <img src="./image/icon@2x.png" class="icon">
    <p class="title">您的 IE 浏览器版本过低</p>
    <p class="sub-title">请使用 IE 11+</p>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.page {
  @extend %full;
  @extend %flex-center-col;
  background-color: #EDF4FA;
  .icon {
    width: 42px;
  }
  .title {
    font-size: 14px;
    color: #35495E;
  }
  .sub-title {
    font-size: 12px;
    color: #35495E;
    margin: 0px;
  }
}
</style>
