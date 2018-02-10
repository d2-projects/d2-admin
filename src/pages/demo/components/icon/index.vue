<template>
  <Container>
    <el-row :gutter="10">
      <el-col :span="4">
        <div>
          <Icon></Icon>
        </div>
        <div>
          <Icon name="github"></Icon>
        </div>
        <div>
          <Icon name="github" style="font-size: 100px;"></Icon>
        </div>
        <div>
          <Icon name="github" class="icon-class-demo"></Icon>
        </div>
      </el-col>
      <el-col :span="20">
        <Markdown url="/static/markdownFiles/article/组件 - 图标组件.md"></Markdown>
      </el-col>
    </el-row>
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
