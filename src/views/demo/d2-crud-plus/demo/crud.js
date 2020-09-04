export const crudOptions = (vm) => {
  return {
    viewOptions: {
      componentType: 'row' // 查看对话框字段使用行组件
    },
    columns: [
      {
        title: 'ID',
        key: 'id',
        width: 90,
        form: {
          disabled: true
        }
      },
      {
        title: '日期',
        key: 'date',
        type: 'date'
      },
      {
        title: '状态',
        key: 'status',
        sortable: true,
        search: { disabled: false },
        type: 'select',
        dict: {
          url: '/d2crudplus/dicts/OpenStatusEnum'
        }
      },
      {
        title: '地区',
        key: 'address',
        sortable: true,
        width: 180,
        search: { disabled: false },
        type: 'select',
        form: {
          component: {
            props: {
              multiple: true // 多选
            }
          }
        },
        dict: {
          data: [{ value: 'sz', label: '深圳' }, { value: 'gz', label: '广州' }, { value: 'wh', label: '武汉' }, { value: 'sh', label: '上海' }]
        },
        component: { props: { color: 'auto' } } // 自动染色
      }
    ]
  }
}
