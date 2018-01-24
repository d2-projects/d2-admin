<template>
  <el-menu class="el-menu-demo" mode="horizontal">
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
    routeName () {
      return this.$route.name
    },
    // 当前路由是否是顶级菜单
    // 顶级菜单就是在顶栏里显示的菜单
    // 二级菜单是在侧边栏显示的菜单
    // 三级菜单是二级菜单展开的
    routeIsTopLevel () {
      return !!this.router.find(e => e.name === this.routeName)
    },
    // 不管当前路由是不是顶级菜单 都返回这个路由所属的顶级菜单对象的name
    // 如果返回 undefined 代表这个路由不是在菜单里显示的路由
    routeTopLevel () {
      if (this.routeIsTopLevel) {
        return this.routeName
      } else {
        const find = this.router.find(e => {
          return e.children.find(child => {
            return child.name === this.routeName
          })
        })
        return find ? find.name : undefined
      }
    },
    // 返回当前对象对应的顶级菜单 这个菜单可以在侧边栏菜单中直接使用
    // 如果返回 undefined 代表这个路由没有对应的一级路由也就没有菜单
    routeTopLevelMenu () {
      if (this.routeTopLevel) {
        return this.menu.find(e => e.name === this.routeTopLevel).children
      } else {
        return undefined
      }
    }
  },
  watch: {
    routeName () {
      this.doSetSideMenu()
    }
  },
  mounted () {
    this.doSetSideMenu()
  },
  methods: {
    ...mapMutations([
      'setSideMenu'
    ]),
    // 更新一次侧边栏
    doSetSideMenu () {
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
