<template>
  <d2-container :filename="filename" type="ghost">
    <d2-module-index-banner slot="header" v-bind="banner"/>
    <d2-module-index-menu :menu="menu"/>
  </d2-container>
</template>

<script>
import menu from '@/menu/modules/demo-components'
export default {
  data () {
    return {
      filename: __filename,
      menu,
      banner: {
        title: 'COMPONENTS',
        subTitle: 'D2Admin 为你提供了一些上手即用的组件'
      }
    }
  }
}
</script>
