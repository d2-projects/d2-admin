<template>
  <Container>
    <PageHeader
      slot="header"
      title="导入 CSV"
      url="https://github.com/mholt/PapaParse">
    </PageHeader>
    <div class="dd-mb">
      <el-button @click="download">下载演示CSV</el-button>
      <el-button type="success">选择要导入的 CSV 文件</el-button>
    </div>
    <el-table v-bind="table" style="width: 100%">
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
import papa from 'papaparse'
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
  methods: {
    handleUpload (file) {
      papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results, file) => {
          this.table.columns = Object.keys(results.data[0]).map(e => ({
            label: e,
            prop: e
          }))
          this.table.data = results.data
        }
      })
      return false
    },
    download () {
      window.location.href = 'http://fairyever.qiniudn.com/d2admin-vue-demo.csv'
    }
  }
}
</script>

