<template>
  <d2-container>
    <demo-page-header
      slot="header"
      @submit="handleSubmit"/>
    <demo-page-main
      :table-data="table"/>
    <demo-page-footer
      slot="footer"
      @change="handlePaginationChange"/>
  </d2-container>
</template>

<script>
export default {
  // name 值和本页的 $route.name 一致才可以缓存页面
  name: 'demo-business-table-1',
  components: {
    'DemoPageHeader': () => import('./componnets/PageHeader'),
    'DemoPageMain': () => import('./componnets/PageMain'),
    'DemoPageFooter': () => import('./componnets/PageFooter')
  },
  data () {
    return {
      table: []
    }
  },
  methods: {
    handlePaginationChange (val) {
      this.$notify({
        title: '分页变化',
        message: `当前第${val.current}页 共${val.total}条 每页${val.size}条`
      })
      this.$nextTick(() => {
        this.handleSubmit({})
      })
    },
    handleSubmit (form) {
      this.$notify({
        title: '开始请求表格数据'
      })
      this.$axios.post('/api/demo/business/table/1', form)
        .then(res => {
          this.$notify({
            title: '表格数据请求完毕'
          })
          this.table = res.list
        })
        .catch(err => {
          this.$notify({
            title: '表格数据请求异常'
          })
          console.log('err', err)
        })
    }
  }
}
</script>
