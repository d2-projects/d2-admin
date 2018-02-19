export default {
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
    default: () => [30, 40, 45, 50]
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
  }
}
