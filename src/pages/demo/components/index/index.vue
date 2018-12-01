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
        title: 'COMPONENTS',
        subTitle: 'D2Admin 为你提供了一些上手即用的组件'
      }
    }
  }
}
</script>
