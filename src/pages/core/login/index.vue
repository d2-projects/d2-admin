<template>
  <div class="login-page">
    <div class="layer bg" id="login"></div>
    <div class="layer">
      <el-card class="form-group"></el-card>
    </div>
  </div>
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
.login-page {
  background-color: #EDF4FA;
  height: 100%;
  position: relative;
  // 层
  .layer {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  // 登陆表单
  .form-group {
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
  }
  // 背景
  .bg {
    canvas {
      display: block;
      margin: 0px;
      padding: 0px;
    }
  }
}
</style>

