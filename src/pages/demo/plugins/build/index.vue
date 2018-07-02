<template>
  <d2-container>
    <template slot="header">环境区分</template>
    <p>当前是{{$env === 'development' ? '开发' : '生产'}}环境</p>
  </d2-container>
</template>