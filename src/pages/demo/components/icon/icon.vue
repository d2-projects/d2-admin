<template>
  <d2-container type="ghost">
    <el-card class="d2-mb">
      <d2-demo-page-header slot="header" title="图标组件"/>
      <d2-icon/>
      <d2-icon name="github"/>
      <d2-icon name="github" style="font-size: 100px;"/>
      <d2-icon name="github" class="icon-class-demo"/>
    </el-card>
    <el-card>
      <d2-markdown url="/static/md/组件 - 图标组件.md"/>
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
