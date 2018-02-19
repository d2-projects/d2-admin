<template>
  <Container type="ghost" :responsive="true">
    <el-row :gutter="20">
      <el-col :span="6">
        <ChartDemoControl
          @sync="syncData"
          :height.sync="height">
        </ChartDemoControl>
      </el-col>
      <el-col :span="18">
        <el-card>
          <div :style="style">
            <G2AreaBase ref="chart" v-bind="chart"></G2AreaBase>
          </div>
        </el-card>
      </el-col>
    </el-row>
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
      api: {
        url: '/api/chart/G2Area',
        data: {
          type: 'base'
        }
      },
      chart: {
        data: []
      }
    }
  }
}
</script>

