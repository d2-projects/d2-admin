<template>
  <d2-container :filename="filename">
    <d2-page-cover
      title="试验台"
      sub-title="在这里可以测试一些 D2Admin 的系统功能">
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
