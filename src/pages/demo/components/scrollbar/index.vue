<template>
  <d2-container>
    <template slot="header">自定义滚动条</template>
    <el-card shadow="never" class="demo-scrollbar-card">
      <div class="demo-scrollbar-card-inner">
        <el-scrollbar>
          <div class="demo-scrollbar-group">
            <div v-for="n in 20" :key="n" class="demo-scrollbar-item">
              <el-button size="mini">n : {{n}}</el-button>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </el-card>
    <d2-markdown :source="`#Hello`"/>
  </d2-container>
</template>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.demo-scrollbar-card {
  width: 300px;
  .demo-scrollbar-card-inner {
    margin: -20px;
  }
  .demo-scrollbar-group {
    height: 200px;
    .demo-scrollbar-item {
      padding: 10px;
      border-bottom: 1px solid $color-border-4;
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
