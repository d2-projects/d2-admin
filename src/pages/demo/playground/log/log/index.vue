<template>
  <d2-container>
    <template slot="header">记录日志内容</template>
    <p class="d2-mt-0">在下方输入你要记录的日志，然后点击记录按钮</p>
    <el-input
      v-model="text"
      placeholder="日志内容"
      class="d2-mr-10"
      style="width: 200px;"/>
    <el-button type="primary" @click="handleAdd">记录</el-button>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      text: 'D2Admin log info'
    }
  },
  methods: {
    handleAdd () {
      this.$logAdd(this.text)
    }
  }
}
</script>
