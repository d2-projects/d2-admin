<template>
  <d2-container>
    <div slot="header">
      <el-button
        size="mini"
        type="primary"
        @click="ajax">
        <d2-icon name="paper-plane"/>
        发送请求
      </el-button>
    </div>
    <el-table
      v-bind="table"
      style="width: 100%">
      <el-table-column
        v-for="(item, index) in table.columns"
        :key="index"
        :prop="item.prop"
        :label="item.label">
      </el-table-column>
    </el-table>
  </d2-container>
</template>

<script>
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
      this.$axios.get('/api/demo/plugins/mock/ajax')
        .then(res => {
          this.table.columns = Object.keys(res.list[0]).map(e => ({
            label: e,
            prop: e
          }))
          this.table.data = res.list
        })
    }
  }
}
</script>
