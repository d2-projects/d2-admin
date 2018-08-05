<template>
  <el-table
    :data="log"
    border
    stripe
    style="width: 100%"
    size="mini">

    <el-table-column type="expand">
      <template slot-scope="props">
        <div style="overflow: auto;">
          <pre>{{stackBeautify(props.row.err)}}</pre>
        </div>
      </template>
    </el-table-column>

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
      label="地址"
      prop="url"
      width="140px"
      :show-overflow-tooltip="true">
    </el-table-column>

    <el-table-column
      label="组件"
      width="140px"
      :show-overflow-tooltip="true">
      <template
        slot-scope="scope">
        {{scope.row.vm ? scope.row.vm.$vnode.tag : ''}}
      </template>
    </el-table-column>

    <el-table-column
      label="信息"
      prop="info"
      width="200px"
      :show-overflow-tooltip="true">
    </el-table-column>

    <el-table-column
      label="错误类型"
      width="140px"
      :show-overflow-tooltip="true">
      <template
        slot-scope="scope">
        {{scope.row.err ? scope.row.err.name : ''}}
      </template>
    </el-table-column>

    <el-table-column
      label="错误信息">
      <template
        slot-scope="scope">
        {{scope.row.err ? scope.row.err.message : ''}}
      </template>
    </el-table-column>

    <el-table-column
      label="time"
      prop="time"
      width="150px"
      :show-overflow-tooltip="true">
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
    },
    stackBeautify (err) {
      if (!err) {
        return ''
      }
      return err.stack
    }
  }
}
</script>
