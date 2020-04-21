<template>
  <d2-container type="ghost">
    <d2-module-index-banner slot="header" v-bind="banner"/>
    <d2-module-index-menu :menu="menu"/>
  </d2-container>
</template>

<script>
import menu from '@/menu/modules/demo-d2-crud'
export default {
  data () {
    return {
      menu,
      banner: {
        title: 'D2 CRUD v2',
        subTitle: 'D2 Crud 是一个基于 Vue.js 和 Element UI 的表格组件，封装了常用的表格操作。',
        link: 'https://github.com/d2-projects/d2-crud'
      }
    }
  }
}
</script>
