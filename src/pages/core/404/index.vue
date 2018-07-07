<template>
  <div class="page-404">
    <img src="@/assets/page-sys/404@2x.png" alt="404">
    <el-button class="d2-mt" @click="$router.replace({ path: '/' })">
      返回首页
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.page-404 {
  background-color: #555555;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 196px;
    @extend %unable-select;
  }
}
</style>
