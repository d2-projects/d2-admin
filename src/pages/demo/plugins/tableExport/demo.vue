<template>
  <Container>
    <PageHeader
      slot="header"
      title="基本示例">
    </PageHeader>
    <div class="dd-mb">
      <el-button @click="exportCsv">
        <Icon name="download"></Icon>
        导出CSV
      </el-button>
      <el-button @click="exportExcel">
        <Icon name="download"></Icon>
        导出Excel
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
    <Markdown url="/static/markdownFiles/article/插件 - 导出数据.md"></Markdown>
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
    },
    exportExcel () {
      this.$export.excel({
        columns: this.table.columns,
        data: this.table.data
      })
    }
  }
}
</script>
