import G2 from '@antv/g2'
import * as dataSet from '@antv/data-set'
// 关闭 G2 的体验改进计划打点请求
G2.track(false)

export default {
  props: {
    // 图表数据
    data: {
      type: Array,
      required: false,
      default: () => []
    },
    // 在组件 mounted 后立即初始化图表
    autoInit: {
      type: Boolean,
      required: false,
      default: false
    },
    // [图表设置项] 标题
    title: {
      type: String,
      required: false,
      default: ''
    },
    // [图表设置项] 高度
    height: {
      type: Number,
      required: false,
      default: 300
    },
    // [图表设置项] padding
    padding: {
      type: Array,
      required: false,
      default: () => [40, 40, 50, 60]
    },
    // [图表设置项] 开启自动填充父元素高度
    autoHeight: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      // 在页面中不需要再引入 直接使用 this.G2
      G2,
      // 数据处理模块
      dataSet,
      // 图表实例
      chart: null,
      // [图表设置项] 自动宽度
      forceFit: true
    }
  },
  mounted () {
    // 如果设置了在 mounted 后自动初始化 就在这里初始化
    if (this.autoInit) {
      setTimeout(() => {
        this.initHandler()
      }, 0)
    }
  },
  watch: {
    // 数据改变
    data () {
      this.changeData()
    }
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
    setChartTitle () {
      if (!this.title) {
        return
      }
      this.chart.guide().text({
        top: true,
        position: ['min', 'max'],
        content: this.title,
        style: {
          fill: '#666', // 文本颜色
          fontSize: '16', // 文本大小
          fontWeight: 'bold' // 文本粗细
        },
        offsetX: 0,
        offsetY: 0
      })
    },
    // 重绘大小
    resize () {
      if (this.chart) {
        this.chart.changeSize(this.G2.DomUtil.getWidth(this.$refs.chart), this.G2.DomUtil.getHeight(this.$refs.chart))
      }
    }
  }
}
