<template>
  <d2-container type="ghost">
    <el-card shadow="never" class="d2-mt" style="width: 50%;">
      <d2-markdown :source="doc"/>
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
