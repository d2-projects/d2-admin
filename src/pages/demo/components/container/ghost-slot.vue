<template>
  <d2-container type="ghost">
    <template slot="header">隐形页面容器 header</template>
    <el-card shadow="never" class="d2-mt d2-mb" style="width: 400px;">
      <d2-markdown :source="doc"/>
    </el-card>
    <template slot="footer">隐形页面容器 footer</template>
  </d2-container>
</template>

<script>
import doc from './md/doc.md'
export default {
  data () {
    return {
      doc
    }
  }
}
</script>
