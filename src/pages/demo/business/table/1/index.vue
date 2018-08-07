<template>
  <d2-container>
    <demo-page-header slot="header" @submit="handleSubmit"/>
    <demo-page-main :table-data="table"/>
    <demo-page-footer slot="footer"/>
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
    handleSubmit (form) {
      this.$message({
        message: '开始请求表格数据',
        type: 'info'
      })
      this.$axios.post('/api/demo/business/table/1', form)
        .then(res => {
          this.$message({
            message: '表格数据请求完毕',
            type: 'success'
          })
          this.table = res.list
        })
        .catch(err => {
          this.$message({
            message: '表格数据请求异常',
            type: 'error'
          })
          console.log('err', err)
        })
    }
  }
}
</script>
