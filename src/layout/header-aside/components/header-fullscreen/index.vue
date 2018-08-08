<template>
  <el-tooltip
    effect="dark"
    :content="isFullScreen ? '退出全屏' : '全屏'"
    placement="bottom">
    <el-button class="d2-mr btn-text can-hover" type="text" @click="fullScreenToggle">
      <d2-icon v-if="isFullScreen" name="compress"/>
      <d2-icon v-else name="arrows-alt" style="font-size: 16px"/>
    </el-button>
  </el-tooltip>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState('d2admin', [
      'isFullScreen'
    ])
  },
  methods: {
    ...mapMutations('d2admin', [
      'fullScreenToggle'
    ])
  }
}
</script>
