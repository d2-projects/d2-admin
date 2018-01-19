<template>
  <Container>
    <div slot="header">
      <el-tooltip effect="dark" content="生成数据需要几秒钟的时间 依电脑配置而定" placement="top">
        <el-button v-if="tableDataTemp.length === 0" @click="makeData">Mock 10,000 条数据</el-button>
      </el-tooltip>
      <el-button v-if="tableDataTemp.length > 0" @click="tableData = tableDataTemp">渲染数据</el-button>
    </div>
    <table v-if="tableData.length > 0" border="1" class="gridtable">
      <tr v-for="(item, index) in tableData" :key="index">
        <th v-for="(key, keyIndex) in Object.keys(item)" :key="keyIndex">{{item[key]}}</th>
      </tr>
    </table>
  </Container>
</template>

<script>
import Mock from 'mockjs'
export default {
  data () {
    return {
      tableDataTemp: [],
      tableData: []
    }
  },
  methods: {
    makeData () {
      this.tableDataTemp = Mock.mock({
        'list|10000': [{
          'id|+1': 1,
          'name': '@CNAME',
          'num1': '@NATURAL(10, 1000)',
          'num2': '@NATURAL(10, 1000)',
          'num3': '@NATURAL(10, 1000)',
          'num4': '@NATURAL(10, 1000)',
          'num5': '@NATURAL(10, 1000)',
          'num6': '@NATURAL(10, 1000)',
          'num7': '@NATURAL(10, 1000)',
          'num8': '@NATURAL(10, 1000)',
          'num9': '@NATURAL(10, 1000)',
          'num10': '@NATURAL(10, 1000)',
          'num11': '@NATURAL(10, 1000)',
          'num12': '@NATURAL(10, 1000)',
          'num13': '@NATURAL(10, 1000)',
          'num14': '@NATURAL(10, 1000)',
          'num15': '@NATURAL(10, 1000)'
        }]
      }).list
    }
  }
}
</script>
