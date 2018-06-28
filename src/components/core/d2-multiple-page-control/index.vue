<template>
  <el-tabs
    class="d2-multiple-page-control"
    v-model="activeName2"
    type="card"
    @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first"></el-tab-pane>
    <el-tab-pane label="配置管理" name="second"></el-tab-pane>
    <el-tab-pane label="角色管理" name="third"></el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data () {
      return {
        activeName2: 'first'
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>