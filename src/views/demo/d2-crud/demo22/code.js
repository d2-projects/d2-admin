export default `<template>
  <div>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data"
      :add-template="addTemplate"
      :form-options="formOptions"
      :add-rules="addRules"
      @row-add="handleRowAdd"
      @dialog-cancel="handleDialogCancel">
      <el-button slot="header" style="margin-bottom: 5px" @click="addRow">新增</el-button>
    </d2-crud>
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
        text: '点我查看表单校验',
        icon: 'el-icon-plus',
        size: 'small'
      },
      addTemplate: {
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
        }
      },
      formOptions: {
        labelWidth: '80px',
        labelPosition: 'left',
        saveLoading: false
      },
      addRules: {
        date: [ { required: true, message: '请输入日期', trigger: 'blur' } ],
        name: [ { required: true, message: '请输入姓名', trigger: 'blur' } ],
        address: [ { required: true, message: '请输入地址', trigger: 'blur' } ]
      }
    }
  },
  methods: {
    addRow () {
      this.$refs.d2Crud.showDialog({
        mode: 'add'
      })
    },
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
