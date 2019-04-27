<template>
  <d2-container type="card" class="page">
    <template slot="header">数字动画组件</template>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="never" class="d2-card d2-mb">
          <p slot="title">只设置目标数字</p>
          <div class="group">
            <d2-count-up :end="100"/>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never" class="d2-card d2-mb">
          <p slot="title">设置起止数值</p>
          <div class="group">
            <d2-count-up :start="14" :end="100"/>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never" class="d2-card d2-mb">
          <p slot="title">小数位数</p>
          <div class="group">
            <d2-count-up :end="100" :decimals="2"/>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never" class="d2-card d2-mb">
          <p slot="title">动画时长</p>
          <div class="group">
            <d2-count-up :end="100" :duration="6"/>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never" class="d2-card">
          <p slot="title">回调函数</p>
          <div class="group">
            <d2-count-up :end="100" :callback="() => {className = 'end'}" :class="className"/>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never" class="d2-card d2-mb-0">
          <p slot="title">结束一秒后更新数值</p>
          <div class="group">
            <d2-count-up :end="end" :callback="update"/>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </d2-container>
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

<style lang="scss" scoped>
.page {
  .group {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 60px;
      &.end {
        padding: 0px 20px;
        border-radius: 4px;
        background-color: $color-success;
        color: #FFF;
      }
    }
  }
}
</style>
