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
        title: 'ElementUI',
        subTitle: 'D2Admin 集成由饿了么出品的 ElementUI',
        link: 'http://element.eleme.io'
      }
    }
  }
}
</script>
