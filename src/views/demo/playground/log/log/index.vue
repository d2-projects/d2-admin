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
    <p>此信息已经被记录在日志页面，并在页面右上"日志按钮"区域显示提示信息</p>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      text: 'some text'
    }
  },
  methods: {
    handleAdd () {
      this.$log.push(this.text)
    }
  }
}
</script>
