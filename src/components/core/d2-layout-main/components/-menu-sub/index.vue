<template>
  <el-submenu :index="menu.path || uniqueid">
    <template slot="title">
      <i :class="`fa fa-${menu.icon || 'folder-o'}`"></i>
      <span slot="title">{{menu.title}}</span>
    </template>
    <template v-for="(child, childIndex) in menu.children">
      <d2-layout-main-menu-item v-if="child.children === undefined" :menu="child" :key="childIndex"/>
      <d2-layout-main-menu-sub v-else :menu="child" :key="childIndex"/>
    </template>
  </el-submenu>
</template>

<script>
import _uniqueid from 'lodash.uniqueid'
// 组件
import d2LayoutMainMenuItem from '../-menu-item/index.vue'

export default {
  name: 'd2-layout-main-menu-sub',
  components: {
    'd2-layout-main-menu-item': d2LayoutMainMenuItem
  },
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data () {
    return {
      uniqueid: _uniqueid('d2-menu-empty-')
    }
  }
}
</script>
