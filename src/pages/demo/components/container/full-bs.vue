<template>
  <d2-container scroll>
    <template slot="header">header</template>
    <d2-markdown :source="doc"/>
    <template slot="footer">header</template>
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
