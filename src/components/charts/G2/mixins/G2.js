// 所有 G2 图表组件都引用此 mixin

import G2 from '@antv/g2'
// import * as DataSet from '@antv/data-set'

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
    // 宽度
    width: {
      type: Number,
      required: false,
      default: 400
    },
    // 高度
    height: {
      type: Number,
      required: false,
      default: 300
    },
    // 高度 开启自动填充父元素 (非G2自带)
    autoHeight: {
      type: Boolean,
      required: false,
      default: false
    },
    // 自动宽度 建议为 true
    forceFit: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      // 在页面中不需要再引入 直接使用 this.G2
      G2,
      // 数据处理模块
      // DataSet,
      // 图表实例
      chart: null,
      // 在组件 mounted 后立即初始化图表
      autoInit: true,
      // padding
      padding: [40, 40, 40, 40]
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
    // 创建图表对象
    creatChart () {
      // API http://antv.alipay.com/zh-cn/g2/3.x/api/chart.html
      this.chart = new this.G2.Chart({
        // 对应图表的 DOM 容器
        container: this.$refs.chart,
        // 指定图表的宽度，单位为 'px'，当 forceFit: true 时宽度配置不生效
        width: this.width,
        // 自动宽度
        forceFit: this.forceFit,
        // 高度
        // 设置 autoHeight = true 后取 $refs.chart 的高度
        // 设置 autoHeight = false 后取 this.height
        height: this.autoHeight ? this.G2.DomUtil.getHeight(this.$refs.chart) : this.height,
        padding: this.padding
      })
    },
    // 重绘大小
    resize (width, height) {
      if (this.chart) {
        this.chart.changeSize(width || this.G2.DomUtil.getWidth(this.$refs.chart), height || this.G2.DomUtil.getHeight(this.$refs.chart))
      }
    }
  }
}
