<template>
  <Container type="ghost" :responsive="true" class="demo-chart-index">
    <GridLayout v-bind="layout">
      <GridItem v-bind="layout.layout[0]" @resize="resizeHandler('G2Line1')" @resized="resizedHandler('G2Line1')">
        <el-card><G2Line1 ref="G2Line1" :data="G2Line1"></G2Line1></el-card>
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

