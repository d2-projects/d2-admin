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
  name: 'HeaderMenu',
  components: {
    D2MenuItem: () => import('../D2MenuItem/index.vue'),
    D2Submenu: () => import('../D2Submenu/index.vue')
  },
  data () {
    return {
      menus
    }
  }
}
</script>
