<template>
  <Container type="card-full">
    <template slot="header">
      当前激活的单元格
    </template>
    <el-table v-bind="table">
      <el-table-column prop="id" label="id" width="50" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" width="100">
        <template slot-scope="scope">
          <el-input
            v-bind="inputSetting"
            placeholder="姓名"
            :ref="refMaker(scope)"
            @focus="handleFocus(scope)">
          </el-input>
        </template>
      </el-table-column>
      <el-table-column prop="address1" label="出生地" align="center">
        <template slot-scope="scope">
          <el-input
            v-bind="inputSetting"
            placeholder="出生地"
            :ref="refMaker(scope)"
            @focus="handleFocus(scope)">
          </el-input>
        </template>
      </el-table-column>
      <el-table-column prop="address2" label="现居地" align="center">
        <template slot-scope="scope">
          <el-input
            v-bind="inputSetting"
            placeholder="现居地"
            :ref="refMaker(scope)"
            @focus="handleFocus(scope)">
          </el-input>
        </template>
      </el-table-column>
    </el-table>
  </Container>
</template>

<script>
import sleep from '@/utils/sleep.js'
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
  created () {
    // 自动请求数据
    this.getData()
  },
  mounted () {
    this.keyboardExtentInit()
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
    },
    // 返回ref名称
    refMaker (scope) {
      return `kb-${scope.$index}-${scope.column.property}-kb`
    },
    // 接收用户在表格元素上的“focus”事件 (也可能是别的事件触发)
    handleFocus (scope) {
      console.log(scope)
    },
    // 初始化键盘访问
    async keyboardExtentInit () {
      await sleep(1000)
      for (const propName in this.$refs) {
        if (/^kb-\d+-[a-zA-Z0-9-]+-kb$/.test(propName) && this.$refs.hasOwnProperty(propName)) {
          try {
            const input = this.$refs[propName].$refs.input
            if (input) {
              input.addEventListener('keydown', e => {
                console.log(e)
              })
            }
          } catch (error) {
            console.log(error)
          }
        }
      }
    }
  }
}
</script>
