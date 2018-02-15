解析 CSV 文件使用 [PapaParse](https://github.com/mholt/PapaParse)

```
// 导入插件
import papa from 'papaparse'

//在选择文件后处理数据
handleUpload (file) {
  papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: (results, file) => {
      // 设置表格列
      this.table.columns = Object.keys(results.data[0]).map(e => ({
        label: e,
        prop: e
      }))
      // 表格赋值
      this.table.data = results.data
    }
  })
  return false
}
```

> 详细的papaparse使用API请移步官网文档
