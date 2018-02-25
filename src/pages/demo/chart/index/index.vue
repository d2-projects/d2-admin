<template>
  <Container type="ghost" :responsive="true" class="demo-chart-index">
    <el-row :gutter="20">
      <el-col class="col" :span="8">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(0)" title="G2LineBase"></ChartCardHeader>
          <G2LineBase :ref="chart[0].refName" v-bind="chart[0]"></G2LineBase>
        </el-card>
      </el-col>
      <el-col class="col" :span="8">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(1)" title="G2LineStep"></ChartCardHeader>
          <G2LineStep :ref="chart[1].refName" v-bind="chart[1]"></G2LineStep>
        </el-card>
      </el-col>
      <el-col class="col" :span="8">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(2)" title="G2ColumnBase"></ChartCardHeader>
          <G2ColumnBase :ref="chart[2].refName" v-bind="chart[2]"></G2ColumnBase>
        </el-card>
      </el-col>
      <el-col class="col" :span="8">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(3)" title="G2BarBase"></ChartCardHeader>
          <G2BarBase :ref="chart[3].refName" v-bind="chart[3]"></G2BarBase>
        </el-card>
      </el-col>
      <el-col class="col" :span="8">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(4)" title="G2PieBase"></ChartCardHeader>
          <G2PieBase :ref="chart[4].refName" v-bind="chart[4]"></G2PieBase>
        </el-card>
      </el-col>
      <el-col class="col" :span="8">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(5)" title="G2NightingaleRoseBase"></ChartCardHeader>
          <G2NightingaleRoseBase :ref="chart[5].refName" v-bind="chart[5]"></G2NightingaleRoseBase>
        </el-card>
      </el-col>
      <el-col class="col" :span="8">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(6)" title="G2RadarBase"></ChartCardHeader>
          <G2RadarBase :ref="chart[6].refName" v-bind="chart[6]"></G2RadarBase>
        </el-card>
      </el-col>
      <el-col class="col" :span="8">
        <el-card class="header-in">
          <ChartCardHeader slot="header" @refresh="handleRefreshData(7)" title="G2AreaBase"></ChartCardHeader>
          <G2AreaBase :ref="chart[7].refName" v-bind="chart[7]"></G2AreaBase>
        </el-card>
      </el-col>
    </el-row>
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
          data: []
        },
        {
          api: {url: '/api/chart/G2NightingaleRose', data: {type: 'base'}},
          refName: 'G2NightingaleRoseBase',
          data: []
        },
        {
          api: {url: '/api/chart/G2Radar', data: {type: 'base'}},
          refName: 'G2RadarBase',
          data: []
        },
        {
          api: {url: '/api/chart/G2Area', data: {type: 'base'}},
          refName: 'G2AreaBase',
          data: []
        }
      ]
    }
  },
  mounted () {
    // 请求图表数据
    setTimeout(() => {
      this.syncData()
    }, 1000)
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
