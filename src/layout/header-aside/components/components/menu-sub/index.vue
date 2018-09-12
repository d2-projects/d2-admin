<template>
  <el-submenu :index="handleMenuIndex(menu)">
    <template slot="title">
      <i v-if="menu.meta.icon" :class="`fa fa-${menu.meta.icon}`"></i>
      <d2-icon-svg v-else-if="menu.meta.iconSvg" :name="menu.meta.iconSvg"/>
      <i v-else class="fa fa-folder-o"></i>
      <span slot="title">{{menu.meta.title}}</span>
    </template>
    <template v-for="(child, childIndex) in menu.children">
      <d2-layout-header-aside-menu-item v-if="child.children === undefined" :menu="child" :key="childIndex"/>
      <d2-layout-header-aside-menu-sub v-else :menu="child" :key="childIndex"/>
    </template>
  </el-submenu>
</template>

<script>
import indexMixin from '../mixin'
// 组件
import d2LayoutMainMenuItem from '../menu-item'

export default {
  name: 'd2-layout-header-aside-menu-sub',
  mixins: [
    indexMixin
  ],
  components: {
    'd2-layout-header-aside-menu-item': d2LayoutMainMenuItem
  },
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
}
</script>
