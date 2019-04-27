<template>
  <d2-container type="card" class="page-demo-playground-fullscreen">
    <template slot="header">全屏</template>
    <el-button type="primary" @click="toggle">
      toggle 切换全屏
    </el-button>
  </d2-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('d2admin/fullscreen', [
      'toggle'
    ])
  }
}
</script>
