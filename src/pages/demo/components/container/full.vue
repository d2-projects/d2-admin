<template>
  <d2-container type="full">
    <template slot="header">
      我是插入到 header 中的内容
    </template>
    <d2-markdown :source="doc"/>
    <template slot="footer">
      <d2-demo-link-btn title="D2Admin" link="https://github.com/FairyEver/d2admin-vue-element"/>
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
