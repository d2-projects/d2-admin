<template>
  <div class="btn-group">
    <!-- 全屏按钮 -->
    <FullScreen></FullScreen>
    <!-- 用户菜单 -->
    <el-dropdown class="dd-mr">
      <span class="el-dropdown-link">你好</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><Icon name="power-off"></Icon> 注销</el-dropdown-item>
        <el-dropdown-item><Icon name="user-circle-o"></Icon> 个人中心</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  components: {
    FullScreen: () => import('./components/FullScreen.vue')
  }
}
</script>
