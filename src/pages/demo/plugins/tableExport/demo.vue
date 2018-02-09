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
// 库
import Csv from '@/utils/csv.js'
import ExportCsv from '@/utils/export-csv.js'
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
      const paramsDefault = {
        noHeader: false
      }
      const _params = Object.assign({}, params, paramsDefault)
      const noHeader = _params.noHeader
      const data = Csv(this.table.columns, this.table.data, params, noHeader)
      ExportCsv.download('table.csv', data)
    }
  }
}
</script>
