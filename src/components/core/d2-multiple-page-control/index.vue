<template>
  <el-tabs
    class="d2-multiple-page-control"
    v-model="activeName"
    type="card"
    @tab-click="handleClick">
    <el-tab-pane
      v-for="n in 20"
      :key="n"
      :label="`页面 ${n}`"
      :name="`page${n}`">
    </el-tab-pane>
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