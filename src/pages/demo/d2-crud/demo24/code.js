export default `<template>
  <div>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data">
      <el-input slot="header" placeholder="请输入内容" style="margin-bottom: 5px">
        <template slot="prepend">Http://</template>
        <template slot="append">.com</template>
      </el-input>
      <el-button slot="header" style="margin-bottom: 5px">自定义按钮1</el-button>
      <el-button slot="header" type="primary" round style="margin-bottom: 5px">自定义按钮2</el-button>
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
      ]
    }
  }
}
</script>`
