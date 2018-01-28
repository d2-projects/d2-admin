<template>
  <Container type="ghost" class="demo-chart-index">
    <GridLayout
      v-bind="layout"
      @layout-updated="layoutUpdatedHandler">
      <GridItem
        v-for="(item, index) in layout.layout"
        :key="index"
        v-bind="item"
        @resize="resizeHandler"
        @move="moveHandler"
        @resized="resizedHandler"
        @moved="movedHandler">
        <el-card>
          <G2Line1></G2Line1>
        </el-card>
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
    resizeHandler (i, newH, newW) {
      this.$log('resizeHandler', `i: ${i}, newH: ${newH}, newW: ${newW}`)
    },
    moveHandler (i, newX, newY) {
      this.$log('moveHandler', `i: ${i}, newX: ${newX}, newY: ${newY}`)
    },
    resizedHandler (i, newH, newW, newHPx, newWPx) {
      this.$log('resizedHandler', `i: ${i}, newH: ${newH}, newW: ${newW}, newHPx: ${newHPx}, newWPx: ${newWPx}`)
    },
    movedHandler (i, newX, newY) {
      this.$log('movedHandler', `i: ${i}, newX: ${newX}, newY: ${newY}`)
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
      opacity: .3;
      &:hover{
        opacity: 1;
      }
    }
  }
}
</style>

