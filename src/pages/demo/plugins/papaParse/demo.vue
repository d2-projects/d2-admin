<template>
  <Container>
    <PageHeader
      slot="header"
      title="基本示例"
      url="https://github.com/mholt/PapaParse">
    </PageHeader>
    <el-row :gutter="10">
      <el-col :span="4">
        <div class="dd-mb">
          <el-button @click="download">下载演示CSV</el-button>
        </div>
        <el-upload :before-upload="handleUpload" action="default">
          <el-button type="success">选择 CSV 文件</el-button>
        </el-upload>
      </el-col>
      <el-col :span="20">
        <el-table v-bind="table" style="width: 100%">
          <el-table-column
            v-for="(item, index) in table.columns"
            :key="index"
            :prop="item.prop"
            :label="item.label">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
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

