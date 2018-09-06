<template>
  <div class="page">
    <div class="page_img">
      <div class="image" style="background-image: url('/image/401.svg')"></div>
    </div>
    <div class="page_content">
      <h1 class="d2-m-0 d2-mb">401</h1>
      <p class="d2-m-0 page_title">抱歉，你无权访问该页面</p>
      <el-button class="d2-mt d2-mr" type="primary" @click="$router.replace({ path: '/' })">
        首 页
      </el-button>
      <el-button class="d2-mt d2-ml" type="primary" @click="$router.back()">
        返 回
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
@import '../style.scss';
</style>
