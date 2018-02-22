<template>
  <Container>
    <PageHeader
      slot="header"
      title="SVG图标组件">
    </PageHeader>
    <el-row>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 150px;
}
.icon {
  height: 80px;
  width: 80px;
}
.icon-title {
  font-size: 12px;
  margin-top: 10px;
  span {
    color: $color-text-sub;
  }
}
</style>
