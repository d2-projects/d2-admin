<template>
  <Container type="full">
    <template slot="header">
      多环境发布
    </template>
    <p>当前是{{$env ? '开发' : '生产'}}环境</p>
  </Container>
</template>