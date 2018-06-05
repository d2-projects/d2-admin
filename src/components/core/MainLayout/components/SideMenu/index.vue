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
    D2MenuItem: () => import('./components/D2MenuItem.vue'),
    D2Submenu: () => import('./components/D2Submenu.vue')
  },
  data () {
    return {
      menus: [
        {
          path: '/demo/components/container/full',
          title: 'menu-a',
          icon: 'plus'
        },
        {
          path: '/b',
          title: 'menu-b',
          icon: 'plus',
          children: [
            {
              path: '/c-1',
              title: 'menu-a',
              icon: 'plus'
            },
            {
              path: '/c',
              title: 'menu-a',
              icon: 'plus',
              children: [
                {
                  path: '/d',
                  title: 'menu-a',
                  icon: 'plus'
                },
                {
                  path: '/demo/components/container/full',
                  title: 'menu-a',
                  icon: 'plus'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
