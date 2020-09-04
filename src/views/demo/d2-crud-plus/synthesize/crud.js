// 请求模拟数据
import { requestForMock } from '@/api/service'

export const crudOptions = {
  rowHandle: {
    // columnHeader: '操作',
    width: 370,
    custom: [
      {
        text: ' 自定义',
        type: 'warning',
        size: 'small',
        emit: 'customHandleBtn',
        icon: 'el-icon-s-flag'
      }
    ],
    fixed: 'right'
  },
  pageOptions: {
    compact: true // 是否紧凑型页面
  },
  options: {
    height: '100%', // 表格高度100%, 使用toolbar必须设置
    highlightCurrentRow: true,
    rowKey: 'id',
    lazy: true,
    load: (tree, treeNode, resolve) => {
      requestForMock({
        url: '/d2crudplus/synthesize/children',
        method: 'get',
        data: { id: tree.id }
      }).then(ret => {
        console.log('懒加载数据', ret)
        resolve(ret)
      })
    },
    showSummary: true,
    summaryMethod (param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总价'
          return
        }
        console.log('111', column)
        if (column.label !== '金额(元)') {
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += ' 元'
        } else {
          sums[index] = ''
        }
      })

      return sums
    }
  },
  indexRow: { // 或者直接传true,不显示title，不居中
    title: '序号',
    align: 'center'
  },
  selectionRow: {
    align: 'center',
    width: 100
  },
  expandRow: { // 或者直接传true,不显示title，不居中
    title: '展开',
    align: 'center'
  },
  columns: [
    {
      title: '数据列',
      key: 'data',
      sortable: true,
      width: 200
    },
    {
      title: 'ID',
      key: 'id',
      width: 90,
      form: {
        disabled: true
      }
    },
    {
      title: '时间',
      key: 'time',
      type: 'datetime',
      sortable: true,
      width: 160
    },
    {
      title: '地区',
      key: 'province',
      sortable: true,
      search: { key: 'province', disabled: false },
      type: 'select',
      form: {
        component: { props: { filterable: true, multiple: true, clearable: true } }
      },
      dict: {
        data: [
          { value: 'sz', label: '深圳' },
          { value: 'gz', label: '广州' },
          { value: 'wh', label: '武汉' },
          { value: 'sh', label: '上海' }
        ]
      },
      width: 300
    },
    {
      title: '金额(元)',
      key: 'amount',
      sortable: true,
      type: 'number'
    }
  ]
}
