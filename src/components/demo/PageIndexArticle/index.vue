<template>
  <div class="page-index-body">
    <img class="page-index-body__logo" src="@/assets/image/logo/w500.png">
    <p class="page-index-body__title">这是D2Admin</p>
    <p class="page-index-body__sub-title dd-mt-0">一个追求简洁和上手即用的前端模板</p>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.page-index-header {
  overflow: hidden;
  .page-index-header__title {
    display: inline-block;
    padding: 12px 20px;
  }
}
.page-index-body {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .page-index-body__logo {
    width: 200px;
  }
  .page-index-body__title {
    color: $color-text-main;
  }
  .page-index-body__sub-title {
    color: $color-text-sub;
  }
}
</style>
