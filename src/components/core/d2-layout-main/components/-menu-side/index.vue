<template>
  <div class="d2-layout-main-menu-side">
    <el-menu
      :collapse="collapse"
      :unique-opened="true"
      :default-active="active"
      ref="menu"
      @select="handleMenuSelect">
      <template v-for="(menu, menuIndex) in menus">
        <d2-layout-main-menu-item v-if="menu.children === undefined" :menu="menu" :key="menuIndex"/>
        <d2-layout-main-menu-sub v-else :menu="menu" :key="menuIndex"/>
      </template>
    </el-menu>
    <div v-if="menus.length === 0 && !collapse" class="menu-empty">
      <d2-icon name="hdd-o"/>
      <span>当前目录没有菜单</span>
    </div>
  </div>
</template>

<script>
// 插件
import BScroll from 'better-scroll';
import { side } from '@/menu/index';
import menuMixin from '../mixin/menu';
import d2LayoutMainMenuItem from '../-menu-item/index.vue';
import d2LayoutMainMenuSub from '../-menu-sub/index.vue';

export default {
  name: 'd2-layout-main-menu-side',
  mixins: [
    menuMixin,
  ],
  components: {
    'd2-layout-main-menu-item': d2LayoutMainMenuItem,
    'd2-layout-main-menu-sub': d2LayoutMainMenuSub,
  },
  props: {
    collapse: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      menus: [],
      active: '',
      asideHeight: 300,
      BS: null,
    };
  },
  watch: {
    // 折叠和展开菜单的时候销毁 better scroll
    collapse() {
      this.scrollDestroy();
      setTimeout(() => {
        this.scrollInit();
      }, 500);
    },
    '$route.matched': {
      handler(val) {
        const [{ path }] = val;
        const sideFilter = side.filter(menu => menu.path === path);
        this.menus = sideFilter.length > 0 ? sideFilter[0].children : [];
        this.active = val[val.length - 1].path;
        this.$nextTick(() => {
          if (this.menus.length > 0) {
            this.$refs.menu.activeIndex = this.active;
          }
        });
      },
      immediate: true,
    },
  },
  mounted() {
    this.scrollInit();
  },
  beforeDestroy() {
    this.scrollDestroy();
  },
  methods: {
    scrollInit() {
      this.BS = new BScroll(this.$el, {
        mouseWheel: true,
        scrollbar: {
          fade: true,
          interactive: false,
        },
      });
    },
    scrollDestroy() {
      if (this.BS) {
        this.BS.destroy();
      }
    },
  },
};
</script>
