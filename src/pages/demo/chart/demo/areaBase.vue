<template>
  <Container type="ghost" :responsive="true">
    <ChartDemoCard>
      <template slot-scope="props">
        <G2AreaBase :data="props.data" v-bind="chart"></G2AreaBase>
      </template>
    </ChartDemoCard>
  </Container>
</template>

<script>
import publicMixin from './mixins/public'
export default {
  mixins: [
    publicMixin
  ],
  data () {
    return {
      chart: {
        // 图表设置
      }
    }
  }
}
</script>
