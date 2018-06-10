<template>
  <d2-container type="ghost" :responsive="true" class="demo-chart-index">
    <el-row :gutter="20">
      <el-col class="col" :span="8">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(0)" title="d2-chart-line-base"></ChartCardHeader>
          <d2-chart-line-base :ref="chart[0].refName" v-bind="chart[0]" @ready="isReady(0)"></d2-chart-line-base>
        </el-card>
      </el-col>
      <el-col class="col" :span="8">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(1)" title="d2-chart-line-step"></ChartCardHeader>
          <d2-chart-line-step :ref="chart[1].refName" v-bind="chart[1]" @ready="isReady(1)"></d2-chart-line-step>
        </el-card>
      </el-col>
      <el-col class="col" :span="8">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(2)" title="d2-chart-column-base"></ChartCardHeader>
          <d2-chart-column-base :ref="chart[2].refName" v-bind="chart[2]" @ready="isReady(2)"></d2-chart-column-base>
        </el-card>
      </el-col>
      <el-col class="col" :span="8">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(3)" title="d2-chart-bar-base"></ChartCardHeader>
          <d2-chart-bar-base :ref="chart[3].refName" v-bind="chart[3]" @ready="isReady(3)"></d2-chart-bar-base>
        </el-card>
      </el-col>
      <el-col class="col" :span="8">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(4)" title="d2-chart-pie-base"></ChartCardHeader>
          <d2-chart-pie-base :ref="chart[4].refName" v-bind="chart[4]" @ready="isReady(4)"></d2-chart-pie-base>
        </el-card>
      </el-col>
      <el-col class="col" :span="8">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(5)" title="d2-chart-nightingale-rose-base"></ChartCardHeader>
          <d2-chart-nightingale-rose-base :ref="chart[5].refName" v-bind="chart[5]" @ready="isReady(5)"></d2-chart-nightingale-rose-base>
        </el-card>
      </el-col>
      <el-col class="col" :span="8">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(6)" title="d2-chart-radar-base"></ChartCardHeader>
          <d2-chart-radar-base :ref="chart[6].refName" v-bind="chart[6]" @ready="isReady(6)"></d2-chart-radar-base>
        </el-card>
      </el-col>
      <el-col class="col" :span="8">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(7)" title="d2-chart-area-base"></ChartCardHeader>
          <d2-chart-area-base :ref="chart[7].refName" v-bind="chart[7]" @ready="isReady(7)"></d2-chart-area-base>
        </el-card>
      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
export default {
  components: {
    ChartCardHeader: () => import('./components/ChartCardHeader')
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
      ]
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
        message: '点击卡片右上角的刷新按钮可以重新载入某个图表的数据',
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
