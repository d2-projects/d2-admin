<template>
  <Container type="card-full">
    <template slot="header">
      我是插入到 header 中的内容
    </template>
    <Markdown url="/static/md/演示文章 - 长页面.md"></Markdown>
    <template slot="footer">
      我是插入到 footer 中的内容
    </template>
  </Container>
</template>
