import ChartDemoControl from '../components/ChartDemoControl.vue'
export default {
  components: {
    ChartDemoControl
  },
  data () {
    return {
      height: 300
    }
  },
  mounted () {
    this.syncData()
  },
  computed: {
    style () {
      return {
        height: this.height + 'px'
      }
    }
  },
  watch: {
    style () {
      this.$nextTick(() => {
        this.resize()
      })
    }
  },
  methods: {
    // 请求数据
    syncData () {
      this.$axios.post(this.api.url, this.api.data)
        .then(res => {
          this.chart.data = res
        })
    },
    // 重新适应大小
    resize () {
      this.$refs.chart.resize()
    }
  }
}
