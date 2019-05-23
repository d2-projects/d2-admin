<template>
  <d2-container type="ghost">
    <d2-module-index-banner slot="header" v-bind="banner"/>
    <d2-module-index-menu :menu="menu"/>
  </d2-container>
</template>

<script>
import menu from '@/menu/modules/demo-frame'
export default {
  data () {
    return {
      menu,
      banner: {
        title: 'FRAME',
        subTitle: '在 D2Admin 中嵌入其它页面'
      }
    }
  }
}
</script>
