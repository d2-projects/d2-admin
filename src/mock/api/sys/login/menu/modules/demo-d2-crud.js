export default {
  path: 'demo/d2-crud',
  name: 'demo-d2-crud',
  meta: {
    title: 'D2 CRUD',
    iconSvg: 'd2-crud',
    aside: true
  },
  children: (pre => [
    {
      path: 'index',
      name: `${pre}index`,
      meta: {
        title: 'D2 CRUD 首页',
        icon: 'home'
      }
    },
    {
      path: 'base',
      name: `${pre}base`,
      meta: {
        title: '基础功能'
      },
      children: [{
        path: 'demo1',
        name: `${pre}demo1`,
        meta: {
          title: '基础表格'
        }
      },
      {
        path: 'demo2',
        name: `${pre}demo2`,
        meta: {
          title: '带斑马纹表格'
        }
      },
      {
        path: 'demo3',
        name: `${pre}demo3`,
        meta: {
          title: '带边框表格'
        }
      },
      {
        path: 'demo4',
        name: `${pre}demo4`,
        meta: {
          title: '带状态表格'
        }
      },
      {
        path: 'demo5',
        name: `${pre}demo5`,
        meta: {
          title: '固定表头'
        }
      },
      {
        path: 'demo6',
        name: `${pre}demo6`,
        meta: {
          title: '固定列'
        }
      },
      {
        path: 'demo7',
        name: `${pre}demo7`,
        meta: {
          title: '流体高度'
        }
      },
      {
        path: 'demo8',
        name: `${pre}demo8`,
        meta: {
          title: '多级表头'
        }
      },
      {
        path: 'demo9',
        name: `${pre}demo9`,
        meta: {
          title: '单选'
        }
      },
      {
        path: 'demo10',
        name: `${pre}demo10`,
        meta: {
          title: '多选'
        }
      },
      {
        path: 'demo11',
        name: `${pre}demo11`,
        meta: {
          title: '排序'
        }
      },
      {
        path: 'demo12',
        name: `${pre}demo12`,
        meta: {
          title: '筛选'
        }
      },
      {
        path: 'demo13',
        name: `${pre}demo13`,
        meta: {
          title: '表尾合计行'
        }
      },
      {
        path: 'demo14',
        name: `${pre}demo14`,
        meta: {
          title: '合并行'
        }
      },
      {
        path: 'demo15',
        name: `${pre}demo15`,
        meta: {
          title: '合并列'
        }
      },
      {
        path: 'demo24',
        name: `${pre}demo24`,
        meta: {
          title: '表格slot'
        }
      }
      ]
    },
    {
      path: 'data',
      name: `${pre}data`,
      meta: {
        title: '数据操作'
      },
      children: [
        {
          path: 'demo16',
          name: `${pre}demo16`,
          meta: {
            title: '新增数据'
          }
        },
        {
          path: 'demo17',
          name: `${pre}demo17`,
          meta: {
            title: '修改数据'
          }
        },
        {
          path: 'demo18',
          name: `${pre}demo18`,
          meta: {
            title: '删除数据'
          }
        },
        {
          path: 'demo19',
          name: `${pre}demo19`,
          meta: {
            title: '自定义操作列'
          }
        },
        {
          path: 'demo20',
          name: `${pre}demo20`,
          meta: {
            title: '表单组件渲染'
          }
        },
        {
          path: 'demo21',
          name: `${pre}demo21`,
          meta: {
            title: '表单布局'
          }
        },
        {
          path: 'demo22',
          name: `${pre}demo22`,
          meta: {
            title: '表单校验'
          }
        },
        {
          path: 'demo23',
          name: `${pre}demo23`,
          meta: {
            title: '表格内编辑'
          }
        },
        {
          path: 'demo25',
          name: `${pre}demo25`,
          meta: {
            title: '表格自定义组件'
          }
        },
        {
          path: 'demo26',
          name: `${pre}demo26`,
          meta: {
            title: '表单自定义组件'
          }
        }
      ]
    }
  ])('demo-d2-crud-')
}
