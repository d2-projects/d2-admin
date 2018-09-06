<template>
  <d2-container type="card">
    <template slot="header">{{info.name}}登录</template>
    <p>你的权限：{{ permission }}</p>
    <p>
      <el-button v-permission="['create']" type="primary">创建</el-button>
      <el-button v-permission="['search']" type="info">查询</el-button>
      <el-button v-permission="['edit']" type="warning">编辑</el-button>
      <el-button v-permission="['delete']" type="danger">删除</el-button>
    </p>
  </d2-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('d2admin/user', [
      'info',
      'permission'
    ])
  }
}
</script>
