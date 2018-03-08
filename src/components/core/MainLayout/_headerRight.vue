<template>
  <div class="btn-group">
    <el-button
      class="dd-mr btn-text"
      type="text"
      @click="toggleFullScreen">
      <Icon name="arrows-alt"></Icon>
    </el-button>
    <el-dropdown class="dd-mr">
      <span class="el-dropdown-link">
        用户
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>注销</el-dropdown-item>
        <el-dropdown-item>个人中心</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations([
      'toggleFullScreen'
    ])
  }
}
</script>

