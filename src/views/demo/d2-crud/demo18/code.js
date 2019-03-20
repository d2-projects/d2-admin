export default `<template>
  <div>
    <d2-crud
      :columns="columns"
      :data="data"
      :rowHandle="rowHandle"
      @row-remove="handleRowRemove"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          title: '日期',
          key: 'date'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          forbidRemove: true,
          showRemoveButton: true
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          forbidRemove: false,
          showRemoveButton: true
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          forbidRemove: false,
          showRemoveButton: false
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          forbidRemove: false,
          showRemoveButton: true
        }
      ],
      rowHandle: {
        remove: {
          icon: 'el-icon-delete',
          size: 'small',
          fixed: 'right',
          confirm: true,
          show (index, row) {
            if (row.showRemoveButton) {
              return true
            }
            return false
          },
          disabled (index, row) {
            if (row.forbidRemove) {
              return true
            }
            return false
          }
        }
      }
    }
  },
  methods: {
    handleRowRemove ({ index, row }, done) {
      setTimeout(() => {
        console.log(index)
        console.log(row)
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        done()
      }, 300)
    }
  }
}
</script>`
