<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <PageHeader
        slot="header"
        title="图标组件"
        url="https://github.com/FairyEver/d2admin-vue-element/blob/master/src/components/core/Icon/index.vue">
      </PageHeader>
      <Icon></Icon>
      <Icon name="github"></Icon>
      <Icon name="github" style="font-size: 100px;"></Icon>
      <Icon name="github" class="icon-class-demo"></Icon>
    </el-card>
    <el-card>
      <Markdown url="/static/md/组件 - 图标组件.md"></Markdown>
    </el-card>
  </Container>
</template>

<style lang="scss">
.icon-class-demo {
  transition: all .3s;
  font-size: 100px;
  color: #409EFF;
  cursor: pointer;
  user-select: none;
  &:hover{
    color: #F56C6C;
    transform: scale(1.2) rotate(30deg);
  }
}
</style>
