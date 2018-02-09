<template>
  <Container>
    <PageHeader
      slot="header"
      title="基本示例">
    </PageHeader>
    <el-table v-bind="table" style="width: 100%" class="dd-mb">
      <el-table-column
        v-for="(item, index) in table.columns"
        :key="index"
        :prop="item.prop"
        :label="item.label">
      </el-table-column>
    </el-table>
  </Container>
</template>

<script>
import Mock from 'mockjs'
export default {
  data () {
    return {
      table: {
        columns: [],
        data: [],
        size: 'mini',
        stripe: true,
        border: true
      }
    }
  },
  created () {
    this.loadTableData()
  },
  methods: {
    // ajax () {
    //   this.$axios.get('/api/demo/001')
    //   .then(res => {
    //     this.table.columns = Object.keys(res.list[0]).map(e => ({
    //       label: e,
    //       prop: e
    //     }))
    //     this.table.data = res.list
    //   })
    // }
    // 载入表格数据
    loadTableData () {
      const mockTableData = Mock.mock({
        'list|4-10': [{
          'id|+1': 1,
          'name': '@CNAME',
          'delFlag|1': [0, 1],
          'creatDate': '@DATE',
          'address': '@CITY',
          'zip': '@ZIP'
        }]
      })
      this.table.columns = Object.keys(mockTableData.list[0]).map(e => ({
        label: e,
        prop: e
      }))
      this.table.data = mockTableData.list
    }
  }
}
</script>
