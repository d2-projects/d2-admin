<template>
  <Container type="full-card">
    <template slot="header">
      header
    </template>
    <p v-for="(i, index) in 100" :key="index">{{i}}</p>
  </Container>
</template>
