/* eslint-disable */

// 库
import papa from 'papaparse'
import xlsx from 'xlsx'

export default {
  install (Vue, options) {
    Vue.prototype.$import = {
      // 导入 csv
      csv (file) {
        return new Promise((resolve, reject) => {
          papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results, file) => {
              resolve(results)
            }
          })
        })
      },
      // 导入 xlsx
      xlsx (file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          const fixdata = data => {
            let o = ''
            let l = 0
            const w = 10240
            for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)))
            o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
            return o
          }
          const getHeaderRow = sheet => {
            const headers = []
            const range = xlsx.utils.decode_range(sheet['!ref'])
            let C
            const R = range.s.r
            for (C = range.s.c; C <= range.e.c; ++C) {
              var cell = sheet[xlsx.utils.encode_cell({ c: C, r: R })]
              var hdr = 'UNKNOWN ' + C
              if (cell && cell.t) hdr = xlsx.utils.format_cell(cell)
              headers.push(hdr)
            }
            return headers
          }
          reader.onload = e => {
            const data = e.target.result
            const fixedData = fixdata(data)
            const workbook = xlsx.read(btoa(fixedData), { type: 'base64' })
            const firstSheetName = workbook.SheetNames[0]
            const worksheet = workbook.Sheets[firstSheetName]
            const header = getHeaderRow(worksheet)
            const results = xlsx.utils.sheet_to_json(worksheet)
            resolve({header, results})
          }
          reader.readAsArrayBuffer(file)
        })
      }
    }
  }
}
