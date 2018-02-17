<template>
  <Container type="ghost" :responsive="true" class="demo-chart-index">
    <GridLayout v-bind="layout" @layout-updated="layoutUpdatedHandler">
      <GridItem v-bind="layout.layout[0]" @resize="resizeHandler('G2Line1')" @resized="resizedHandler('G2Line1')">
        <el-card class="header-in">
          <div slot="header">近年趋势</div>
          1
        </el-card>
      </GridItem>
      <GridItem v-bind="layout.layout[1]" @resize="resizeHandler('G2Pie1')" @resized="resizedHandler('G2Pie1')">
        <el-card class="header-in">
          <div slot="header">人员分布</div>
          2
        </el-card>
      </GridItem>
      <GridItem v-bind="layout.layout[2]" @resize="resizeHandler('G2Column1')" @resized="resizedHandler('G2Column1')">
        <el-card class="header-in">
          <div slot="header">人员分布</div>
          3
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
