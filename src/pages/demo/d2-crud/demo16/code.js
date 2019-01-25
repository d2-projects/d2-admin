export default `<template>
  <div>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data"
      add-title="我的新增"
      :add-template="addTemplate"
      :form-options="formOptions"
      @dialog-open="handleDialogOpen"
      @row-add="handleRowAdd"
      @dialog-cancel="handleDialogCancel">
      <el-button slot="header" style="margin-bottom: 5px" @click="addRow">新增</el-button>
      <el-button slot="header" style="margin-bottom: 5px" @click="addRowWithNewTemplate">使用自定义模板新增</el-button>
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
      addTemplate: {
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
    handleDialogOpen ({ mode }) {
      this.$message({
        message: '打开模态框，模式为：' + mode,
        type: 'success'
      })
    },
    // 普通的新增
    addRow () {
      this.$refs.d2Crud.showDialog({
        mode: 'add'
      })
    },
    // 传入自定义模板的新增
    addRowWithNewTemplate () {
      this.$refs.d2Crud.showDialog({
        mode: 'add',
        template: {
          name: {
            title: '姓名',
            value: ''
          },
          value1: {
            title: '新属性1',
            value: ''
          },
          value2: {
            title: '新属性2',
            value: ''
          }
        }
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

        // done可以传入一个对象来修改提交的某个字段
        done({
          address: '我是通过done事件传入的数据！'
        })
        this.formOptions.saveLoading = false
      }, 300)
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
