// 库
import Csv from './_csv'
import ExportCsv from './_export-csv'
import * as excel from './_export2Excel'
export default {
  install (Vue, options) {
    Vue.prototype.$export = {
      // 导出 CSV
      csv (params) {
        return new Promise((resolve, reject) => {
          // 默认值
          const paramsDefault = {
            columns: [],
            data: [],
            noHeader: false
          }
          // 合并参数
          const _params = Object.assign({}, paramsDefault, params)
          console.log(_params)
          // 生成数据
          const data = Csv(_params.columns, _params.data, params, _params.noHeader)
          // 下载数据
          ExportCsv.download('table.csv', data)
          // 完成
          resolve(data)
        })
      },
      // 导出 Excel
      excel () {
        const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
        const data = []
        excel.export_json_to_excel(tHeader, data, 'demo')
      }
    }
  }
}
