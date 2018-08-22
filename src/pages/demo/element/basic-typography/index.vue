<template>
  <d2-container>

    <h1 class="d2-mt-0">中文字体</h1>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card shadow="never" class="d2-card">
          <template slot="header">PingFang SC</template>
          <p class="basic-typography-text typography-style-1">和畅惠风</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never" class="d2-card">
          <template slot="header">Hiragino Sans GB</template>
          <p class="basic-typography-text typography-style-2">和畅惠风</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never" class="d2-card">
          <template slot="header">Microsoft YaHei</template>
          <p class="basic-typography-text typography-style-3">和畅惠风</p>
        </el-card>
      </el-col>
    </el-row>

    <h1>英文／数字字体</h1>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card shadow="never" class="d2-card">
          <template slot="header">Helvetica Neue</template>
          <p class="basic-typography-text typography-style-4">RGag</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never" class="d2-card">
          <template slot="header">Helvetica</template>
          <p class="basic-typography-text typography-style-5">RGag</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never" class="d2-card">
          <template slot="header">Arial</template>
          <p class="basic-typography-text typography-style-6">RGag</p>
        </el-card>
      </el-col>
    </el-row>

    <h1>Font-family 代码</h1>
    <d2-highlight :code="code"/>

  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      code: 'font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;'
    }
  }
}
</script>

<style lang="scss" scoped>
.basic-typography-text {
  font-size: 48px;
  margin: 0px;
  padding: 0px;
  line-height: 80px;
  &.typography-style-1 {
    font-family: PingFang SC;
  }
  &.typography-style-2 {
    font-family: Hiragino Sans GB;
  }
  &.typography-style-3 {
    font-family: Microsoft YaHei;
  }
  &.typography-style-4 {
    font-family: Helvetica Neue;
  }
  &.typography-style-5 {
    font-family: Helvetica;
  }
  &.typography-style-6 {
    font-family: Arial;
  }
}
</style>
