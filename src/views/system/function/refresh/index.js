export default {
  beforeRouteEnter (to, from, next) {
    from.meta[from.path] = Date.now()
    next(instance => instance.$router.replace({ path: from.fullPath, meta: from.meta }))
  },
  render: h => h()
}
