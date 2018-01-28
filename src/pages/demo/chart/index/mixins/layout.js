export default {
  data () {
    return {
      layout: {
        layout: [
          {'x': 0, 'y': 0, 'w': 8, 'h': 9, 'i': '0'},
          {'x': 8, 'y': 9, 'w': 4, 'h': 7, 'i': '1'},
          {'x': 0, 'y': 9, 'w': 4, 'h': 7, 'i': '2'},
          {'x': 8, 'y': 0, 'w': 4, 'h': 9, 'i': '3'},
          {'x': 4, 'y': 9, 'w': 4, 'h': 7, 'i': '4'}
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
