<template>
  <Container type="card-full">
    <template slot="header">
      <div class="page-index-header">
        <div class="dd-fl">
          <span class="page-index-header__title">
            Welcome
          </span>
        </div>
        <div class="dd-fr">
          <el-button>
            <Icon name="github"></Icon>
            Github
          </el-button>
        </div>
      </div>
    </template>
    <div class="page-index-body">
      <img class="page-index-body__logo" src="@/assets/image/logo/w500.png">
      <p class="page-index-body__title">欢迎你，朋友。这是D2Admin</p>
      <p class="page-index-body__sub-title">一个追求简洁和上手即用的前端模板</p>
    </div>
  </Container>
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
