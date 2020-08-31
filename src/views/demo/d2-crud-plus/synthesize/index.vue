<template>
  <d2-container :class="{'page-compact':crud.pageOptions.compact}">
    <template slot="header">综合示例
      <d2-link-btn  style='float:right' title="更多示例" link="http://qiniu.veryreader.com/D2CrudPlusExample/"/>
    </template>
    <d2-crud-x
        ref="d2Crud"
        v-bind="_crudProps"
        v-on="_crudListeners"
        @customHandleBtn="customHandleBtnHandle"
    >

      <div slot="header">
        <crud-search ref="search" :options="crud.searchOptions" @submit="handleSearch"  />

        <el-button-group >
          <el-button   size="small" type="primary" @click="addRow"><i class="el-icon-plus"></i> 新增</el-button>
        </el-button-group>

        <crud-toolbar :search.sync="crud.searchOptions.show"
                      :compact.sync="crud.pageOptions.compact"
                      :columns="crud.columns"
                      @refresh="doRefresh()"
                      @columns-filter-changed="handleColumnsFilterChanged"/>
      </div>

      <template slot="expandSlot" slot-scope="scope">
        这里显示行展开数据:{{scope.row.data}}
      </template>

      <span slot="PaginationPrefixSlot" class="prefix" >
        <el-button class="square" size="mini" title="批量删除"   @click="batchDelete" icon="el-icon-delete" :disabled="!multipleSelection || multipleSelection.length==0"  />
      </span>

    </d2-crud-x>
  </d2-container>
</template>

<script>
import { AddObj, GetList, UpdateObj, DelObj, BatchDel } from './api'
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
import helper from './helper'
export default {
  name: 'formColumn',
  components: {},
  mixins: [d2CrudPlus.crud],
  data () {
    return {
      helper: helper,
      multipleSelection: undefined
    }
  },
  computed: {
  },
  mounted () {
    // 修复首次加载表尾合计行无法显示的bug
    setTimeout(() => {
      this.getD2CrudTable().store.scheduleLayout()
    }, 1000)
  },
  methods: {
    getCrudOptions () {
      return crudOptions
    },
    pageRequest (query) {
      return GetList(query)
    },
    addRequest (row) {
      return AddObj(row)
    },
    updateRequest (row) {
      return UpdateObj(row)
    },
    delRequest (row) {
      return DelObj(row.id).then(ret => {
        // 手动更新加载项
        const data = this.getD2Crud().$refs.elTable.store.states.treeData
        if (data != null) {
          const item = data[row.parentId]
          if (item != null) {
            item.loaded = false
            item.expanded = false
          }
        }
        return ret
      })
    },
    batchDelRequest (ids) {
      return BatchDel(ids)
    },
    handleCurrentChange (currentRow, oldCurrentRow) {
      this.$message('单选' + currentRow.data)
    },
    customHandleBtnHandle ({ index, row }) {
      this.$message('自定义操作按钮：' + row.data)
    },
    checkSecond () {
      this.getD2CrudTable().toggleRowSelection(this.getD2CrudTableData()[0]) // 跟下面等效
      this.getD2Crud().$refs.elTable.toggleRowSelection(this.getD2Crud().d2CrudData[1])
    }
  }
}
</script>
