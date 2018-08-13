<template>
  <d2-container type="card">
    <el-button type="primary" @click="set(!active)">
      {{active ? '关闭页面切换动画' : '打开页面切换动画'}}
    </el-button>
  </d2-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState('d2admin/transition', [
      'active'
    ])
  },
  methods: {
    ...mapMutations('d2admin/transition', [
      'set'
    ])
  }
}
</script>
