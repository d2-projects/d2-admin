export default {
  data () {
    return {
      layout: {
        // 调整布局时 复制 layoutUpdatedHandler() 输出的日志到这里
        layout: [
          {'x': 0, 'y': 0, 'w': 8, 'h': 9, 'i': '0'},
          {'x': 8, 'y': 0, 'w': 4, 'h': 9, 'i': '1'},
          {'x': 0, 'y': 9, 'w': 4, 'h': 7, 'i': '2'}
        ],
        colNum: 12,
        rowHeight: 30,
        isDraggable: true,
        isResizable: true,
        isMirrored: false,
        verticalCompact: true,
        margin: [10, 10],
        useCssTransforms: true
      }
    }
  },
  methods: {
    // 更新指定的图表
    chartResize (name) {
      this.$refs[name].resize()
    },
    // 布局组件发生变化
    layoutUpdatedHandler (newLayout) {
      console.group('layoutUpdatedHandler')
      newLayout.forEach(e => {
        console.log(`{'x': ${e.x}, 'y': ${e.y}, 'w': ${e.w}, 'h': ${e.h}, 'i': '${e.i}'},`)
      })
      console.groupEnd()
    },
    // 改变尺寸
    handleResize (name) {
      // this.chartResize(name)
    },
    // 改变尺寸完成
    handleResized (name) {
      this.chartResize(name)
    }
  }
}
