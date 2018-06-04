<template>
  <el-menu
    mode="horizontal"
    :router="true">
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item
      v-for="menu in menus"
      :key="menu.path"
      :index="menu.path">
      {{menu.title}}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {path: '/index', title: '首页'},
        {path: '/demo/plugins', title: '插件'},
        {path: '/demo/components', title: '组件'},
        {path: '/demo/chart', title: '图表'},
        {path: '/demo/business', title: '示例业务界面'}
      ]
    }
  }
}
</script>
