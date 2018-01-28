import G2 from '@antv/g2'
export default {
  data () {
    return {
      // 库 在页面中不需要再引入 直接使用 this.G2
      G2,
      // 图表实例
      chart: null,
      // [图表设置项] 高度
      height: 300,
      // [图表设置项] 开启自动填充父元素高度
      autoHeight: true,
      // [图表设置项] 自动宽度
      forceFit: true,
      // [图表设置项] padding
      padding: [40, 40, 50, 60]
    }
  },
  created () {
    // 打印信息
    this.$log('G2', ...[
      `version ${this.G2.version}`
    ])
  },
  mounted () {
    setTimeout(() => {
      this.initHandler()
    }, 0)
  },
  methods: {
    // 创建图表
    creatChart () {
      this.chart = new this.G2.Chart({
        container: this.$refs.chart,
        forceFit: this.forceFit,
        height: this.G2.DomUtil.getHeight(this.$refs.chart),
        padding: this.padding
      })
    },
    // 设置图表的标题
    setChartTitle (title) {
      if (title) {
        this.chart.guide().text({
          top: true,
          position: ['min', 'max'],
          content: title,
          style: {
            fill: '#666', // 文本颜色
            fontSize: '16', // 文本大小
            fontWeight: 'bold' // 文本粗细
          },
          offsetX: 0,
          offsetY: 0
        })
      }
    },
    resize () {
      if (this.chart) {
        this.chart.changeSize(this.G2.DomUtil.getWidth(this.$refs.chart), this.G2.DomUtil.getHeight(this.$refs.chart))
      }
    }
  }
}
