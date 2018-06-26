<template>
  <div style="height: 100%;">
    <el-scrollbar v-if="menus.length > 0 && !collapse">
      <div :style="{ height: `${asideHeight}px` }">
        <el-menu
          :collapse="collapse"
          :unique-opened="true"
          @select="handleMenuSelect">
          <template v-for="(menu, menuIndex) in menus">
            <d2-layout-main-menu-item v-if="menu.children === undefined" :menu="menu" :key="menuIndex"/>
            <d2-layout-main-menu-sub v-else :menu="menu" :key="menuIndex"/>
          </template>
        </el-menu>
      </div>
    </el-scrollbar>
    <div v-if="menus.length === 0 && !collapse" class="menu-empty">
      <d2-icon name="hdd-o"/>
      <span>当前目录没有菜单</span>
    </div>
  </div>
</template>

<script>
import { side } from '@/menu/index.js'
import menuMixin from '../mixin/menu'
export default {
  name: 'd2-layout-main-menu-side',
  mixins: [
    menuMixin
  ],
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
      menus: [],
      asideHeight: 300
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
  },
  mounted () {
    this.updateAsideHeight()
    window.onresize = () => {
      this.updateAsideHeight()
    }
  },
  beforeDestroy () {
    window.onresize = function () {}
  },
  methods: {
    updateAsideHeight () {
      this.asideHeight = this.$el.offsetHeight
    }
  }
}
</script>
