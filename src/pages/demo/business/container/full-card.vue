<template>
  <Container type="full-card">
    <template slot="header">
      我是插入到 header 中的内容
    </template>
    <p v-for="(i, index) in 100" :key="index">{{i}}</p>
  </Container>
</template>
