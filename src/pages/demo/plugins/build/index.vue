<template>
  <d2-container>
    <template slot="header">多环境发布</template>
    <p>当前是{{$env ? '开发' : '生产'}}环境</p>
  </d2-container>
</template>