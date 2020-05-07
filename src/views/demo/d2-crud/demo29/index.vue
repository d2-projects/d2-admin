<template>
  <d2-container>
    <template slot="header">分页</template>
    <d2-crud
      :columns="columns"
      :data="data"
      :loading="loading"
      :pagination="pagination"
      @pagination-current-change="paginationCurrentChange"/>
    <el-card shadow="never" class="d2-mb">
      <d2-markdown :source="doc"/>
    </el-card>
    <el-card shadow="never" class="d2-mb">
      <d2-highlight :code="code"/>
    </el-card>
    <d2-link-btn
      slot="footer"
      title="文档"
      link="https://d2.pub/zh/doc/d2-crud-v2"/>
  </d2-container>
</template>

<script>
import '../install'
import doc from './doc.md'
import code from './code.js'

export default {
  data () {
    return {
      doc,
      code,
      columns: [
        {
          title: '卡密',
          key: 'key',
          width: 320
        },
        {
          title: '面值',
          key: 'value'
        },
        {
          title: '管理员',
          key: 'admin'
        },
        {
          title: '创建时间',
          key: 'dateTimeCreat'
        },
        {
          title: '使用时间',
          key: 'dateTimeUse'
        }
      ],
      data: [],
      loading: false,
      pagination: {
        currentPage: 1,
        pageSize: 5,
        total: 0
      }
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    paginationCurrentChange (currentPage) {
      this.pagination.currentPage = currentPage
      this.fetchData()
    },
    fetchData () {
      this.loading = true
      this.$api.DEMO_BUSINESS_TABLE_1_LIST({
        ...this.pagination
      }).then(res => {
        this.data = res.list
        this.pagination.total = res.page.total
        this.loading = false
      }).catch(err => {
        console.log('err', err)
        this.loading = false
      })
    }
  }
}
</script>
