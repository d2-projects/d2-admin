<template>
  <d2-container type="ghost">
    <template slot="header">隐形页面容器头部</template>
    <el-card shadow="never" style="width: 50%;">
      <d2-markdown :source="doc"/>
    </el-card>
  </d2-container>
</template>

<script>
import doc from './md/doc-ghost-header.md'
export default {
  data () {
    return {
      doc
    }
  }
}
</script>
