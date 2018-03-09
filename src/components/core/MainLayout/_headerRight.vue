<template>
  <div class="btn-group">
    <!-- 全屏按钮 -->
    <el-tooltip class="item" effect="dark" :content="isFullScreen ? '退出全屏' : '全屏'" placement="bottom">
      <el-button class="dd-mr btn-text" type="text" @click="toggleFullScreen">
        <Icon v-if="isFullScreen" name="compress"></Icon>
        <Icon v-else name="arrows-alt"></Icon>
      </el-button>
    </el-tooltip>
    <!-- 用户菜单 -->
    <el-dropdown class="dd-mr">
      <span class="el-dropdown-link">你好</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>注销</el-dropdown-item>
        <el-dropdown-item>个人中心</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      isFullScreen: state => state.fullScreen.isFullScreen
    })
  },
  methods: {
    ...mapMutations([
      'toggleFullScreen'
    ])
  }
}
</script>

