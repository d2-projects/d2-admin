<template>
  <Container type="card-full">
    <template slot="header">
      <el-button type="primary" @click="ajax">
        <Icon name="paper-plane"></Icon>
        发送请求
      </el-button>
    </template>
  </Container>
</template>

<script>
import Mock from 'mockjs'
export default {
  data () {
    return {
      table: {
        columns: [],
        data: [],
        size: 'mini',
        stripe: true,
        border: true
      }
    }
  },
  methods: {
    ajax () {
      const mockData = Mock.mock({
        'list|4-10': [{
          'id|+1': 1,
          'name': '@CNAME',
          'star|1-5': '★',
          'delFlag|1': [0, 1],
          'creatDate': '@DATE',
          'address': '@CITY',
          'zip': '@ZIP'
        }]
      })
      console.log(mockData)
    }
  }
}
</script>
