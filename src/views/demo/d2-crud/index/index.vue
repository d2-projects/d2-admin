<template>
  <d2-container type="ghost">
    <d2-module-index-banner slot="header" v-bind="banner"/>
    <el-alert
      title="目前 d2-crud 已经升级至 2.x，并且和 1.x 存在一些 API 不兼容，如果您使用的是 1.x，请点击此消息跳转至旧版示例"
      type="warning"
      :closable="false"
      class="d2-mt"
      show-icon
      @click.native="$open('https://v1.d2-crud.fairyever.com/#/d2-crud/index')">
    </el-alert>
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
