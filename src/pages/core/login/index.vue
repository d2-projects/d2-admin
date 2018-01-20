<template>
  <div class="login" id="login"></div>
</template>

<script>
/* eslint-disable */
require('particles.js')
// 配置地址
// https://vincentgarreau.com/particles.js/#default
import config from './config/nasa'
export default {
  mounted () {
    particlesJS('login', config)
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.login {
  height: 100%;
  width: 100%;
  background-color: $color-text-main;
}
</style>

