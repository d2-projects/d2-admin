<template>
  <Container type="ghost" :responsive="true" class="demo-chart-index">
    <GridLayout v-bind="layout" @layout-updated="layoutUpdatedHandler">
      <!-- 卡片 -->
      <GridItem
        v-bind="layout.layout[0]"
        @resized="handleResized('G2LineBase1')">
        <el-card class="header-in">
          <ChartCardHeader
            slot="header"
            title="近年行情"
            @refresh="handleRefreshData(0)">
          </ChartCardHeader>
          <G2LineBase
            ref="G2LineBase1"
            v-bind="chart[0]">
          </G2LineBase>
        </el-card>
      </GridItem>
    </GridLayout>
  </Container>
</template>

<script>
import ChartCardHeader from './components/ChartCardHeader'
export default {
  components: {
    ChartCardHeader
  },
  data () {
    return {
      chart: [
        {
          api: {url: '/api/chart/G2Line', data: {code: 1}},
          data: [],
          padding: [30, 40, 50, 50]
        }
      ],
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
  mounted () {
    // 请求图表数据
    this.syncData()
  },
  methods: {
    // 请求图表数据
    syncData () {
      this.$axios.all(this.chart.map(e => this.$axios.post(e.api.url, e.api.data)))
        .then(this.$axios.spread((...res) => {
          res.forEach((e, index) => {
            this.chart[index].data = e
          })
        }))
    },
    // 更新指定的图表
    chartResize (name) {
      this.$nextTick(() => {
        this.$refs[name].resize()
      })
    },
    // 布局组件发生变化
    layoutUpdatedHandler (newLayout) {
      console.group('layoutUpdatedHandler')
      newLayout.forEach(e => {
        console.log(`{'x': ${e.x}, 'y': ${e.y}, 'w': ${e.w}, 'h': ${e.h}, 'i': '${e.i}'},`)
      })
      console.groupEnd()
    },
    // 改变尺寸完成
    handleResized (name) {
      this.chartResize(name)
    },
    // 用户触发了卡片右上角的刷新按钮
    handleRefreshData (index) {
      const api = this.chart[index].api
      this.$axios.post(api.url, api.data)
        .then(res => {
          this.chart[index].data = res
        })
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
