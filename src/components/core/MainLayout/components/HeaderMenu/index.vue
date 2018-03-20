<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal">
    <el-menu-item index="index" @click.native="active({name: 'index'})">首页</el-menu-item>
    <el-menu-item
      v-for="(item, index) in menu"
      :key="index"
      :index="String(index)"
      @click.native="active(item)">
      {{item.title}}
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapMutations } from 'vuex'
import { menu, router } from '@/router/menu/index.js'
export default {
  data () {
    return {
      menu,
      router
    }
  },
  computed: {
    // 当前路由的name
    // 仅仅是返回当前的name而已
    routeName () {
      return this.$route.name
    },
    // 不管当前路由是不是顶级菜单 都返回这个路由所属的顶级菜单对象的name
    // 如果返回 null 代表这个路由不是在菜单里显示的路由
    routeTopLevelName () {
      if (this.router.find(e => e.name === this.routeName)) {
        return this.routeName
      } else {
        const find = this.router.find(e => e.children.find(child => child.name === this.routeName))
        return find ? find.name : null
      }
    },
    // 返回当前对象对应的顶级菜单下的所有子菜单 这些菜单可以在侧边栏菜单中直接使用
    // 如果返回 null 代表这个路由没有对应的一级路由也就没有菜单
    routeTopLevelMenu () {
      return this.routeTopLevelName ? this.menu.find(e => e.name === this.routeTopLevelName).children : null
    }
  },
  watch: {
    routeName () {
      this.refreshSideMenu()
    }
  },
  mounted () {
    this.refreshSideMenu()
  },
  methods: {
    ...mapMutations([
      'setSideMenu'
    ]),
    // 更新一次侧边栏
    refreshSideMenu () {
      if (this.routeTopLevelMenu) {
        this.setSideMenu({
          sideMenu: this.routeTopLevelMenu
        })
      }
    },
    // 跳转到某个路由
    active (item) {
      this.$router.push({
        name: item.name
      })
    }
  }
}
</script>
