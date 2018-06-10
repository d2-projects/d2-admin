<template>
  <d2-container type="ghost">
    <el-card class="d2-mb">
      <PageHeader slot="header" title="基本示例"></PageHeader>
      <d2-mde
        v-model="text"
        class="mde"/>
    </el-card>
    <el-card>
      <template slot="header">输出</template>
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
