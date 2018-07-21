<template>
  <d2-container>
    <template slot="header">header</template>
    <d2-markdown :source="doc"/>
    <template slot="footer">footer</template>
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
