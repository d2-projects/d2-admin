<template>
  <d2-container>
    <template slot="header">带斑马纹表格</template>
    <d2-crud
      :columns="columns"
      :data="data"
      :options="options"/>
    <el-card shadow="never" class="d2-mb">
      <p>
        options对象可以对表格进行配置，其中stripe属性可以创建带斑马纹的表格。它接受一个Boolean，设置为true即为启用。代码如下：
      </p>
    </el-card>
    <el-card shadow="never" class="d2-mb">
      <d2-highlight :code="code"/>
    </el-card>
    <template slot="footer">
      <d2-link-btn title="D2 CRUD" link="https://github.com/d2-projects/d2-crud"/>
    </template>
  </d2-container>
</template>

<script>
import code from './code.js'

export default {
  data () {
    return {
      code,
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
      ],
      options: {
        stripe: true
      }
    }
  }
}
</script>
