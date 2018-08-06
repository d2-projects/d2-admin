<template>
  <d2-container>
    <demo-page-header slot="header" @submit="handleSubmit"/>
    <demo-page-main :table-data="table"/>
    <demo-page-footer slot="footer"/>
  </d2-container>
</template>

<script>
export default {
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
      this.$axios.post('/api/demo/business/table/1', form)
        .then(res => {
          this.table = res.list
        })
        .catch(err => {
          console.log('err', err)
        })
    }
  }
}
</script>
