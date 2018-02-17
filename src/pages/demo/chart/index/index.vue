<template>
  <Container type="ghost" :responsive="true" class="demo-chart-index">
    <GridLayout v-bind="layout" @layout-updated="layoutUpdatedHandler">
      <GridItem
        v-bind="layout.layout[0]"
        @resize="handleResize('G2LineBase1')"
        @resized="handleResized('G2LineBase1')">
        <el-card class="header-in">
          <div slot="header">近年趋势</div>
          <G2LineBase ref="G2LineBase1" v-bind="chart[0]"></G2LineBase>
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
