<template>
  <el-menu mode="horizontal" @select="handleMenuSelect">
    <template v-for="(menu, menuIndex) in menus">
      <d2-layout-main-menu-item v-if="menu.children === undefined" :menu="menu" :key="menuIndex"/>
      <d2-layout-main-menu-sub v-else :menu="menu" :key="menuIndex"/>
    </template>
  </el-menu>
</template>

<script>
import menus from '@/menu/index';
import menuMixin from '../mixin/menu';
// 组件
import d2LayoutMainMenuItem from '../-menu-item/index.vue';
import d2LayoutMainMenuSub from '../-menu-sub/index.vue';

export default {
  name: 'd2-layout-main-menu-header',
  mixins: [
    menuMixin,
  ],
  components: {
    'd2-layout-main-menu-item': d2LayoutMainMenuItem,
    'd2-layout-main-menu-sub': d2LayoutMainMenuSub,
  },
  data() {
    return {
      menus,
    };
  },
};
</script>
