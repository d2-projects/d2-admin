<template>
  <d2-container>
    <template slot="header">表格内编辑</template>
    <d2-crud
      :columns="columns"
      :data="data"
      @cell-data-change="handleCellDataChange"/>
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
          key: 'date',
          component: {
            name: 'el-date-picker',
            size: 'small'
          }
        },
        {
          title: '姓名',
          key: 'name',
          component: {
            name: 'el-select',
            options: [
              {
                value: '王小虎',
                label: '王小虎'
              },
              {
                value: '王中虎',
                label: '王中虎'
              },
              {
                value: '王老虎',
                label: '王老虎'
              }
            ],
            size: 'small'
          }
        },
        {
          title: '地址',
          key: 'address',
          component: {
            name: 'el-input',
            size: 'small'
          }
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
  },
  methods: {
    handleCellDataChange ({ rowIndex, key, value, row }) {
      console.log(rowIndex)
      console.log(key)
      console.log(value)
      console.log(row)
    }
  }
}
</script>
