<template>
  <d2-container>
    <template slot="header">设置样式</template>
    <div class="inner">
      <ve-map :data="chartData" :settings="chartSettings" v-bind="pubSetting"></ve-map>
    </div>
    <d2-link-btn
      slot="footer"
      title="更多示例和文档"
      link="https://v-charts.js.org"/>
  </d2-container>
</template>

<script>
import list from '@/views/demo/charts/list/_mixin/list.js'
import mapOrigin from '@/views/demo/charts/list/_data/china'
export default {
  mixins: [
    list
  ],
  data () {
    return {
      chartSettings: {
        position: 'china',
        mapOrigin,
        label: false,
        itemStyle: {
          normal: {
            borderColor: '#00f'
          }
        },
        zoom: 1.2
      },
      chartData: {
        columns: ['位置', '人口'],
        rows: [
          { 位置: '吉林', ' 人口': 123 },
          { 位置: '北京', ' 人口': 1223 },
          { 位置: '上海', ' 人口': 2123 },
          { 位置: '浙江', ' 人口': 4123 }
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
