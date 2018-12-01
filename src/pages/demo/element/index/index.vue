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
        title: 'ElementUI',
        subTitle: 'D2Admin 集成由饿了么出品的 ElementUI',
        link: 'http://element.eleme.io'
      }
    }
  }
}
</script>
