<template>
  <div>
    <el-menu
      :collapse="collapse"
      :unique-opened="true"
      :router="true">
      <template v-for="(menu, menuIndex) in menus">
        <d2-layout-main-menu-item v-if="menu.children === undefined" :menu="menu" :key="menuIndex"/>
        <d2-layout-main-menu-sub v-else :menu="menu" :key="menuIndex"/>
      </template>
    </el-menu>
    <!-- <div v-if="sideMenu.filter(e => e.title).length === 0 && !collapse" class="d2-menu-side-empty">
      没有菜单
    </div> -->
  </div>
</template>

<script>
import { side } from '@/menu/index.js'
export default {
  name: 'd2-layout-main-menu-side',
  props: {
    collapse: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    'd2-layout-main-menu-item': () => import('../-menu-item/index.vue'),
    'd2-layout-main-menu-sub': () => import('../-menu-sub/index.vue')
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
