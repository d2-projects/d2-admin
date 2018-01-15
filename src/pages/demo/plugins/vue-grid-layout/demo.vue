<template>
  <Container type="ghost" class="body">
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
          <el-tag size="mini" type="info" slot="header">Card {{item.i}}</el-tag>
          <template v-if="item.i === '0'">
            <p>拖拽卡片调整位置</p>
            <p>拖拽卡片右下角的手柄调整卡片大小</p>
          </template>
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
          {'x': 0, 'y': 0, 'w': 4, 'h': 5, 'i': '0'},
          {'x': 2, 'y': 5, 'w': 2, 'h': 5, 'i': '1'},
          {'x': 4, 'y': 0, 'w': 2, 'h': 5, 'i': '2'},
          {'x': 6, 'y': 0, 'w': 4, 'h': 5, 'i': '3'},
          {'x': 10, 'y': 0, 'w': 2, 'h': 10, 'i': '4'},
          {'x': 10, 'y': 10, 'w': 2, 'h': 5, 'i': '5'},
          {'x': 0, 'y': 5, 'w': 2, 'h': 5, 'i': '6'},
          {'x': 0, 'y': 10, 'w': 8, 'h': 5, 'i': '7'},
          {'x': 8, 'y': 10, 'w': 2, 'h': 5, 'i': '8'},
          {'x': 4, 'y': 5, 'w': 6, 'h': 5, 'i': '9'}
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
      // console.log('layoutUpdatedHandler')
      newLayout.forEach(e => {
        // console.log(`{'x': ${e.x}, 'y': ${e.y}, 'w': ${e.w}, 'h': ${e.h}, 'i': '${e.i}'},`)
      })
    },
    resizeHandler (i, newH, newW) {
      // console.log('resizeHandler')
      // console.log(`i: ${i}, newH: ${newH}, newW: ${newW}`)
    },
    moveHandler (i, newX, newY) {
      // console.log('moveHandler')
      // console.log(`i: ${i}, newX: ${newX}, newY: ${newY}`)
    },
    resizedHandler (i, newH, newW, newHPx, newWPx) {
      // console.log('resizedHandler')
      // console.log(`i: ${i}, newH: ${newH}, newW: ${newW}, newHPx: ${newHPx}, newWPx: ${newWPx}`)
    },
    movedHandler (i, newX, newY) {
      // console.log('movedHandler')
      // console.log(`i: ${i}, newX: ${newX}, newY: ${newY}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.body {
  .vue-grid-layout {
    margin: -10px;
    .el-card {
      height: 100%;
      @extend %unable-select;
      .el-card__header {
        padding: 8px $margin;
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

