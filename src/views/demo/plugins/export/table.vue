<template>
  <d2-container type="card">
    <template slot="header">导出表格</template>
    <div class="d2-mb">
      <el-button type="primary" @click="exportCsv">
        <d2-icon name="download"/>
        导出 CSV
      </el-button>
      <el-button type="primary" @click="exportExcel">
        <d2-icon name="download"/>
        导出 Excel
      </el-button>
    </div>
    <el-table v-bind="table" style="width: 100%">
      <el-table-column
        v-for="(item, index) in table.columns"
        :key="index"
        :prop="item.prop"
        :label="item.label">
      </el-table-column>
    </el-table>
  </d2-container>
</template>

<script>
import Vue from 'vue'
import pluginExport from '@d2-projects/vue-table-export'
Vue.use(pluginExport)
export default {
  data () {
    return {
      table: {
        columns: [
          { label: 'ID', prop: 'id' },
          { label: '名称', prop: 'name' },
          { label: '创建日期', prop: 'creatDate' },
          { label: '地址', prop: 'address' },
          { label: '邮编', prop: 'zip' }
        ],
        data: [
          { id: 1, name: 'Lucy', creatDate: '2020-05-07', address: 'Address', zip: '000000' }
        ],
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
        .then(() => {
          this.$message('导出CSV成功')
        })
    },
    exportExcel () {
      this.$export.excel({
        columns: this.table.columns,
        data: this.table.data,
        header: '导出 Excel',
        merges: ['A1', 'E1']
      })
        .then(() => {
          this.$message('导出表格成功')
        })
    }
  }
}
</script>
