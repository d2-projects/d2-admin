<template>
  <Container type="ghost" :responsive="true" class="demo-chart-index">
    <GridLayout v-bind="layout">
      <GridItem v-bind="layout.layout[0]" @resize="resizeHandler('G2Line1')" @resized="resizedHandler('G2Line1')">
        <el-card><G2Line1 ref="G2Line1" :data="G2Line1"></G2Line1></el-card>
      </GridItem>
    </GridLayout>
  </Container>
</template>

<script>
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
      },
      // 数据
      G2Line1: []
    }
  },
  mounted () {
    this.syncData()
  },
  methods: {
    // 请求图表数据
    syncData () {
      const api = [
        {url: '/api/chart/G2Line', data: {code: 1}}
      ]
      this.$axios.all(api.map(e => this.$axios.post(e.url, e.data)))
        .then(this.$axios.spread((G2Line1) => {
          this.G2Line1 = G2Line1
        }))
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
</script>

<style lang="scss">
@import '~@/assets/style/public.scss';
.demo-chart-index {
  .vue-grid-layout {
    margin: -10px;
    .el-card {
      @extend %unable-select;
      height: 100%;
      .el-card__body {
        height: 100%;
        padding: 0px;
      }
    }
    .vue-resizable-handle {
      bottom: 6px;
      right: 6px;
      opacity: .3;
      &:hover{
        opacity: 1;
      }
    }
  }
}
</style>

