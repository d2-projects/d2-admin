<template>
  <div class="login" id="login"></div>
</template>

<script>
/* eslint-disable */
require('particles.js')
// 配置地址
// https://vincentgarreau.com/particles.js/#default
import config from './config/default'
export default {
  mounted () {
    particlesJS('login', config)
  }
}
</script>

<style lang="scss">
.login {
  background-color: #EDF4FA;
  height: 100%;
  canvas {
    display: block;
    margin: 0px;
    padding: 0px;
  }
}
</style>

