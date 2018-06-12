<template>
  <d2-container>
    <template slot="header">我是插入到 header 中的内容</template>
    <d2-markdown :source="doc"/>
  </d2-container>
</template>

<script>
import doc from './md/doc-card.md'
export default {
  data () {
    return {
      doc
    }
  }
}
</script>
