// 所有 G2 图表组件都引用此 mixin

import G2 from '@antv/g2'
// import * as DataSet from '@antv/data-set'

// 关闭 G2 的体验改进计划打点请求
G2.track(false)

export default {
  props: {
    // 宽度 http://antv.alipay.com/zh-cn/g2/3.x/api/chart.html#_width
    width: {
      type: Number,
      required: false,
      default: 400
    },
    // 高度 http://antv.alipay.com/zh-cn/g2/3.x/api/chart.html#_height
    height: {
      type: Number,
      required: false,
      default: 300
    },
    // 设置图表的内边距 http://antv.alipay.com/zh-cn/g2/3.x/api/chart.html#_padding
    padding: {
      required: false,
      default: () => [40, 40, 40, 40]
    },
    // 设置图表整体的边框和背景样式 http://antv.alipay.com/zh-cn/g2/3.x/api/chart.html#_background
    background: {
      type: Object,
      required: false,
      default: () => ({})
    },
    // 图表绘图区域的边框和背景样式 http://antv.alipay.com/zh-cn/g2/3.x/api/chart.html#_plotBackground
    plotBackground: {
      type: Object,
      required: false,
      default: () => ({})
    },
    // 图表的宽度自适应开关 http://antv.alipay.com/zh-cn/g2/3.x/api/chart.html#_forceFit
    forceFit: {
      type: Boolean,
      required: false,
      default: true
    },
    // 图表动画开关 http://antv.alipay.com/zh-cn/g2/3.x/api/chart.html#_animate
    animate: {
      type: Boolean,
      required: false,
      default: true
    },
    // 设置设备像素比  http://antv.alipay.com/zh-cn/g2/3.x/api/chart.html#_pixelRatio
    pixelRatio: {
      type: Number,
      required: false,
      default: window.devicePixelRatio
    },
    // 图表数据 此 data 非 官方文档中的 data
    data: {
      type: Array,
      required: false,
      default: () => []
    },
    // 高度 开启自动填充父元素 (非G2自带)
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
      // DataSet,
      // 图表实例
      chart: null,
      // 在组件 mounted 后立即初始化图表
      autoInit: true
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
      // http://antv.alipay.com/zh-cn/g2/3.x/api/chart.html
      this.chart = new this.G2.Chart({
        // 对应图表的 DOM 容器
        container: this.$refs.chart,
        // 指定图表的宽度
        width: this.width,
        // 高度
        // 设置 autoHeight = true 后取 $refs.chart 的高度
        // 设置 autoHeight = false 后取 this.height
        height: this.autoHeight ? this.G2.DomUtil.getHeight(this.$refs.chart) : this.height,
        // 设置图表的内边距
        padding: this.padding,
        // 设置图表整体的边框和背景样式
        background: this.background,
        // 图表绘图区域的边框和背景样式
        plotBackground: this.plotBackground,
        // 自动宽度
        forceFit: this.forceFit,
        // 动画开关
        animate: this.animate,
        // 设置设备像素比
        pixelRatio: this.pixelRatio
      })
    },
    // 重绘大小
    resize (width, height) {
      // 如果已经初始化过图表
      if (this.chart) {
        const w = width || this.G2.DomUtil.getWidth(this.$refs.chart)
        const h = height || this.G2.DomUtil.getHeight(this.$refs.chart)
        this.chart.changeSize(w, h)
      } else {
        // 以后看着办
      }
    }
  }
}
