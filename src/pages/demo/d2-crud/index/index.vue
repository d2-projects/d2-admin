<template>
  <d2-container :filename="filename">
    <d2-page-cover
      title="D2 CRUD"
      sub-title="表格封装">
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
