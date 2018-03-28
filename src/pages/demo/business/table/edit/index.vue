<template>
  <Container type="card-full">
    <template slot="header">
      当前激活的单元格
    </template>
    <el-table v-bind="table">
      <el-table-column prop="id" label="id" width="50" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" width="100">
        <template slot-scope="scope">
          <el-input v-bind="inputSettingMaker(scope)"></el-input>
          <!-- <button @click="log(scope)">测试</button> -->
        </template>
      </el-table-column>
      <el-table-column prop="address1" label="出生地" align="center">
        <template slot-scope="scope">
          <el-input v-bind="inputSettingMaker(scope)"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="address2" label="现居地" align="center">
        <template slot-scope="scope">
          <el-input v-bind="inputSettingMaker(scope)"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100" align="center">
        <template slot-scope="scope">
          <el-button v-bind="editButtonSettingMaker(scope)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </Container>
</template>

<script>
// import sleep from '@/utils/sleep.js'
import Mock from 'mockjs'
export default {
  data () {
    return {
      // 绑定到表格的数据
      table: {
        data: [],
        size: 'mini',
        stripe: true,
        border: true
      }
    }
  },
  created () {
    // 自动请求数据
    this.getData()
  },
  methods: {
    // 请求数据
    async getData () {
      this.table.data = this.dataFilter(await this.dataMaker())
    },
    // 过滤数据部分 模拟过滤掉 star 字段 并且添加 __edit 字段
    dataFilter (val) {
      const rowFilter = ({
        id = '',
        name = '',
        address1 = '',
        address2 = ''
      }) => ({
        id,
        name,
        address1,
        address2,
        __edit: false // 在这里可以添加额外的判断逻辑
      })
      return val.map(e => rowFilter(e))
    },
    // 模拟返回数据。没有必要写在全局 mock 设置中，就在这里这样写了，这样删文件的时候也好处理
    dataMaker () {
      return new Promise((resolve, reject) => {
        resolve(Mock.mock({
          'list|4-10': [{
            'id|+1': 1,
            'name': '@CNAME',
            'address1': '@CITY',
            'address2': '@CITY',
            'star|1-5': '★'
          }]
        }).list)
      })
    },
    // 返回输入组件需要的参数
    inputSettingMaker (scope) {
      return {
        value: scope.row[scope.column.property],
        placeholder: scope.column.label,
        size: 'small',
        style: {
          maxWidth: '200px'
        }
      }
    },
    // 返回编辑按钮需要的参数
    editButtonSettingMaker (scope) {
      const isEdit = scope.row.__edit
      return {
        size: 'small'
      }
    },
    // 测试
    log (scope) {
      console.log(scope)
    }
  }
}
</script>
