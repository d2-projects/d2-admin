// 库
import Csv from '@/utils/csv.js'
import ExportCsv from '@/utils/export-csv.js'
export default {
  install (Vue, options) {
    // 导出
    Vue.prototype.$export = {
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
          resolve()
        })
      }
    }
  }
}
