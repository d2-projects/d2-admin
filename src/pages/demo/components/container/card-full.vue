<template>
  <Container type="card-full">
    <template slot="header">
      我是插入到 header 中的内容
    </template>
    <Markdown url="/static/md/组件 - 页面容器 - 撑满.md"></Markdown>
    <template slot="footer">
      我是插入到 footer 中的内容
    </template>
  </Container>
</template>
