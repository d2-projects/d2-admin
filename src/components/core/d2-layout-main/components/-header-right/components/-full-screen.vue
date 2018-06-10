<template>
  <el-tooltip
    effect="dark"
    :content="isFullScreen ? '退出全屏' : '全屏'"
    placement="bottom">
    <el-button class="d2-mr btn-text" type="text" @click="toggleFullScreen">
      <d2-icon v-if="isFullScreen" name="compress"/>
      <d2-icon v-else name="arrows-alt"/>
    </el-button>
  </el-tooltip>
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
