<template>
  <Container>
    <!-- <template slot="title">演示</tempalte> -->
    <p slot="more"><GithubLink url="https://github.com/mholt/PapaParse"></GithubLink></p>
    <el-upload
      :before-upload="handleUpload"
      action="default">
      <el-button>选择一个CSV文件</el-button>
    </el-upload>
    <br>
    <el-table
      v-bind="table"
      style="width: 100%">
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
    }
  }
}
</script>

