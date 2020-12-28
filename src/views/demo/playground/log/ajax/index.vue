<template>
  <d2-container>
    <template slot="header">Ajax 错误</template>
    <p class="d2-mt-0">请打开浏览器控制台，然后点击下面的按钮，尝试访问一个不存在的网络地址</p>
    <el-button type="danger" @click="handleClick">请求错误的地址</el-button>
    <p>此错误已经被记录在日志页面，并在页面右上"日志按钮"区域显示提示信息</p>
  </d2-container>
</template>

<script>
import { DEMO_LOG_AJAX } from '@/api/demo.js'

export default {
  methods: {
    handleClick () {
      DEMO_LOG_AJAX()
    }
  }
}
</script>
