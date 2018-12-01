<template>
  <d2-container :filename="filename" type="card">
    <d2-module-index :banner="banner"/>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      filename: __filename,
      banner: {
        title: 'FRAME',
        subTitle: '在 D2Admin 中嵌入其它页面'
      }
    }
  }
}
</script>
