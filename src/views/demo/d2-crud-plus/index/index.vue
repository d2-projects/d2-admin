<template>
  <d2-container type="ghost">
    <d2-module-index-banner slot="header" v-bind="banner"/>
    <el-tabs v-model="tab">
      <el-tab-pane label="效果" name="result">
        <img src="./image/gif.webp" style="width: 600px; border: 1px solid #E4E7ED; border-radius: 4px;">
      </el-tab-pane>
      <el-tab-pane label="代码" name="code">
        <d2-highlight :code="code" lang="javascript"/>
      </el-tab-pane>
    </el-tabs>
  </d2-container>
</template>

<script>
import code from './code'

export default {
  data () {
    return {
      code,
      tab: 'result',
      banner: {
        title: 'D2 CRUD PLUS',
        subTitle: 'D2 Crud Plus 是一个面向配置的Crud开发框架，辅助d2-crud和d2-crud-x，让开发crud更简单',
        link: 'https://github.com/greper/d2-crud-plus'
      }
    }
  }
}
</script>
