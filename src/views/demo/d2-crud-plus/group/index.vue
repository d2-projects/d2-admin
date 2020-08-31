<template>
  <d2-container :class="{'page-compact':crud.pageOptions.compact}">
    <template slot="header">表单分组
      <d2-link-btn  style='float:right' title="更多示例" link="http://qiniu.veryreader.com/D2CrudPlusExample/"/>
    </template>
    <d2-crud-x
        ref="d2Crud"
        v-bind="_crudProps"
        v-on="_crudListeners"
        >
      <div slot="header">
        <crud-search ref="search" :options="crud.searchOptions" @submit="handleSearch"  />
        <el-button size="small" type="primary" @click="addRow"><i class="el-icon-plus"/> 新增</el-button>
        <crud-toolbar :search.sync="crud.searchOptions.show"
                      :compact.sync="crud.pageOptions.compact"
                      :columns="crud.columns"
                      @refresh="doRefresh()"
                      @columns-filter-changed="handleColumnsFilterChanged"/>
      </div>
      <div slot="priceGroupTitleSlot" slot-scope="scope">
        <h3 style="display: inline;" class="group-title"> <i class="header-icon" :class="scope.group.icon"/> {{scope.group.title}}</h3>
        <span style="margin-left:10px">（我是自定义标题）</span>
      </div>

      <div slot="customFormSlot" >
        <span >自定义选项</span>
      </div>

    </d2-crud-x>
  </d2-container>
</template>

<script>
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
import { GetList, AddObj, UpdateObj, DelObj } from './api'
export default {
  name: 'formGroup',
  mixins: [d2CrudPlus.crud],
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
      return DelObj(row.id)
    }
  }
}
</script>
<style>
  .d2-crud .group-title{color:#67c23a}
</style>
