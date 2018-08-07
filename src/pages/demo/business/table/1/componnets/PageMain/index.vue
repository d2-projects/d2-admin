<template>
  <div>
    <el-form
      :inline="true"
      size="mini">
      <el-form-item :label="`已选数据下载 [ ${currentTableData.length} ]`">
        <el-button-group>
          <el-button
            type="primary"
            size="mini"
            :disabled="currentTableData.length === 0"
            @click="handleDownloadXlsx(currentTableData)">
            xlsx
          </el-button>
          <el-button
            type="primary"
            size="mini"
            :disabled="currentTableData.length === 0"
            @click="handleDownloadCsv(currentTableData)">
            csv
          </el-button>
        </el-button-group>
      </el-form-item>
      <el-form-item :label="`已选数据下载 [ ${multipleSelection.length} ]`">
        <el-button-group>
          <el-button
            type="primary"
            size="mini"
            :disabled="multipleSelection.length === 0"
            @click="handleDownloadXlsx(multipleSelection)">
            xlsx
          </el-button>
          <el-button
            type="primary"
            size="mini"
            :disabled="multipleSelection.length === 0"
            @click="handleDownloadCsv(multipleSelection)">
            csv
          </el-button>
        </el-button-group>
      </el-form-item>
    </el-form>

    <el-table
      :data="currentTableData"
      v-loading="loading"
      size="mini"
      stripe
      style="width: 100%;"
      @selection-change="handleSelectionChange">

      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

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
          <boolean-control
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
          </boolean-control>
        </template>
      </el-table-column>

      <el-table-column label="状态" width="50" align="center">
        <template slot-scope="scope">
          <boolean-control-mini
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
          </boolean-control-mini>
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
  </div>
</template>

<script>
import BooleanControl from '../BooleanControl'
import BooleanControlMini from '../BooleanControlMini'
export default {
  components: {
    BooleanControl,
    BooleanControlMini
  },
  props: {
    tableData: {
      default: () => []
    },
    loading: {
      default: false
    }
  },
  data () {
    return {
      currentTableData: [],
      multipleSelection: []
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
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleDownloadXlsx (data) {
      const columns = [
        { label: '卡密', prop: 'key' }
      ]
      this.$export.excel({
        columns,
        data
      })
        .then(() => {
          this.$message('导出表格成功')
        })
    },
    handleDownloadCsv (data) {
      const columns = [
        { label: '卡密', prop: 'key' }
      ]
      this.$export.csv({
        columns,
        data
      })
        .then(() => {
          this.$message('导出CSV成功')
        })
    }
  }
}
</script>
