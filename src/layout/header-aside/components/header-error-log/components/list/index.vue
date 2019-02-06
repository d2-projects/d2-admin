<template>
  <el-table
    :data="logReversed"
    border
    stripe
    style="width: 100%"
    size="mini">
    <el-table-column type="expand">
      <div slot-scope="{ row = {} }" class="d2-error-log-list__expand-group">
        <expand-item
          :type="row.type"
          title="类型"
          :value="row.type === 'log' ? '日志' : '异常'"/>
        <expand-item
          :type="row.type"
          title="内容"
          :value="row.info"/>
        <expand-item
          v-if="row.type === 'error'"
          type="error"
          title="报错组件"
          :value="get(row, 'instance.$vnode.tag', '')"/>
        <expand-item
          v-if="row.type === 'error'"
          type="error"
          title="错误名称"
          :value="get(row, 'err.name', '')"/>
        <expand-item
          v-if="row.type === 'error'"
          type="error"
          title="错误信息"
          :value="get(row, 'err.message', '')"/>
        <expand-item
          v-if="row.type === 'error'"
          type="error"
          title="错误堆栈"
          value="见下">
          <div style="overflow: auto;">
            <pre>{{stackBeautify(row.err)}}</pre>
          </div>
        </expand-item>
        <expand-item
          :type="row.type"
          title="用户名"
          :value="get(row, 'user.name', '')"/>
        <expand-item
          :type="row.type"
          title="uuid"
          :value="row.uuid"/>
        <expand-item
          :type="row.type"
          title="token"
          :value="row.token"/>
        <expand-item
          :type="row.type"
          title="页面地址"
          :value="row.url"/>
        <expand-item
          :type="row.type"
          title="时间"
          :value="row.time"/>
      </div>
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
          v-if="get(scope, 'row.type') === 'error'"
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
      label="内容"
      prop="info"
      :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column
      label="错误类型"
      width="140px"
      :show-overflow-tooltip="true">
      <template
        slot-scope="scope">
        {{get(scope, 'row.err.name', '')}}
      </template>
    </el-table-column>
    <el-table-column
      label="错误信息"
      width="300px">
      <template
        slot-scope="scope">
        {{get(scope, 'row.err.message', '')}}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapState } from 'vuex'
import { get, cloneDeep } from 'lodash'
import ExpandItem from './components/ExpandItem'
export default {
  name: 'd2-error-log-list',
  components: {
    ExpandItem
  },
  computed: {
    ...mapState('d2admin', {
      logList: state => state.log.list
    }),
    logReversed () {
      return cloneDeep(this.logList).reverse()
    }
  },
  methods: {
    get,
    filterType (value, row) {
      return row.type === value
    },
    stackBeautify (err) {
      return get(err, 'stack', '')
    }
  }
}
</script>

<style lang="scss">
.d2-error-log-list__expand-group {
  .d2-error-log-list__expand {
    padding-left: 20px;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0px;
    }
    .d2-error-log-list__expand-title {
      font-size: 16px;
      font-weight: bold;
      margin-top: 0px;
      margin-bottom: 10px;
    }
    .d2-error-log-list__expand-value {
      font-size: 12px;
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }
  .d2-error-log-list__expand--log {
    border-left: 4px solid $color-info;
  }
  .d2-error-log-list__expand--error {
    border-left: 4px solid $color-danger;
  }
}
</style>
