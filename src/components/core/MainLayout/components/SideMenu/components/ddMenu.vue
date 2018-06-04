<template>
  <div>
    <el-menu-item v-if="menu.children === undefined" :index="menu.path">
      <i :class="`fa fa-${menu.icon}`"></i>
      <span slot="title">{{menu.title}}</span>
    </el-menu-item>
    <el-submenu v-else :index="menu.path">
      <template slot="title">
        <i :class="`fa fa-${menu.icon}`"></i>
        <span slot="title">{{menu.title}}</span>
      </template>
      <dd-menu v-for="(child, childIndex) in menu.children" :menu="child" :key="childIndex"/>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'dd-menu',
  props: {
    menu: {
      require: false,
      default: () => []
    }
  }
}
</script>
