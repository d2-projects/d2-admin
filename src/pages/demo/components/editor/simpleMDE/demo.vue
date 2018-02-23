<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <PageHeader
        slot="header"
        title="基本示例"
        url="https://github.com/sparksuite/simplemde-markdown-editor">
      </PageHeader>
      <SimpleMDE
        v-model="text"
        class="mde">
      </SimpleMDE>
    </el-card>
    <el-card>
      <template slot="header">输出</template>
      <pre>{{text}}</pre>
    </el-card>
  </Container>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.mde {
  margin-bottom: -16px;
}
</style>
