<template>
  <div>
    <el-menu
      :collapse="collapse"
      :unique-opened="true"
      :router="true">
      <template v-for="(menu, menuIndex) in menus">
        <d2-menu-item v-if="menu.children === undefined" :menu="menu" :key="menuIndex"/>
        <d2-submenu v-else :menu="menu" :key="menuIndex"/>
      </template>
    </el-menu>
    <!-- <div v-if="sideMenu.filter(e => e.title).length === 0 && !collapse" class="d2-side-menu-empty">
      没有菜单
    </div> -->
  </div>
</template>

<script>
import { side } from '@/menu/index.js'
export default {
  name: 'd2-layout-main-side-menu',
  props: {
    collapse: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    'd2-menu-item': () => import('../d2-menu-item/index.vue'),
    'd2-sub-menu': () => import('../d2-sub-menu/index.vue')
  },
  data () {
    return {
      menus: []
    }
  },
  watch: {
    '$route.matched': {
      handler (val) {
        const path = val[0].path
        this.menus = side.filter(menu => menu.path === path)
      },
      immediate: true
    }
  }
}
</script>
