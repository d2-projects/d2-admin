<template>
  <d2-container :filename="filename">
    <d2-page-cover
      title="示例"
      sub-title="供借鉴和参考的页面">
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
