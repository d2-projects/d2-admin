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
        title: 'D2 CRUD',
        subTitle: 'D2 Crud 是一个基于 Vue.js 和 Element UI 的表格组件，封装了常用的表格操作。',
        link: 'https://github.com/d2-projects/d2-crud'
      }
    }
  }
}
</script>
