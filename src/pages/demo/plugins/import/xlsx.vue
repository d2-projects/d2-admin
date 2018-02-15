<template>
  <Container>
    <PageHeader
      slot="header"
      title="导入 xlsx"
      url="https://github.com/SheetJS/js-xlsx">
    </PageHeader>
    <div class="dd-mb">
      <el-button @click="download">
        <Icon name="download"></Icon>
        下载演示 .xlsx 表格
      </el-button>
    </div>
    <div class="dd-mb">
      <el-upload :before-upload="handleUpload" action="default">
        <el-button type="success">
          <Icon name="file-o"></Icon>
          选择要导入的 .xlsx 表格
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
    <Markdown url="/static/markdownFiles/article/插件 - 导入.md"></Markdown>
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
      this.$import.xlsx(file)
        .then(({header, results}) => {
          this.table.columns = header.map(e => {
            return {
              label: e,
              prop: e
            }
          })
          this.table.data = results
        })
      return false
    },
    download () {
      window.location.href = 'http://fairyever.qiniudn.com/d2-admin-import-xlsx-demo.xlsx'
    }
  }
}
</script>

