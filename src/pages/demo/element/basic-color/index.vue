<template>
  <d2-container type="ghost">
    <el-card shadow="never" class="d2-mb">
      <template slot="header">主色</template>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="color color-primary">
            <!-- <h1>$color-primary</h1> -->
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card shadow="never" class="d2-mb">
      <template slot="header">辅助色</template>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="color color-info"></div>
        </el-col>
        <el-col :span="6">
          <div class="color color-success"></div>
        </el-col>
        <el-col :span="6">
          <div class="color color-warning"></div>
        </el-col>
        <el-col :span="6">
          <div class="color color-danger"></div>
        </el-col>
      </el-row>
    </el-card>
    <el-card shadow="never">
      <template slot="header">中性色</template>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="color color-info"></div>
        </el-col>
        <el-col :span="6">
          <div class="color color-success"></div>
        </el-col>
        <el-col :span="6">
          <div class="color color-warning"></div>
        </el-col>
        <el-col :span="6">
          <div class="color color-danger"></div>
        </el-col>
      </el-row>
    </el-card>
  </d2-container>
</template>

<style lang="scss" scoped>
@import '~@/assets/style/unit/_color.scss';
.color {
  border-radius: 4px;
  height: 100px;
}
.color-primary {
  background-color: $color-primary;
}
.color-info {
  background-color: $color-info;
}
.color-success {
  background-color: $color-success;
}
.color-warning {
  background-color: $color-warning;
}
.color-danger {
  background-color: $color-danger;
}
</style>

