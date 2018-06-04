<template>
  <div>
    <el-menu
      :collapse="collapse"
      :unique-opened="true"
      :router="true">
      <dd-menu v-for="(menu, menuIndex) in menus" :menu="menu" :key="menuIndex"/>
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
    ddMenu: () => import('./components/ddMenu.vue')
  },
  data () {
    return {
      menus: [
        {
          path: '/demo/components/container/container-full',
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
                  path: '/d',
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
