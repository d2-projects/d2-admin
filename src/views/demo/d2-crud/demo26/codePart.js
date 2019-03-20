export default `<template>
  <div>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data"
      :rowHandle="rowHandle"
      :edit-template="editTemplate"
      @d2-data-change="handleDataChange"
      @row-edit="handleRowEdit"
      @dialog-cancel="handleDialogCancel"/>
  </div>
</template>

<script>
import MyTag from './MyTag'

export default {
  components: {
    MyTag
  },
  data () {
    return {
      columns: [
        {
          title: '日期',
          key: 'date',
          width: '180'
        },
        {
          title: '姓名',
          key: 'name',
          width: '180'
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '检查状态（点击可修改）',
          key: 'check',
          component: {
            name: MyTag
          }
        }
      ],
      data: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          check: true
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          check: false
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          check: true
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          check: true
        }
      ],
      rowHandle: {
        columnHeader: '编辑表格',
        edit: {
          icon: 'el-icon-edit',
          text: '点我编辑自定义表单组件',
          size: 'small'
        }
      },
      editTemplate: {
        date: {
          title: '日期',
          value: ''
        },
        name: {
          title: '姓名',
          value: ''
        },
        address: {
          title: '地址',
          value: ''
        },
        check: {
          title: '检查状态（点击进行修改）',
          value: false,
          component: {
            name: MyTag
          }
        }
      },
      formOptions: {
        labelWidth: '80px',
        labelPosition: 'left',
        saveLoading: false
      }
    }
  },
  methods: {
    handleDataChange (data) {
      console.log(data)
    },
    handleRowEdit ({ index, row }, done) {
      this.formOptions.saveLoading = true
      setTimeout(() => {
        console.log(index)
        console.log(row)
        this.$message({
          message: '编辑成功',
          type: 'success'
        })
        done()
        this.formOptions.saveLoading = false
      }, 300)
    },
    handleDialogCancel (done) {
      this.$message({
        message: '取消编辑',
        type: 'warning'
      })
      done()
    }
  }
}
</script>`
