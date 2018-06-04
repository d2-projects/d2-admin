<template>
  <el-menu
    mode="horizontal"
    :router="true">
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
