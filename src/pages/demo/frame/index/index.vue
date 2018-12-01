<template>
  <d2-container :filename="filename" type="ghost">
    <d2-module-banner slot="header" v-bind="banner"/>
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
