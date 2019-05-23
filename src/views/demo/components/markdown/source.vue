<template>
  <d2-container>
    <template slot="header">指定资源</template>
    <d2-markdown :source="doc" highlight/>
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
