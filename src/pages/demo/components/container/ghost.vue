<template>
  <d2-container type="ghost">
    <div class="d2-pt d2-pb">
      <d2-demo-article/>
    </div>
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
