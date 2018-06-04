<template>
  <div>
    <el-menu
      :collapse="collapse"
      :unique-opened="true"
      :router="true">
      <template v-for="(menu, menuIndex) in menus">
        <ddMenuItem v-if="menu.children === undefined" :menu="menu" :key="menuIndex"/>
        <dd-menu-have-children v-else :menu="menu" :key="menuIndex"/>
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
    ddMenuItem: () => import('./components/ddMenuItem.vue'),
    ddMenuHaveChildren: () => import('./components/ddMenuHaveChildren.vue')
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
