<template>
  <div>
    <!-- 没有子元素 -->
    <el-menu-item v-if="menu.children === undefined" :index="menu.path">
      <i :class="`fa fa-${menu.icon}`"></i>
      <span slot="title">{{menu.title}}</span>
    </el-menu-item>
    <!-- 有子元素 -->
    <el-submenu v-else :index="menu.path">
      <template slot="title">
        <i :class="`fa fa-${menu.icon}`"></i>
        <span slot="title">{{menu.title}}</span>
      </template>
      <dd-menus v-for="(child, childIndex) in menu.children" :menu="child" :key="childIndex"/>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'dd-menus',
  props: {
    menu: {
      require: false,
      default: () => []
    }
  }
}
</script>
