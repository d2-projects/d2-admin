<template>
  <el-tabs
    class="d2-multiple-page-control"
    v-model="activeName"
    type="card"
    @tab-click="handleClick">
    <el-tab-pane label="页面1" name="first"></el-tab-pane>
    <el-tab-pane label="页面2" name="second"></el-tab-pane>
    <el-tab-pane label="页面3" name="third"></el-tab-pane>
    <el-tab-pane label="页面4" name="fourth"></el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  }
}
</script>