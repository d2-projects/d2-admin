<template>
  <el-submenu :index="menu.path">
    <template slot="title">
      <i v-if="menu.icon" :class="`fa fa-${menu.icon}`"></i>
      <span slot="title">{{menu.title}}</span>
    </template>
    <template v-for="(child, childIndex) in menu.children">
      <d2-layout-main-menu-item v-if="child.children === undefined" :menu="child" :key="childIndex"/>
      <d2-layout-main-menu-sub v-else :menu="child" :key="childIndex"/>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: 'd2-layout-main-menu-sub',
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  components: {
    'd2-layout-main-menu-item': () => import('../-menu-item/index.vue')
  }
}
</script>
