<template>
  <el-menu
    mode="horizontal"
    :router="true">
    <template v-for="(menu, menuIndex) in menus">
      <d2-menu-item v-if="menu.children === undefined" :menu="menu" :key="menuIndex"/>
      <d2-submenu v-else :menu="menu" :key="menuIndex"/>
    </template>
  </el-menu>
</template>

<script>
import menus from '@/menu/index.js'
export default {
  name: 'd2-layout-main-header-menu',
  components: {
    'd2-menu-item': () => import('../d2-menu-item/index.vue'),
    'd2-sub-menu': () => import('../d2-sub-menu/index.vue')
  },
  data () {
    return {
      menus
    }
  }
}
</script>
