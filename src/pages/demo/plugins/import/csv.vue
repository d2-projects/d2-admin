<template>
  <d2-container>
    <PageHeader
      slot="header"
      title="导入 csv"
      url="https://github.com/mholt/PapaParse">
    </PageHeader>
    <div class="d2-mb">
      <el-button @click="download">
        <d2-icon name="download"/>
        下载演示 .csv 表格
      </el-button>
    </div>
    <div class="d2-mb">
      <el-upload :before-upload="handleUpload" action="default">
        <el-button type="success">
          <d2-icon name="file-o"/>
          选择要导入的 .csv 表格
        </el-button>
      </el-upload>
    </div>
    <el-table v-bind="table" class="d2-mb">
      <el-table-column
        v-for="(item, index) in table.columns"
        :key="index"
        :prop="item.prop"
        :label="item.label">
      </el-table-column>
    </el-table>
    <d2-markdown url="/static/md/插件 - 导入.md"/>
  </d2-container>
</template>

<script>
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
      this.$import.csv(file)
        .then(res => {
          this.table.columns = Object.keys(res.data[0]).map(e => ({
            label: e,
            prop: e
          }))
          this.table.data = res.data
        })
      return false
    },
    download () {
      window.location.href = 'http://fairyever.qiniudn.com/d2-admin-import-csv-demo.csv'
    }
  }
}
</script>

