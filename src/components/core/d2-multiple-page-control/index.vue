<template>
  <el-tabs
    class="d2-multiple-page-control"
    v-model="activeName"
    type="card"
    @tab-click="handleClick">
    <el-tab-pane
      v-for="(page, index) in pageList"
      :key="index"
      :label="page.title"
      :name="page.name">
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  computed: {
    ...mapState({
      pageList: state => state.d2admin.pageList
    })
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  }
}
</script>