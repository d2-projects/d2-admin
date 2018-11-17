<template>
  <d2-container :filename="filename">
    <d2-page-cover
      title="图表"
      sub-title="集成图表组件">
      <img src="./image/icon.png">
    </d2-page-cover>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      filename: __filename
    }
  }
}
</script>
