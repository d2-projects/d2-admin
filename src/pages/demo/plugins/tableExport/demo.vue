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
      // 默认值
      const paramsDefault = {
        noHeader: false
      }
      // 合并参数
      const _params = Object.assign({}, params, paramsDefault)
      // 生成数据
      const data = Csv(this.table.columns, this.table.data, params, _params.noHeader)
      // 下载数据
      ExportCsv.download('table.csv', data)
    }
  }
}
</script>
