<template>
  <Container type="ghost" :responsive="true" class="demo-chart-index">
    <GridLayout v-bind="layout">
      <GridItem v-bind="layout.layout[0]" @resize="resizeHandler('G2Line1')" @resized="resizedHandler('G2Line1')">
        <el-card>
          <G2Line1
            ref="G2Line1"
            :data="G2Line1"
            title="近年趋势">
          </G2Line1>
        </el-card>
      </GridItem>
      <GridItem v-bind="layout.layout[1]" @resize="resizeHandler('G2Pie1')" @resized="resizedHandler('G2Pie1')">
        <el-card>
          <!-- <G2Line1
            ref="G2Line2"
            :data="G2Line1"
            title="近年趋势2">
          </G2Line1> -->
          <G2Pie1 ref="G2Pie1"></G2Pie1>
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

