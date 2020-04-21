<template>
  <d2-container type="ghost">
    <div class="d2-pt d2-pb">
      <el-card shadow="never" class="d2-card" style="width: 400px;">
        <d2-demo-article/>
      </el-card>
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
