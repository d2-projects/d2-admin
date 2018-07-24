<template>
  <d2-container type="card">
    <template slot="header">环境信息</template>
    <el-alert
      :title="`this.$env = ${$env}`"
      type="info"
      class="d2-mb">
    </el-alert>
    <el-card shadow="never">
      <p class="d2-mt-0">process.env.NODE_ENV = {{env}}</p>
      <p>process.env.BASE_URL = {{baseUrl}}</p>
      <p class="d2-mb-0">process.env.VUE_APP_TITLE = {{title}}</p>
    </el-card>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      env: process.env.NODE_ENV,
      baseUrl: process.env.BASE_URL,
      title: process.env.VUE_APP_TITLE
    }
  }
}
</script>

