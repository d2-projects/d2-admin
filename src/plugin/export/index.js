// 库
import Csv from '@/utils/csv.js'
import ExportCsv from '@/utils/export-csv.js'
export default {
  install (Vue, options) {
    // 导出
    Vue.prototype.$export = {
      csv (params) {
        // 默认值
        const paramsDefault = {
          columns: [],
          data: [],
          noHeader: false
        }
        // 合并参数
        const _params = Object.assign({}, params, paramsDefault)
        // 生成数据
        const data = Csv(_params.columns, _params.data, params, _params.noHeader)
        // 下载数据
        ExportCsv.download('table.csv', data)
      }
    }
  }
}
