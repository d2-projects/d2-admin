export default {
  data () {
    return {
      chart: [
        {
          data: []
        }
      ]
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
        .then(this.$axios.spread((...res) => {
          res.forEach((e, index) => {
            this.chart[index].data = e
          })
        }))
    }
  }
}
