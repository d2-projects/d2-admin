<template>
  <Container type="card-full">
    <template slot="header">
      <div class="page-plugin-index-header">
        <div class="dd-fl">
          <span class="page-plugin-index-header__title">
            插件
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
    <div class="page-plugin-index-body">
      <img class="page-plugin-index-body__logo" src="@/assets/image/logo/w500-plugin.png">
      <p class="page-plugin-index-body__title">插件演示</p>
      <p class="page-plugin-index-body__sub-title dd-mt-0">D2Admin 集成了许多实用插件</p>
    </div>
  </Container>
</template>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.page-plugin-index-header {
  overflow: hidden;
  .page-plugin-index-header__title {
    display: inline-block;
    padding: 12px 20px;
  }
}
.page-plugin-index-body {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .page-plugin-index-body__logo {
    width: 200px;
  }
  .page-plugin-index-body__title {
    color: $color-text-main;
  }
  .page-plugin-index-body__sub-title {
    color: $color-text-sub;
  }
}
</style>
