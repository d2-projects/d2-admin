<template>
  <d2-container class="page-demo-playground-fullscreen">
    <template slot="header">全屏</template>
    <el-button type="primary" @click="d2adminFullScreenToggle">
      d2adminFullScreenToggle 切换全屏
    </el-button>
  </d2-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      isFullScreen: state => state.d2admin.isFullScreen
    })
  },
  methods: {
    ...mapMutations([
      'd2adminFullScreenToggle'
    ])
  }
}
</script>
