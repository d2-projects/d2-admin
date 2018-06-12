<template>
  <el-dropdown class="d2-mr">
    <span class="btn-text">你好</span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="logOff"><d2-icon name="power-off"/> 注销</el-dropdown-item>
      <el-dropdown-item><d2-icon name="user-circle-o"/> 个人中心</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  methods: {
    logOff () {
      this.$confirm('注销此账户吗?', '注销', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 删除cookie
        Cookies.remove('token')
        // 跳转路由
        this.$router.push({
          name: 'login'
        })
      }).catch(() => {
        // 取消了注销
      })
    }
  }
}
</script>
