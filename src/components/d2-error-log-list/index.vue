<template>
  <el-table
    :data="log"
    style="width: 100%">
    <!-- <el-table-column type="expand">
      <template slot-scope="props">
      </template>
    </el-table-column> -->
    <el-table-column
      prop="type"
      label="类型"
      width="80px"
      align="center"
      :filters="[
        { text: '日志', value: 'log' },
        { text: '异常', value: 'error' }
      ]"
      :filter-multiple="false"
      :filter-method="filterType"
      filter-placement="bottom">
      <template slot-scope="scope">
        <el-tag
          v-if="scope.row.type === 'error'"
          size="mini"
          type="danger">
          <d2-icon name="bug"/> Bug
        </el-tag>
        <el-tag
          v-else
          size="mini"
          type="info">
          <d2-icon name="dot-circle-o"/> Log
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column
      label="info"
      prop="info">
    </el-table-column>
    <el-table-column label="err">
      <template slot-scope="scope">
        {{scope.row.vm ? scope.row.vm.$vnode.tag : ''}}
        {{scope.row.err}}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'd2-error-log-list',
  computed: {
    ...mapState({
      log: state => state.d2admin.log
    })
  },
  methods: {
    filterType (value, row) {
      console.log('value', value)
      return row.type === value
    }
  }
}
</script>
