<template>
	<d2-container>
    <el-button-group slot="header">
      <el-button size="mini" @click="scrollRowTo(2)">跳转到第3行</el-button>
			<el-button size="mini" @click="scrollRowTo(Math.round(tableDataHandled.length * 0.8))">
        跳转到第{{Math.round(tableDataHandled.length * 0.8) + 1}}行
      </el-button>
			<el-button size="mini" @click="editCell">编辑第{{ editRow }}行第{{ editCol }}列</el-button>
			<el-button size="mini" @click="changeData(Math.round(Math.random() * 30000))">改变数据</el-button>
			<el-button size="mini" @click="changeDefaultSort">改变默认排序方式</el-button>
    </el-button-group>
    <h1 class="d2-mt-0">当前数据量 {{tableDataHandled.length}}</h1>
    <div class="wraper">
			<bigdata-table
				ref="table"
				v-model="tableDataHandled"
				:row-num="20"
				:col-num="7"
				show-index
				start-edit-type="dblclick"
				fixed
				stripe
				:col-width="200"
				:header-height="50"
				:can-edit="canEdit"
				:at-right-cell-posi="20"
				:at-left-cell-posi="40"
				:columns="columns"
				:index-render="indexRender"
				:fixed-col="0"
				:sort-index="2"
				:default-sort="defaultSort"
				selectable
				paste
				:beforeSave="beforeSave"
				:disabled-hover="false"
				@on-success-save="handleSuccessEdit"
				@on-fail-save="handleFailEdit"
				@on-moving-on-header="handleMoving"
				@on-click-tr="handleClickTr"
				@on-click-td="handleClickTd"/>
		</div>
  </d2-container>
</template>

<script>
/* eslint-disable */
// 本页是由 https://github.com/lison16/vue-bigdata-table/blob/master/src/App.vue 修改而来
// 由于原页面有太多的地方不符合本项目的代码规范，本页面不做代码检查
export default {
  data () {
    return {
      tableData: [],
      columns: [],
      tableDataHandled: [], // 带有数据的表格数据
      emptyData: [], // 空的表格数据
      canEdit: true,
      editRow: 1,
      editCol: 1,
      defaultSort: {1: 'down'}
    }
  },
  watch: {
    tableDataHandled (res) {
      // res
    }
  },
  methods: {
    indexRender (h, index) {
      return h('div', {}, index + 1)
    },
    handleMoving (e) {
      // this.$log('handleMoving', e.atGivenArea + '......' + e.colIndex)
    },
    scrollRowTo (index) {
      this.$refs.table.scrollToRow(index)
    },
    handleClickTr (index) {
      this.$log('handleClickTr', index)
    },
    handleClickTd (params) {
      this.$log('handleClickTd', params)
    },
    clickEditBtn () {
      this.canEdit = !this.canEdit
    },
    beforeSave ({ row, col, value }) {
      return (row + 1) % 2
    },
    handleSuccessEdit ({ row, col, value, initRowIndex }) {
      this.$message(`第${initRowIndex + 1}行第${initRowIndex + 1}列改为${value}`)
    },
    handleFailEdit (res) {
      this.$message('偶数行不能编辑')
    },
    editCell () {
      this.$refs.table.editCell(this.editRow - 1, this.editCol - 1)
    },
    changeData (rowLen) {
      let dataArr = []
      for (let i = 0; i < rowLen; i++) {
        let arr = [
          i + '00',
          'count' + i,
          '23.4534534345',
          '0023' + i,
          '123.234534534534',
          'namenasdfsdfsdfsdfssdfsdfsdsdfsdfsf' + i,
          '2014年1月1日'
        ]
        dataArr.push(arr)
      }
      this.tableDataHandled = dataArr
    },
    changeDefaultSort () {
      this.defaultSort = {2: 'up'}
    }
  },
  mounted () {
    this.changeData(10000)
    let columns = ['这是数字', '这是字符1列', '这是纬度', '这是数字', '这是经度', '这是字符2列', '这是时间'].map((title, col) => {
      return {
        title: title,
        align: 'center'
      }
    })
    this.columns = columns
  }
}
</script>

<style lang="scss">
.wraper{
  height: 400px;
  overflow: auto;
}
</style>
