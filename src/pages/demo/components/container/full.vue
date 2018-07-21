<template>
  <d2-container>
    <d2-markdown :source="doc"/>
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
