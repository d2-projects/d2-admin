<template>
  <Container type="ghost" :responsive="true" class="demo-chart-index">
    <GridLayout v-bind="layout" @layout-updated="layoutUpdatedHandler">
      <GridItem v-bind="layout.layout[0]" @resize="resizeHandler('G2Line1')" @resized="resizedHandler('G2Line1')">
        <el-card class="header-in">
          <div slot="header">近年趋势</div>
          <G2Line1 ref="G2Line1" :data="chartData.G2Line1"></G2Line1>
        </el-card>
      </GridItem>
      <GridItem v-bind="layout.layout[1]" @resize="resizeHandler('G2Pie1')" @resized="resizedHandler('G2Pie1')">
        <el-card class="header-in">
          <div slot="header">人员分布</div>
          <G2Pie1 ref="G2Pie1" :data="chartData.G2Pie1"></G2Pie1>
        </el-card>
      </GridItem>
      <GridItem v-bind="layout.layout[2]" @resize="resizeHandler('G2Column1')" @resized="resizedHandler('G2Column1')">
        <el-card class="header-in">
          <div slot="header">人员分布</div>
          <G2Column1 ref="G2Column1" :data="chartData.G2Column1"></G2Column1>
        </el-card>
      </GridItem>
    </GridLayout>
  </Container>
</template>

<script>
import layout from './mixins/layout'
import chart from './mixins/chart'
export default {
  mixins: [
    layout,
    chart
  ]
}
</script>

<style lang="scss">
@import './style.scss';
</style>

