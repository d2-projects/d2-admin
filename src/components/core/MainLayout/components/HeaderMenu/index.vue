<template>
  <el-menu
    mode="horizontal"
    :router="true">
    <template v-for="(menu, menuIndex) in menus">
      <d2-menu-item v-if="menu.children === undefined" :menu="menu" :key="menuIndex"/>
      <d2-submenu v-else :menu="menu" :key="menuIndex"/>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'HeaderMenu',
  components: {
    D2MenuItem: () => import('../D2MenuItem/index.vue'),
    D2Submenu: () => import('../D2Submenu/index.vue')
  },
  data () {
    return {
      menus: [
        {
          path: '/index',
          title: '首页'
        },
        {
          path: '/demo',
          title: '功能',
          children: [
            {
              path: '/demo/plugins',
              title: '插件',
              icon: 'plug'
            },
            {
              path: '/demo/components',
              title: '组件',
              icon: 'puzzle-piece'
            },
            {
              path: '/demo/chart',
              title: '图表',
              icon: 'pie-chart',
              children: [
                {
                  path: '/demo/plugins',
                  title: '插件',
                  icon: 'plug'
                },
                {
                  path: '/demo/components',
                  title: '组件',
                  icon: 'puzzle-piece'
                },
                {
                  path: '/demo/chart',
                  title: '图表',
                  icon: 'pie-chart'
                }
              ]
            }
          ]
        },
        {
          path: '/demo/business',
          title: '示例业务界面'
        }
      ]
    }
  }
}
</script>
