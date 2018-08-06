<template>
  <el-pagination
    :current-page="page.current"
    :page-size="page.size"
    :total="page.total"
    :page-sizes="[100, 200, 300, 400]"
    layout="total, sizes, prev, pager, next, jumper"
    style="margin: -10px;"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange">
  </el-pagination>
</template>

<script>
export default {
  data () {
    return {
      page: {
        current: 1,
        size: 100,
        total: 400
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
