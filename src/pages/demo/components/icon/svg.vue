<template>
  <Container>
    <PageHeader
      slot="header"
      title="SVG图标组件">
    </PageHeader>
    <el-row :gutter="10">
      <el-col class="icon-card" :span="4" v-for="(icon, index) in $IconSvg" :key="index">
        <IconSvg class="icon" :name="icon"></IconSvg>
        <div class="icon-title">
          <span>{{icon}}</span>
        </div>
      </el-col>
    </el-row>
  </Container>
</template>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.icon-card {
  text-align: center;
}
.icon {
  height: 100px;
  width: 100px;
}
.icon-title {
  font-size: 12px;
  span {
    color: $color-text-sub;
  }
}
</style>
