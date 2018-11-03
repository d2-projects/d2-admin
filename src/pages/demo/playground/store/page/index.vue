<template>
  <d2-container type="card">
    <el-button @click="closeCurrent" type="danger">
      <d2-icon name="times"/>
      关闭当前页
    </el-button>
  </d2-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('d2admin/page', [
      'close'
    ]),
    // 关闭当前页
    closeCurrent () {
      this.close({
        tagName: this.$route.name,
        vm: this
      })
    }
  }
}
</script>
