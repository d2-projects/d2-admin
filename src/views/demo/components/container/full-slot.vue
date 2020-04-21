<template>
  <d2-container>
    <template slot="header">Header</template>
    <d2-demo-article/>
    <template slot="footer">Footer</template>
  </d2-container>
</template>

<script>
import d2DemoArticle from './components/d2-demo-article'
export default {
  components: {
    'd2-demo-article': d2DemoArticle
  }
}
</script>
