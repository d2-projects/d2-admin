<template>
  <el-menu-item :index="menu.path">
    <i :class="`fa fa-${menu.icon}`"></i>
    <span slot="title">{{menu.title}}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'D2MenuItem',
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
}
</script>
