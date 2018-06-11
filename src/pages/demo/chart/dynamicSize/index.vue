<template>
  <d2-container type="ghost" :responsive="true" class="demo-chart-index">
    <d2-grid-layout v-bind="layout" @layout-updated="layoutUpdatedHandler">
      <!-- 卡片 -->
      <d2-grid-item v-bind="layout.layout[0]" @resized="handleResized(chart[0].refName)">
        <el-card shadow="never" class="header-in">
          <d2-demo-chart-card-header slot="header" @refresh="handleRefreshData(0)" title="d2-chart-line-base"></d2-demo-chart-card-header>
          <d2-chart-line-base :ref="chart[0].refName" v-bind="chart[0]" @ready="isReady(0)"></d2-chart-line-base>
        </el-card>
      </d2-grid-item>
      <!-- 卡片 -->
      <d2-grid-item v-bind="layout.layout[1]" @resized="handleResized(chart[1].refName)">
        <el-card shadow="never" class="header-in">
          <d2-demo-chart-card-header slot="header" @refresh="handleRefreshData(1)" title="d2-chart-line-step"></d2-demo-chart-card-header>
          <d2-chart-line-step :ref="chart[1].refName" v-bind="chart[1]" @ready="isReady(1)"></d2-chart-line-step>
        </el-card>
      </d2-grid-item>
      <!-- 卡片 -->
      <d2-grid-item v-bind="layout.layout[2]" @resized="handleResized(chart[2].refName)">
        <el-card shadow="never" class="header-in">
          <d2-demo-chart-card-header slot="header" @refresh="handleRefreshData(2)" title="d2-chart-column-base"></d2-demo-chart-card-header>
          <d2-chart-column-base :ref="chart[2].refName" v-bind="chart[2]" @ready="isReady(2)"></d2-chart-column-base>
        </el-card>
      </d2-grid-item>
      <!-- 卡片 -->
      <d2-grid-item v-bind="layout.layout[3]" @resized="handleResized(chart[3].refName)">
        <el-card shadow="never" class="header-in">
          <d2-demo-chart-card-header slot="header" @refresh="handleRefreshData(3)" title="d2-chart-bar-base"></d2-demo-chart-card-header>
          <d2-chart-bar-base :ref="chart[3].refName" v-bind="chart[3]" @ready="isReady(3)"></d2-chart-bar-base>
        </el-card>
      </d2-grid-item>
      <!-- 卡片 -->
      <d2-grid-item v-bind="layout.layout[4]" @resized="handleResized(chart[4].refName)">
        <el-card shadow="never" class="header-in">
          <d2-demo-chart-card-header slot="header" @refresh="handleRefreshData(4)" title="d2-chart-pie-base"></d2-demo-chart-card-header>
          <d2-chart-pie-base :ref="chart[4].refName" v-bind="chart[4]" @ready="isReady(4)"></d2-chart-pie-base>
        </el-card>
      </d2-grid-item>
      <!-- 卡片 -->
      <d2-grid-item v-bind="layout.layout[5]" @resized="handleResized(chart[5].refName)">
        <el-card shadow="never" class="header-in">
          <d2-demo-chart-card-header slot="header" @refresh="handleRefreshData(5)" title="d2-chart-nightingale-rose-base"></d2-demo-chart-card-header>
          <d2-chart-nightingale-rose-base :ref="chart[5].refName" v-bind="chart[5]" @ready="isReady(5)"></d2-chart-nightingale-rose-base>
        </el-card>
      </d2-grid-item>
      <!-- 卡片 -->
      <d2-grid-item v-bind="layout.layout[6]" @resized="handleResized(chart[6].refName)">
        <el-card shadow="never" class="header-in">
          <d2-demo-chart-card-header slot="header" @refresh="handleRefreshData(6)" title="d2-chart-radar-base"></d2-demo-chart-card-header>
          <d2-chart-radar-base :ref="chart[6].refName" v-bind="chart[6]" @ready="isReady(6)"></d2-chart-radar-base>
        </el-card>
      </d2-grid-item>
      <!-- 卡片 -->
      <d2-grid-item v-bind="layout.layout[7]" @resized="handleResized(chart[7].refName)">
        <el-card shadow="never" class="header-in">
          <d2-demo-chart-card-header slot="header" @refresh="handleRefreshData(7)" title="d2-chart-area-base"></d2-demo-chart-card-header>
          <d2-chart-area-base :ref="chart[7].refName" v-bind="chart[7]" @ready="isReady(7)"></d2-chart-area-base>
        </el-card>
      </d2-grid-item>
    </d2-grid-layout>
  </d2-container>
</template>

<script>
export default {
  components: {
    'd2-demo-chart-card-header': () => import('./components/d2-demo-chart-card-header')
  },
  data () {
    return {
      chart: [
        {
          api: {url: '/api/chart/G2Line', data: {type: 'base'}},
          refName: 'd2-chart-line-base',
          ready: false,
          data: []
        },
        {
          api: {url: '/api/chart/G2Line', data: {type: 'step'}},
          refName: 'd2-chart-line-step',
          ready: false,
          data: []
        },
        {
          api: {url: '/api/chart/G2Column', data: {type: 'base'}},
          refName: 'd2-chart-column-base',
          ready: false,
          data: []
        },
        {
          api: {url: '/api/chart/G2Bar', data: {type: 'base'}},
          refName: 'd2-chart-bar-base',
          ready: false,
          data: []
        },
        {
          api: {url: '/api/chart/G2Pie', data: {type: 'base'}},
          refName: 'd2-chart-pie-base',
          ready: false,
          data: []
        },
        {
          api: {url: '/api/chart/G2NightingaleRose', data: {type: 'base'}},
          refName: 'd2-chart-nightingale-rose-base',
          ready: false,
          data: []
        },
        {
          api: {url: '/api/chart/G2Radar', data: {type: 'base'}},
          refName: 'd2-chart-radar-base',
          ready: false,
          data: []
        },
        {
          api: {url: '/api/chart/G2Area', data: {type: 'base'}},
          refName: 'd2-chart-area-base',
          ready: false,
          data: []
        }
      ],
      layout: {
        // 调整布局时 复制 layoutUpdatedHandler() 输出的日志到这里
        layout: [
          {'x': 7, 'y': 8, 'w': 5, 'h': 8, 'i': '0'},
          {'x': 4, 'y': 16, 'w': 4, 'h': 7, 'i': '1'},
          {'x': 8, 'y': 16, 'w': 4, 'h': 7, 'i': '2'},
          {'x': 0, 'y': 16, 'w': 4, 'h': 7, 'i': '3'},
          {'x': 3, 'y': 8, 'w': 4, 'h': 8, 'i': '4'},
          {'x': 9, 'y': 0, 'w': 3, 'h': 8, 'i': '5'},
          {'x': 0, 'y': 8, 'w': 3, 'h': 8, 'i': '6'},
          {'x': 0, 'y': 0, 'w': 9, 'h': 8, 'i': '7'}
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
  computed: {
    // 所有的图表已经 mounted
    ready () {
      return !this.chart.find(e => !e.ready)
    }
  },
  watch: {
    // 在所有的图表 mounted 后加载数据
    ready (ready) {
      if (ready) {
        this.syncData()
        this.showInfo()
      }
    }
  },
  methods: {
    // 显示提示
    showInfo () {
      this.$notify({
        title: '提示',
        message: '你可以按住卡片标题拖拽卡片；或者在每个卡片的右下角拖动，调整大小检查图表尺寸的自适应效果',
        duration: 10000
      })
    },
    // 图表 mounted
    isReady (index) {
      this.chart[index].ready = true
    },
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
