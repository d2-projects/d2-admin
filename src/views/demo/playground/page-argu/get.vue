<template>
  <d2-container type="card">
    <h2 class="d2-mt-0">$route.params.username: {{$route.params.username}}</h2>
    <h2>$route.query.userid: {{$route.query.userid}}</h2>
    <p>你可以尝试返回发送数据页面修改数据重新发送，或者切换到其它页面后刷新浏览器再返回本业观察参数保留</p>
    <el-button type="primary" @click="$router.push({ name: 'demo-playground-page-argu-send' })">返回发送数据的页面</el-button>
  </d2-container>
</template>

<script>
export default {
  mounted () {
    console.log('this.$route', this.$route)
  }
}
</script>
