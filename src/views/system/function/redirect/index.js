export default {
  beforeRouteEnter (to, from, next) {
    next(instance => instance.$router.replace(JSON.parse(from.params.route)))
  },
  render: h => h()
}
