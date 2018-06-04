<template>
  <div>
    <el-menu
      :collapse="collapse"
      :unique-opened="true"
      :router="true">
      <template v-for="(menu, menuIndex) in menus">
        <dd-menus :menu="menu" :key="menuIndex"/>
      </template>
    </el-menu>
    <!-- <div v-if="sideMenu.filter(e => e.title).length === 0 && !collapse" class="dd-side-menu-empty">
      没有菜单
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    collapse: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    ddMenus: () => import('./components/ddMenus.vue')
  },
  data () {
    return {
      menus: [
        {
          path: '/a',
          title: 'menu-a',
          icon: 'plus'
        },
        {
          path: '/b',
          title: 'menu-b',
          icon: 'plus',
          children: [
            {
              path: '/a',
              title: 'menu-a',
              icon: 'plus'
            }
          ]
        }
      ]
    }
  }
}
</script>
