<template>
  <d2-container>
    <template slot="header">一般</template>
    <div class="inner">
      <ve-heatmap :data="chartData" v-bind="pubSetting"></ve-heatmap>
    </div>
    <d2-link-btn
      slot="footer"
      title="更多示例和文档"
      link="https://v-charts.js.org"/>
  </d2-container>
</template>

<script>
import list from '@/views/demo/charts/list/_mixin/list.js'
export default {
  mixins: [
    list
  ],
  data () {
    return {
      chartData: {
        columns: ['时间', '地点', '人数'],
        rows: [
          { 时间: '星期一', 地点: '北京', 人数: 1000 },
          { 时间: '星期二', 地点: '上海', 人数: 400 },
          { 时间: '星期三', 地点: '杭州', 人数: 800 },
          { 时间: '星期二', 地点: '深圳', 人数: 200 },
          { 时间: '星期三', 地点: '长春', 人数: 100 },
          { 时间: '星期五', 地点: '南京', 人数: 300 },
          { 时间: '星期四', 地点: '江苏', 人数: 800 },
          { 时间: '星期一', 地点: '北京', 人数: 700 },
          { 时间: '星期三', 地点: '上海', 人数: 300 },
          { 时间: '星期二', 地点: '杭州', 人数: 500 }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.inner {
  position: absolute;
  top: 20px;
  right:  20px;
  bottom: 20px;
  left: 20px;
}
</style>
