<template>
  <d2-container type="ghost">
    <d2-module-index-banner slot="header" v-bind="banner"/>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      banner: {
        title: 'ElementUI',
        subTitle: 'D2Admin 集成由饿了么出品的 ElementUI',
        link: 'http://element.eleme.io'
      }
    }
  }
}
</script>
