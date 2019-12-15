<template>
  <d2-container>
    <template slot="header">CRUD事件</template>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data">
      <el-button slot="header" style="margin-bottom: 5px" @click="updateCell">更新第二行日期</el-button>
      <el-button slot="header" style="margin-bottom: 5px" @click="updateRow">更新第三行所有数据</el-button>
      <el-button slot="header" style="margin-bottom: 5px" @click="addRow">新增一行</el-button>
      <el-button slot="header" style="margin-bottom: 5px" @click="removeRow">删除最后一行</el-button>
    </d2-crud>
    <el-card shadow="never" class="d2-mb">
      <d2-markdown :source="doc"/>
    </el-card>
    <el-card shadow="never" class="d2-mb">
      <d2-highlight :code="code"/>
    </el-card>
    <d2-link-btn
      slot="footer"
      title="文档"
      link="https://d2.pub/zh/doc/d2-crud-v2"/>
  </d2-container>
</template>

<script>
import '../install'
import doc from './doc.md'
import code from './code.js'

export default {
  data () {
    return {
      doc,
      code,
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
          forbidEdit: true,
          showEditButton: true
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          forbidEdit: false,
          showEditButton: true
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          forbidEdit: false,
          showEditButton: false
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          forbidEdit: false,
          showEditButton: true
        }
      ]
    }
  },
  methods: {
    updateCell () {
      this.$refs.d2Crud.updateCell(1, 'date', '2018-01-01')
    },
    updateRow () {
      this.$refs.d2Crud.updateRow(2, {
        date: '2018-01-01',
        name: '王小小',
        address: '上海市普陀区金沙江路 2333 弄'
      })
    },
    addRow () {
      this.$refs.d2Crud.addRow({
        date: '2018-01-01',
        name: '王小二',
        address: '上海市普陀区金沙江路 7777 弄'
      })
    },
    removeRow () {
      this.$refs.d2Crud.removeRow(this.$refs.d2Crud.d2CrudData.length - 1)
    }
  }
}
</script>
