<template>
  <Container type="card-full">
    <template slot="header">
      <el-button type="primary" @click="getData"><Icon name="paper-plane"></Icon> 发送请求</el-button>
    </template>
    <el-table v-bind="table">
      <el-table-column prop="id" label="id" width="50" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" width="100">
        <template slot-scope="scope">
          <el-input v-bind="inputSetting" placeholder="姓名"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="address1" label="出生地" align="center">
        <template slot-scope="scope">
          <el-input v-bind="inputSetting" placeholder="出生地"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="address2" label="现居地" align="center">
        <template slot-scope="scope">
          <el-input v-bind="inputSetting" placeholder="现居地">
          </el-input>
        </template>
      </el-table-column>
    </el-table>
  </Container>
</template>

<script>
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
      },
      // 表格中输入框的通用设置
      inputSetting: {
        size: 'small',
        style: {
          maxWidth: '200px'
        }
      }
    }
  },
  mounted () {
    // 自动请求数据
    this.getData()
  },
  methods: {
    // 请求数据
    async getData () {
      this.table.data = this.dataFilter(await this.dataMaker())
    },
    // 过滤数据部分 模拟过滤掉 star 字段
    dataFilter (val) {
      const rowFilter = ({
        id = '',
        name = '',
        address1 = '',
        address2 = ''
      }) => ({id, name, address1, address2})
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
    }
  }
}
</script>
