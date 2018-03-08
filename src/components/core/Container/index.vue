<template>
  <div class="container-component" :class="{responsive}">
    <!-- [card] 卡片容器 -->
    <el-card v-if="type === 'card'">
      <div v-if="$slots.header" slot="header">
        <slot name="header"></slot>
      </div>
      <slot></slot>
    </el-card>
    <!-- [ghost] 隐形的容器 -->
    <div v-if="type === 'ghost'">
      <slot></slot>
    </div>
    <!-- [full-card] 撑满 -->
    <div v-if="type === 'full-card'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 容器样式
    type: {
      type: String,
      required: false,
      default: 'card'
    },
    // 是否开启响应式尺寸变化
    responsive: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss">
.container-component {
  margin-right: 20px;
  margin-bottom: 20px;
}
@media (min-width: 576px) {
  // 根据你的需要在这里添加样式
}
@media (min-width: 768px) {
  // 根据你的需要在这里添加样式
}
@media (min-width: 992px) {
  // 根据你的需要在这里添加样式
}
// 在大于1920分辨率的时候
@media (min-width: 1921px) {
  .container-component.responsive {
    margin: 0px auto;
    margin-bottom: 20px;
    max-width: 1920px - 200px;
  }
}
</style>
