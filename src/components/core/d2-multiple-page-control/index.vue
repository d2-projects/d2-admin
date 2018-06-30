<template>
  <el-tabs
    class="d2-multiple-page-control"
    v-model="activeName"
    type="card"
    @tab-click="handleClick">
    <el-tab-pane
      v-for="(page, index) in pageOpenedList"
      :key="index"
      :label="page.title"
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
      pageOpenedList: state => state.d2admin.pageOpenedList
    })
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  }
}
</script>