<template>
  <d2-container>
    <template slot="header">捕获错误信息</template>
    <p class="d2-mt-0">请打开浏览器控制台，然后点击下面的按钮</p>
    <el-button type="danger" @click="handleNewError">触发一个错误</el-button>
  </d2-container>
</template>

<script>
export default {
  methods: {
    handleNewError () {
      console.log(a) // eslint-disable-line
    }
  }
}
</script>
