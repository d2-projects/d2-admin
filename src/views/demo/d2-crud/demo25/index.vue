<template>
  <d2-container>
    <template slot="header">表格自定义组件</template>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data"
      @d2-data-change="handleDataChange"/>
    <el-card shadow="never" class="d2-mb">
      <d2-markdown :source="doc"/>
    </el-card>
    <el-card shadow="never" class="d2-mb">
      <h4>全局注册写法：</h4>
      <d2-highlight :code="codeOverall"/>
    </el-card>
    <el-card shadow="never" class="d2-mb">
      <h4>局部注册写法：</h4>
      <d2-highlight :code="codePart"/>
    </el-card>
    <el-card shadow="never" class="d2-mb">
      <h4>自定义组件 MyTag 代码：</h4>
      <d2-highlight :code="codeComponent"/>
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
import codeOverall from './codeOverall.js'
import codePart from './codePart.js'
import codeComponent from './codeComponent.js'
import MyTag from './MyTag'

export default {
  components: {
    MyTag
  },
  data () {
    return {
      doc,
      codeOverall,
      codePart,
      codeComponent,
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
            name: MyTag,
            props: {
              myProps: '我是通过props传过来的数据！'
            }
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
      ]
    }
  },
  methods: {
    handleDataChange (data) {
      console.log(data)
    }
  }
}
</script>
