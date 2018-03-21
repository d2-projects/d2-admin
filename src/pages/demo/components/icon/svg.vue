<template>
  <Container type="ghost">
    <el-card class="dd-mb">
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
    </el-card>
    <el-card>
      <Markdown url="/static/md/组件 - 图标组件 - svg.md"></Markdown>
    </el-card>
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
  &:hover {
    .icon {
      transform: scale(1.1);
    }
    .icon-title {
      color: $color-text-main;
    }
  }
}
.icon {
  height: 80px;
  width: 80px;
  transition: all .3s;
  cursor: pointer;
}
.icon-title {
  font-size: 12px;
  margin-top: 10px;
  color: $color-text-placehoder;
}
</style>
