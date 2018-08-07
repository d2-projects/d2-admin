<template>
  <el-table
    :data="currentTableData"
    size="mini"
    stripe
    style="width: 100%">

    <el-table-column label="卡密" :show-overflow-tooltip="true">
      <template slot-scope="scope">
        {{scope.row.key}}
      </template>
    </el-table-column>

    <el-table-column label="面值" width="60" align="center">
      <template slot-scope="scope">
        <el-tag
          size="mini"
          type="success">
          {{scope.row.value}}
        </el-tag>
      </template>
    </el-table-column>

    <el-table-column label="状态" width="50" align="center">
      <template slot-scope="scope">
        <type-control
          :value="scope.row.type"
          @change="(val) => {
            handleSwitchChange(val, scope.$index)
          }">
          <d2-icon
            name="check-circle"
            style="font-size: 20px; line-height: 32px; color: #67C23A;"
            slot="active"/>
          <d2-icon
            name="times-circle"
            style="font-size: 20px; line-height: 32px; color: #F56C6C;"
            slot="inactive"/>
        </type-control>
      </template>
    </el-table-column>

    <el-table-column label="状态" width="50" align="center">
      <template slot-scope="scope">
        <type-control-mini
          :value="scope.row.type"
          @change="(val) => {
            handleSwitchChange(val, scope.$index)
          }">
          <d2-icon
            name="check-circle"
            style="font-size: 20px; line-height: 32px; color: #67C23A;"
            slot="active"/>
          <d2-icon
            name="times-circle"
            style="font-size: 20px; line-height: 32px; color: #F56C6C;"
            slot="inactive"/>
        </type-control-mini>
      </template>
    </el-table-column>

    <el-table-column label="管理员" width="60">
      <template slot-scope="scope">
        {{scope.row.admin}}
      </template>
    </el-table-column>

    <el-table-column label="管理员备注" :show-overflow-tooltip="true">
      <template slot-scope="scope">
        {{scope.row.adminNote}}
      </template>
    </el-table-column>

    <el-table-column label="创建时间" width="150" :show-overflow-tooltip="true">
      <template slot-scope="scope">
        {{scope.row.dateTimeCreat}}
      </template>
    </el-table-column>

    <el-table-column label="使用状态" width="100" align="center">
      <template slot-scope="scope">
        <el-tag
          size="mini"
          :type="scope.row.used ? 'info' : ''">
          {{scope.row.used ? '已使用' : '未使用'}}
        </el-tag>
      </template>
    </el-table-column>

    <el-table-column label="使用时间" width="150" :show-overflow-tooltip="true">
      <template slot-scope="scope">
        {{scope.row.dateTimeUse}}
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
import TypeControl from '../TypeControl'
import TypeControlMini from '../TypeControlMini'
export default {
  components: {
    TypeControl,
    TypeControlMini
  },
  props: {
    tableData: {
      default: () => []
    }
  },
  data () {
    return {
      currentTableData: []
    }
  },
  watch: {
    tableData: {
      handler (val) {
        this.currentTableData = val
      },
      immediate: true
    }
  },
  methods: {
    handleSwitchChange (val, index) {
      const oldValue = this.currentTableData[index]
      this.$set(this.currentTableData, index, {
        ...oldValue,
        type: val
      })
      // 注意 这里并没有把修改后的数据传递出去 如果需要的话请自行修改
    }
  }
}
</script>

