<template>
  <d2-container>
    <d2-page-cover
      title="I AM D2ADMIN"
      sub-title="追求简约美感的后台管理系统集成方案">
      <img src="./image/icon.png">
      <div slot="footer" class="index-btn-group">
        <a href="https://github.com/d2-projects/d2-admin" target="blank">主页</a> | 
        <a href="http://d2admin.fairyever.com/zh/" target="blank">文档</a> | 
        <a href="https://github.com/d2-projects/d2-admin/issues" target="blank">issue</a> | 
        <a href="https://github.com/d2-projects/d2-admin/issues/new" target="blank">提问</a>
      </div>
    </d2-page-cover>
  </d2-container>
</template>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.index-btn-group {
  color: $color-text-placehoder;
  a {
    color: $color-text-sub;
    &:hover {
      color: $color-text-main;
    }
  }
}
</style>

