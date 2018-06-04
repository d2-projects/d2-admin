<template>
  <div class="container-component" :class="{responsive}">
    <!-- [card] 卡片容器 -->
    <el-card v-if="type === 'card'" class="dd-mr dd-mb">
      <slot v-if="$slots.header" name="header" slot="header"></slot>
      <slot></slot>
    </el-card>
    <!-- [ghost] 隐形的容器 -->
    <div v-if="type === 'ghost'" class="dd-mr dd-mb">
      <slot name="header"></slot>
      <slot></slot>
    </div>
    <!-- [container-full] 撑满 -->
    <container-full v-if="type === 'card-full'" :right="10" :bottom="0">
      <slot v-if="$slots.header" name="header" slot="header"></slot>
      <slot></slot>
      <slot v-if="$slots.footer" name="footer" slot="footer"></slot>
    </container-full>
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
  },
  components: {
    containerFull: () => import('../ContainerFull/index.vue')
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/public.scss';
.container-component {
  // margin-right: 20px;
  // margin-bottom: 20px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  // padding-right: $margin;
  // padding-bottom: $margin;
  overflow: auto;
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
