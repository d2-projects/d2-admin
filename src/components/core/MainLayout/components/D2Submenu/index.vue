<template>
  <el-submenu :index="menu.path">
    <template slot="title">
      <i v-if="menu.icon" :class="`fa fa-${menu.icon}`"></i>
      <span slot="title">{{menu.title}}</span>
    </template>
    <template v-for="(child, childIndex) in menu.children">
      <d2-menu-item v-if="child.children === undefined" :menu="child" :key="childIndex"/>
      <d2-submenu v-else :menu="child" :key="childIndex"/>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: 'D2Submenu',
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  components: {
    D2MenuItem: () => import('../D2MenuItem/index.vue')
  }
}
</script>
