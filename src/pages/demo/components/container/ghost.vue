<template>
  <d2-container type="ghost">
    <el-card shadow="never" style="width: 50%;">
      <d2-markdown :md="doc"/>
    </el-card>
  </d2-container>
</template>

<script>
import doc from './md/doc-ghost.md'
export default {
  data () {
    return {
      doc
    }
  }
}
</script>
