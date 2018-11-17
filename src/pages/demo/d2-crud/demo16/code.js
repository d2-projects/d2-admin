export default `<template>
  <div>
    <d2-crud
      :columns="columns"
      :data="data"
      title="D2 CRUD"
      add-mode
      :add-button="addButton"
      :form-template="formTemplate"
      :form-options="formOptions"
      @row-add="handleRowAdd"
      @dialog-cancel="handleDialogCancel"/>
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
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
      ],
      addButton: {
        icon: 'el-icon-plus',
        size: 'small'
      },
      formTemplate: {
        date: {
          title: '日期',
          value: '2016-05-05'
        },
        name: {
          title: '姓名',
          value: '王小虎'
        },
        address: {
          title: '地址',
          value: '上海市普陀区金沙江路 1520 弄'
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
    handleRowAdd (row, done) {
      this.formOptions.saveLoading = true
      setTimeout(() => {
        console.log(row)
        this.$message({
          message: '保存成功',
          type: 'success'
        });
        done()
        this.formOptions.saveLoading = false
      }, 300);
    },
    handleDialogCancel (done) {
      this.$message({
        message: '取消保存',
        type: 'warning'
      });
      done()
    }
  }
}
</script>`
