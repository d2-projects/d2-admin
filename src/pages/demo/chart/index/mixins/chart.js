export default {
  data () {
    return {
      // 数据
      G2Line1: []
    }
  },
  mounted () {
    // 请求图表数据
    this.syncData()
  },
  methods: {
    // 请求图表数据
    syncData () {
      const api = [
        {url: '/api/chart/G2Line', data: {code: 1}}
      ]
      this.$axios.all(api.map(e => this.$axios.post(e.url, e.data)))
        .then(this.$axios.spread((G2Line1) => {
          this.G2Line1 = G2Line1
        }))
    }
  }
}
