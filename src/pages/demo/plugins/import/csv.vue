<template>
  <Container>
    <PageHeader
      slot="header"
      title="导入 csv"
      url="https://github.com/mholt/PapaParse">
    </PageHeader>
    <div class="dd-mb">
      <el-button @click="download">
        <Icon name="download"></Icon>
        下载演示 .csv 表格
      </el-button>
    </div>
    <div class="dd-mb">
      <el-upload :before-upload="handleUpload" action="default">
        <el-button type="success">
          <Icon name="file-o"></Icon>
          选择要导入的 .csv 表格
        </el-button>
      </el-upload>
    </div>
    <el-table v-bind="table" class="dd-mb">
      <el-table-column
        v-for="(item, index) in table.columns"
        :key="index"
        :prop="item.prop"
        :label="item.label">
      </el-table-column>
    </el-table>
    <Markdown url="/static/md/插件 - 导入.md"></Markdown>
  </Container>
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

