<template>
  <Container type="ghost" :responsive="true" class="demo-chart-index">
    <GridLayout v-bind="layout" @layout-updated="layoutUpdatedHandler">
      <!-- 卡片 -->
      <GridItem v-bind="layout.layout[0]" @resized="handleResized(chart[0].refName)">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(0)" title="近年行情"></ChartCardHeader>
          <G2LineBase :ref="chart[0].refName" v-bind="chart[0]"></G2LineBase>
        </el-card>
      </GridItem>
      <!-- 卡片 -->
      <GridItem v-bind="layout.layout[1]" @resized="handleResized(chart[1].refName)">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(1)" title="近年行情"></ChartCardHeader>
          <G2LineStep :ref="chart[1].refName" v-bind="chart[1]"></G2LineStep>
        </el-card>
      </GridItem>
      <!-- 卡片 -->
      <GridItem v-bind="layout.layout[2]" @resized="handleResized(chart[2].refName)">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(2)" title="近年行情"></ChartCardHeader>
          <G2ColumnBase :ref="chart[2].refName" v-bind="chart[2]"></G2ColumnBase>
        </el-card>
      </GridItem>
      <!-- 卡片 -->
      <GridItem v-bind="layout.layout[3]" @resized="handleResized(chart[3].refName)">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(3)" title="近年行情"></ChartCardHeader>
          <G2BarBase :ref="chart[3].refName" v-bind="chart[3]"></G2BarBase>
        </el-card>
      </GridItem>
      <!-- 卡片 -->
      <GridItem v-bind="layout.layout[4]" @resized="handleResized(chart[4].refName)">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(4)" title="近年行情"></ChartCardHeader>
          <G2PieBase :ref="chart[4].refName" v-bind="chart[4]"></G2PieBase>
        </el-card>
      </GridItem>
      <!-- 卡片 -->
      <GridItem v-bind="layout.layout[5]" @resized="handleResized(chart[5].refName)">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(5)" title="近年行情"></ChartCardHeader>
          <G2NightingaleRoseBase :ref="chart[5].refName" v-bind="chart[5]"></G2NightingaleRoseBase>
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
          api: {url: '/api/chart/G2Line', data: {type: 'base'}},
          refName: 'G2LineBase',
          data: []
        },
        {
          api: {url: '/api/chart/G2Line', data: {type: 'step'}},
          refName: 'G2LineStep',
          data: []
        },
        {
          api: {url: '/api/chart/G2Column', data: {type: 'base'}},
          refName: 'G2ColumnBase',
          data: []
        },
        {
          api: {url: '/api/chart/G2Bar', data: {type: 'base'}},
          refName: 'G2BarBase',
          data: []
        },
        {
          api: {url: '/api/chart/G2Pie', data: {type: 'base'}},
          refName: 'G2PieBase',
          data: [],
          padding: [30, 30, 30, 30]
        },
        {
          api: {url: '/api/chart/G2NightingaleRose', data: {type: 'base'}},
          refName: 'G2NightingaleRoseBase',
          data: [],
          padding: [30, 30, 30, 30]
        }
      ],
      layout: {
        // 调整布局时 复制 layoutUpdatedHandler() 输出的日志到这里
        layout: [
          {'x': 0, 'y': 0, 'w': 4, 'h': 7, 'i': '0'},
          {'x': 4, 'y': 0, 'w': 4, 'h': 7, 'i': '1'},
          {'x': 8, 'y': 0, 'w': 4, 'h': 7, 'i': '2'},
          {'x': 0, 'y': 7, 'w': 4, 'h': 7, 'i': '3'},
          {'x': 4, 'y': 7, 'w': 4, 'h': 7, 'i': '4'},
          {'x': 8, 'y': 7, 'w': 4, 'h': 7, 'i': '5'}
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
      this.$nextTick(() => {
        this.$refs[name].resize()
      })
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
