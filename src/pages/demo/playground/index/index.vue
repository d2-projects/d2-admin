<template>
  <d2-container :filename="filename" type="ghost">
    <d2-module-index-banner slot="header" v-bind="banner"/>
    <d2-module-index-menu :menu="menu"/>
  </d2-container>
</template>

<script>
import menu from '@/menu/modules/demo-playground'
export default {
  data () {
    return {
      filename: __filename,
      menu,
      banner: {
        title: 'PLAYGROUND',
        subTitle: '在这里可以测试一些 D2Admin 的系统功能'
      }
    }
  }
}
</script>
