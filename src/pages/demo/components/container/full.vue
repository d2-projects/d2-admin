<template>
  <d2-container type="full">
    <template slot="header">
      我是插入到 header 中的内容
    </template>
    <d2-markdown :md="doc"/>
    <template slot="footer">
      我是插入到 footer 中的内容
    </template>
  </d2-container>
</template>

<script>
import doc from './md/doc-full.md'
export default {
  data () {
    return {
      doc
    }
  }
}
</script>
