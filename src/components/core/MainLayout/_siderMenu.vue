<template>
  <el-menu class="el-menu-vertical-demo" v-bind="elMenu">
    <template v-for="(menu, index) in sideMenu">
      <el-menu-item
        v-if="!menu.children"
        :key="index"
        :index="`${menu.title}${index}`"
        @click.native="$router.push({name: menu.name})">
        <i v-if="menu.icon" :class="'fa fa-' + menu.icon"></i>
        {{menu.title}}
      </el-menu-item>
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
</template>

<script>
import { mapState } from 'vuex'
import { menu, router } from '@/router/menu/index.js'
export default {
  data () {
    return {
      menu,
      router,
      elMenu: {
        collapse: false,
        uniqueOpened: true
      }
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
