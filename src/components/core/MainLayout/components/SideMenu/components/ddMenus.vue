<template>
  <div>
    <el-menu-item v-if="menu.children === undefined" :index="menu.path">
      <i :class="`fa fa-${menu.icon}`"></i>
      <span slot="title">{{menu.title}}</span>
    </el-menu-item>
    <el-submenu v-else index="1">
      <template slot="title">
        <i :class="`fa fa-${menu.icon}`"></i>
        <span slot="title">{{menu.title}}</span>
      </template>
      <el-menu-item :index="menu.path">
        <i :class="`fa fa-${menu.icon}`"></i>
        <span slot="title">{{menu.title}}</span>
      </el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'menus',
  props: {
    menu: {
      require: false,
      default: () => []
    }
  }
}
</script>
