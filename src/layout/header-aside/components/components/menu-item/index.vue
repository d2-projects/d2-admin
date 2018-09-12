<template>
  <el-menu-item :index="handleMenuIndex(menu)">
    <i v-if="menu.meta.icon" :class="`fa fa-${menu.meta.icon}`"></i>
    <d2-icon-svg v-else-if="menu.meta.iconSvg" :name="menu.meta.iconSvg"/>
    <i v-else class="fa fa-file-o"></i>
    <span slot="title">{{menu.meta.title || '未命名菜单'}}</span>
  </el-menu-item>
</template>

<script>
import indexMixin from '../mixin'
export default {
  name: 'd2-layout-header-aside-menu-item',
  mixins: [
    indexMixin
  ],
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
}
</script>
