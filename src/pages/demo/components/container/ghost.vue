<template>
  <d2-container type="ghost">
    <div class="d2-pt d2-pb">
      <el-card shadow="never" style="width: 600px;">
        <d2-markdown :source="long"/>
      </el-card>
    </div>
  </d2-container>
</template>

<script>
import long from './md/long.md'
export default {
  data () {
    return {
      long
    }
  }
}
</script>
