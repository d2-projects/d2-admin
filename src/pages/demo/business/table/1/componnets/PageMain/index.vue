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
          type="info">
          {{scope.row.value}}
        </el-tag>
      </template>
    </el-table-column>

    <el-table-column label="状态" width="60" align="center">
      <template slot-scope="scope">
        <el-popover
          placement="left"
          title="切换状态"
          width="200"
          trigger="hover">
          <el-switch
            v-model="currentTableData[scope.$index].type"
            active-color="#67C23A"
            inactive-color="#F56C6C"
            active-text="正常"
            inactive-text="禁用"
            @change="(val) => {
              handleSwitchChange(val, scope.$index)
            }">
          </el-switch>
          <el-tag slot="reference" size="mini">
            {{scope.row.type}}
          </el-tag>
        </el-popover>
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
        <el-tag v-if="scope.row.used" type="mini">已经使用</el-tag>
        <el-tag v-else type="mini">未使用</el-tag>
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
export default {
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
      console.log('val', val)
      console.log('index', index)
    }
  }
}
</script>

