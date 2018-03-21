<template>
  <div>
    <el-menu
      v-if="sideMenu.filter(e => e.title).length > 0"
      class="dd-side-menu"
      :collapse="collapse"
      :unique-opened="true">
      <template v-for="(menu, index) in sideMenu">
        <!-- 没有子菜单的菜单项 -->
        <el-menu-item
          v-if="!menu.children && menu.title"
          :key="index"
          :index="`${menu.title}${index}`"
          @click.native="$router.push({name: menu.name})">
          <i v-if="menu.icon" :class="'fa fa-' + menu.icon"></i>
          <span slot="title">{{menu.title}}</span>
        </el-menu-item>
        <!-- 有子菜单的项目 -->
        <el-submenu
          v-if="menu.children"
          :key="index"
          :index="`${menu.title}${index}`">
          <template slot="title">
            <i v-if="menu.icon" :class="'fa fa-' + menu.icon"></i>
            <span slot="title">{{menu.title}}</span>
          </template>
          <el-menu-item
            v-for="(menuItem, menuItemIndex) in menu.children"
            :key="menuItemIndex"
            :index="`${menuItem.name}${menuItemIndex}`"
            @click.native="$router.push({name: menuItem.name})">
            <i v-if="menuItem.icon" :class="'fa fa-' + menuItem.icon"></i>
            {{menuItem.title}}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
    <div v-if="sideMenu.filter(e => e.title).length === 0 && !collapse" class="dd-side-menu-empty">
      没有菜单
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { menu, router } from '@/router/menu/index.js'
export default {
  props: {
    collapse: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      menu,
      router
    }
  },
  computed: {
    ...mapState({
      sideMenu: state => state.menu.sideMenu
    })
  }
}
</script>

<style lang="scss">
.dd-side-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
