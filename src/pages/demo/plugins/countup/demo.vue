<template>
  <Container type="ghost" class="demo-plugin-countup-demo">
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card>
          <p slot="title">只设置目标数字</p>
          <CountUp :end="100"></CountUp>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <p slot="title">设置起止数值</p>
          <CountUp :start="14" :end="100"></CountUp>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <p slot="title">小数位数</p>
          <CountUp :end="100.00" :decimals="2"></CountUp>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <p slot="title">动画时长</p>
          <CountUp :end="100" :duration="6"></CountUp>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <p slot="title">回调函数</p>
          <CountUp :end="100" :callback="() => {className = 'end'}" :class="className"></CountUp>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <p slot="title">结束一秒后更新数值</p>
          <CountUp :end="end" :callback="update"></CountUp>
        </el-card>
      </el-col>
    </el-row>
  </Container>
</template>

<script>
export default {
  data () {
    return {
      // 回调函数使用
      className: '',
      // 更新数值用
      end: 50
    }
  },
  methods: {
    update () {
      setTimeout(() => {
        this.end = 100
      }, 1000)
    }
  }
}
</script>


<style lang="scss">
@import '~@/assets/style/public.scss';
.demo-plugin-countup-demo {
  .el-card {
    @extend %unable-select;
    margin-bottom: 10px;
    .el-card__body {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 40px;
        &.end {
          padding: 0px 20px;
          border-radius: $border-radius;
          background-color: $color-success;
          color: #FFF;
        }
      }
    }
  }
}
</style>
