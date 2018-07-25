<template>
  <d2-container>
    <d2-page-cover
      title="I AM D2ADMIN"
      sub-title="追求简约美感的后台管理系统集成方案">
      <d2-icon-svg style="width: 120px;" name="d2admin"/>
      <div slot="footer" class="index-btn-group">
        <span @click="$open('https://github.com/d2-projects/d2-admin')">主页</span> |
        <span @click="$open('http://d2admin.fairyever.com/zh/')">文档</span> |
        <span @click="$open('https://github.com/d2-projects/d2-admin/issues')">issue</span> |
        <span @click="$open('https://github.com/d2-projects/d2-admin/issues/new')">提问</span>
      </div>
    </d2-page-cover>
  </d2-container>
</template>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.index-btn-group {
  color: $color-text-placehoder;
  span {
    color: $color-text-sub;
    &:hover {
      color: $color-text-main;
    }
  }
}
</style>
