<script>
// 跳板页面
export default {
  beforeCreate () {
    const path = this.$route.params.path
    this.$router.replace(JSON.parse(path))
  },
  render: function (h) {
    return h()
  }
}
</script>
