<template>
  <Container type="card-full">
    <template slot="header">
      <el-button type="primary" @click="ajax">
        <Icon name="paper-plane"></Icon>
        发送请求
      </el-button>
    </template>
    <el-table v-bind="table">
      <el-table-column
        prop="id"
        label="id"
        width="50"
        align="center">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="100">
        <template slot-scope="scope">
          <el-input
            v-bind="inputSetting"
            placeholder="姓名">
          </el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="address1"
        label="出生地">
        <template slot-scope="scope">
          <el-input
            v-bind="inputSetting"
            placeholder="出生地">
          </el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="address2"
        label="现居地">
        <template slot-scope="scope">
          <el-input
            v-bind="inputSetting"
            placeholder="现居地">
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
      table: {
        data: [],
        size: 'mini',
        stripe: true,
        border: true
      },
      inputSetting: {
        size: 'small',
        style: {
          maxWidth: '200px'
        }
      }
    }
  },
  methods: {
    ajax () {
      this.table.data = Mock.mock({
        'list|4-10': [{
          'id|+1': 1,
          'name': '@CNAME',
          'address1': '@CITY',
          'address2': '@CITY'
        }]
      }).list
    }
  }
}
</script>
