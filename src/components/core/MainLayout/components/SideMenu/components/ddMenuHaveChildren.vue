<template>
  <el-submenu :index="menu.path">
    <template slot="title">
      <i :class="`fa fa-${menu.icon}`"></i>
      <span slot="title">{{menu.title}}</span>
    </template>
    <template v-for="(child, childIndex) in menu.children">
      <ddMenuItem v-if="child.children === undefined" :menu="child" :key="childIndex"/>
      <dd-menu-have-children v-else :menu="child" :key="childIndex"/>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: 'dd-menu-have-children',
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  components: {
    ddMenuItem: () => import('./ddMenuItem.vue')
  }
}
</script>
