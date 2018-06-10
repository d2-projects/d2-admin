<template>
  <d2-container type="ghost">
    <el-card class="d2-mb">
      <PageHeader
        slot="header"
        title="图标组件"
        url="https://github.com/FairyEver/d2admin-vue-element/blob/master/src/components/core/Icon/index.vue">
      </PageHeader>
      <d2-icon></d2-icon>
      <d2-icon name="github"></d2-icon>
      <d2-icon name="github" style="font-size: 100px;"></d2-icon>
      <d2-icon name="github" class="icon-class-demo"></d2-icon>
    </el-card>
    <el-card>
      <Markdown url="/static/md/组件 - 图标组件.md"></Markdown>
    </el-card>
  </d2-container>
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
