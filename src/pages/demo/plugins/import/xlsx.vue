<template>
  <Container>
    <PageHeader
      slot="header"
      title="导入 xlsx"
      url="https://github.com/SheetJS/js-xlsx">
    </PageHeader>
    <!-- <div class="dd-mb">
      <el-button @click="download">
        <Icon name="download"></Icon>
        下载演示CSV
      </el-button>
    </div> -->
    <div class="dd-mb">
      <el-upload :before-upload="handleUpload" action="default">
        <el-button type="success">
          <Icon name="file-o"></Icon>
          选择要导入的 xlsx 文件
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
    <Markdown url="/static/markdownFiles/article/插件 - 导入 - csv.md"></Markdown>
  </Container>
</template>

<script>
/* eslint-disable */
import XLSX from 'xlsx'
export default {
  data() {
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
    generateDate ({header, results}) {
      this.table.columns = header.map(e => {
        return {
          label: e,
          prop: e
        }
      })
      this.table.data = results
    },
    handleUpload(file) {
      this.readerData(file)
      return false
    },
    readerData(file) {
      const reader = new FileReader()
      const fixdata = data => {
        let o = ''
        let l = 0
        const w = 10240
        for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)))
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
        return o
      }
      const get_header_row = sheet => {
        const headers = []
        const range = XLSX.utils.decode_range(sheet['!ref'])
        let C
        const R = range.s.r /* start in the first row */
        for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
          var cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })] /* find the cell in the first row */
          var hdr = 'UNKNOWN ' + C // <-- replace with your desired default
          if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
          headers.push(hdr)
        }
        return headers
      }
      reader.onload = e => {
        const data = e.target.result
        const fixedData = fixdata(data)
        const workbook = XLSX.read(btoa(fixedData), { type: 'base64' })
        const firstSheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[firstSheetName]
        const header = get_header_row(worksheet)
        const results = XLSX.utils.sheet_to_json(worksheet)
        this.generateDate({ header, results })
      }
      reader.readAsArrayBuffer(file)
    }
  }
}
</script>

