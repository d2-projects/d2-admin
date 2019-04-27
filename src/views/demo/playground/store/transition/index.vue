<template>
  <d2-container type="card">
    <template slot="header">
      当前状态 {{active ? '开启过渡动画' : '关闭过渡动画'}}
    </template>
    <el-button type="primary" @click="set(!active)">
      {{active ? '关闭页面过渡动画' : '打开页面过渡动画'}}
    </el-button>
  </d2-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('d2admin/transition', [
      'active'
    ])
  },
  methods: {
    ...mapActions('d2admin/transition', [
      'set'
    ])
  }
}
</script>
