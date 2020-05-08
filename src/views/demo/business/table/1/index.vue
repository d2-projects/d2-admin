<template>
  <d2-container>
    <demo-page-header
      slot="header"
      @submit="handleSubmit"
      ref="header"/>
    <demo-page-main
      :table-data="table"
      :loading="loading"/>
    <demo-page-footer
      slot="footer"
      :current="page.pageCurrent"
      :size="page.pageSize"
      :total="page.pageTotal"
      @change="handlePaginationChange"/>
  </d2-container>
</template>

<script>
export default {
  // name 值和本页的 $route.name 一致才可以缓存页面
  name: 'demo-business-table-1',
  components: {
    DemoPageHeader: () => import('./componnets/PageHeader'),
    DemoPageMain: () => import('./componnets/PageMain'),
    DemoPageFooter: () => import('./componnets/PageFooter')
  },
  data () {
    return {
      table: [],
      loading: false,
      page: {
        pageCurrent: 1,
        pageSize: 10,
        pageTotal: 0
      }
    }
  },
  methods: {
    async handlePaginationChange (val) {
      this.$notify({
        title: '分页变化',
        message: `当前第${val.current}页 共${val.total}条 每页${val.size}条`
      })
      this.page = {
        pageCurrent: val.current,
        pageSize: val.size,
        pageTotal: val.total
      }
      // nextTick 只是为了优化示例中 notify 的显示
      await this.$nextTick()
      this.$refs.header.handleFormSubmit()
    },
    handleSubmit (form) {
      this.loading = true
      this.$notify({
        title: '开始请求模拟表格数据'
      })
      this.$api.DEMO_BUSINESS_TABLE_1_LIST({
        ...form,
        ...this.page
      })
        .then(res => {
          this.loading = false
          this.$notify({
            title: '模拟表格数据请求完毕'
          })
          this.table = res.list
          this.page.pageTotal = res.page.total
        })
        .catch(err => {
          this.loading = false
          this.$notify({
            title: '模拟表格数据请求异常'
          })
          console.log('err', err)
        })
    }
  }
}
</script>
