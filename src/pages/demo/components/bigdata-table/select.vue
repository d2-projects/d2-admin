<template>
	<d2-container>
    <template slot="header">勾选</template>
    <div class="wraper">
			<bigdata-table
				v-model="tableDataHandled"
				:row-num="20"
				:col-num="7"
				show-index
				fixed
				stripe
				:col-width="200"
				:header-height="40"
				:columns="columns"
				:index-render="indexRender"
				:fixed-col="1"
				@on-click-tr="handleClickTr"/>
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
      tableDataSelected: [],
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
      return h('input', {
        domProps: {
          type: 'checkbox',
          checked: this.tableDataSelected[index]
        }
      }, '')
    },
    handleClickTr (index) {
      this.$set(this.tableDataSelected, index, !this.tableDataSelected[index])
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
      this.tableDataSelected = dataArr.map(e => false)
    },
    changeDefaultSort () {
      this.defaultSort = {2: 'up'}
    }
  },
  mounted () {
    this.changeData(1000)
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
