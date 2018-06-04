<template>
  <div>
    <el-menu
      :collapse="collapse"
      :unique-opened="true"
      :router="true">
      <template v-for="(menu, menuIndex) in menus">
        <el-menu-item :key="menuIndex" :index="menu.path">
          <i :class="`fa fa-${menu.icon}`"></i>
          <span slot="title">{{menu.title}}</span>
        </el-menu-item>
      </template>
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
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
  data () {
    return {
      menus: [
        {path: '/a', title: 'menu-a', icon: 'plus'}
      ]
    }
  }
}
</script>
