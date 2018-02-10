<template>
  <Container>
    <PageHeader
      slot="header"
      title="基本示例">
    </PageHeader>
    <div>
      <el-button @click="exportCsv">
        <Icon name="download"></Icon>
        exportCsv
      </el-button>
    </div>
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
// 假数据
import table from './data'
export default {
  data () {
    return {
      table: {
        columns: table.columns,
        data: table.data,
        size: 'mini',
        stripe: true,
        border: true
      }
    }
  },
  methods: {
    exportCsv (params = {}) {
      this.$export.csv({
        columns: this.table.columns,
        data: this.table.data
      })
    }
  }
}
</script>
