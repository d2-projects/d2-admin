<template>
  <d2-container class="page-demo-playground-fullscreen">
    <template slot="header">全屏</template>
    <el-switch
      v-model="isFullScreen"
      active-text="全屏"
      inactive-text="正常"
      @change="toggleFullScreen">
    </el-switch>
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
      'toggleFullScreen'
    ])
  }
}
</script>
