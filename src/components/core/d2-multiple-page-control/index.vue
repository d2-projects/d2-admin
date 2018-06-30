<template>
  <el-tabs
    class="d2-multiple-page-control"
    :value="pageCurrent"
    type="card"
    @tab-click="handleClick">
    <el-tab-pane
      v-for="(page, index) in pageOpenedList"
      :key="index"
      :label="page.name"
      :name="page.name">
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  computed: {
    ...mapState({
      pageOpenedList: state => state.d2admin.pageOpenedList,
      pageCurrent: state => state.d2admin.pageCurrent
    })
  },
  methods: {
    handleClick (tab, event) {
      const page = this.pageOpenedList.find(page => page.name === tab.name)
      if (page) {
        this.$router.push({
          name: page.name,
          params: page.argu,
          query: page.query
        })
      }
    }
  }
}
</script>