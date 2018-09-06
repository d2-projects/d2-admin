<template>
  <div class="page">
    <div class="page_img">
      <div class="image" style="background-image: url('/image/404.svg')"></div>
    </div>
    <div class="page_content">
      <h1 class="d2-m-0 d2-mb">404</h1>
      <p class="d2-m-0 page_title">抱歉，你访问的页面不存在</p>
      <el-button class="d2-mt" type="primary" @click="$router.replace({ path: '/' })">
        返回首页
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
@import '../style.scss';
</style>
