export const crudOptions = {
  options: {
    height: '100%' // 表格高度100%, 使用toolbar必须设置
  },
  viewOptions: {
    disabled: false
  },
  rowHandle: {
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
      title: '商品标题',
      key: 'title',
      sortable: true
    },
    {
      title: '商品代码',
      key: 'code',
      search: { disabled: false },
      sortable: true
    },
    // {
    //   title: '图片',
    //   key: 'images',
    //   sortable: true,
    //   type: 'image-uploader',
    //   form: {
    //     component: {
    //       props: {
    //         uploader: {
    //           type: 'form'
    //         }
    //       }
    //     }
    //   }
    // },
    {
      title: '价格',
      key: 'price',
      sortable: true
    },
    {
      title: '库存',
      key: 'store',
      sortable: true,
      type: 'number'
    },
    {
      title: '简介',
      key: 'intro',
      sortable: true,
      type: 'text-area'
    },
    // {
    //   title: '详情',
    //   key: 'content',
    //   sortable: true,
    //   type: 'editor-ueditor',
    //   disabled: true
    // },
    {
      title: '自定义',
      key: 'custom',
      sortable: true,
      form: {
        component: {
          span: 24
        },
        slot: true
      }
    },
    {
      title: '自定义2',
      key: 'custom2',
      sortable: true,
      form: {
        component: {
          span: 24
        },
        slot: true
      }
    }
  ],
  formGroup: {
    type: 'collapse', // tab
    accordion: false,
    groups: {
      base: {
        title: '商品基础',
        icon: 'el-icon-goods',
        columns: ['title', 'code', 'images']
      },
      price: {
        title: '库存价格',
        icon: 'el-icon-price-tag',
        columns: ['store', 'price']
      },
      info: {
        title: '详情',
        collapsed: false,
        icon: 'el-icon-warning-outline',
        columns: ['intro', 'content']
      },
      custom: {
        title: '自定义',
        collapsed: true,
        show (context) {
          console.log('custom context', context)
          return context.mode === 'view'
        },
        disabled: false,
        icon: 'el-icon-warning-outline',
        columns: ['custom', 'custom2']
      }
    }
  }
}
