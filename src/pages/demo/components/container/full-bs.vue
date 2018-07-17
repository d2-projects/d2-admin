<template>
  <d2-container type="full" scroll>
    <template slot="header">
      我是插入到 header 中的内容
    </template>
    <d2-markdown :source="doc"/>
    <template slot="footer">
      <d2-demo-link-btn title="D2Admin" link="https://github.com/d2-projects/d2-admin"/>
    </template>
  </d2-container>
</template>

<script>
import doc from './md/doc-full-bs.md'
export default {
  data () {
    return {
      doc
    }
  }
}
</script>
