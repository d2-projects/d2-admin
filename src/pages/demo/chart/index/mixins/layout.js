export default {
  data () {
    return {
      layout: {
        layout: [
          {'x': 0, 'y': 0, 'w': 8, 'h': 9, 'i': '0'},
          {'x': 8, 'y': 0, 'w': 4, 'h': 9, 'i': '1'}
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
    layoutUpdatedHandler (newLayout) {
      console.group('layoutUpdatedHandler')
      newLayout.forEach(e => {
        console.log(`{'x': ${e.x}, 'y': ${e.y}, 'w': ${e.w}, 'h': ${e.h}, 'i': '${e.i}'},`)
      })
      console.groupEnd()
    },
    // 改变尺寸
    resizeHandler (name) {
      this.$nextTick(() => {
        this.$refs[name].resize()
      })
    },
    // 改变尺寸完成
    resizedHandler (name) {
      this.$nextTick(() => {
        this.$refs[name].resize()
      })
    }
  }
}
