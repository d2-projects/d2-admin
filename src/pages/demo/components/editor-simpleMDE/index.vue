<template>
  <d2-container>
    <d2-demo-page-header slot="header" title="基本示例"/>
    <d2-mde
      v-model="text"
      class="mde"/>
    <el-card shadow="never">
      <pre>{{text}}</pre>
    </el-card>
  </d2-container>
</template>

<script>
import text from './text'
export default {
  data () {
    return {
      text
    }
  }
}
</script>

<style lang="scss" scoped>
.mde {
  margin-bottom: -16px;
}
</style>
