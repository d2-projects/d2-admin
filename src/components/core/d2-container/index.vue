<template>
  <div class="container-component" :class="{responsive}">
    <!-- [card] 卡片容器 -->
    <el-card v-if="type === 'card'" class="d2-mr d2-mb">
      <slot v-if="$slots.header" name="header" slot="header"/>
      <slot/>
    </el-card>
    <!-- [ghost] 隐形的容器 -->
    <div v-if="type === 'ghost'" class="d2-mr d2-mb">
      <slot name="header"/>
      <slot/>
    </div>
    <!-- [container-full] 撑满 -->
    <d2-container-full v-if="type === 'full'" :right="20" :bottom="0">
      <slot v-if="$slots.header" name="header" slot="header"/>
      <slot/>
      <slot v-if="$slots.footer" name="footer" slot="footer"/>
    </d2-container-full>
  </div>
</template>

<script>
export default {
  name: 'd2-container',
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
    'd2-container-full': () => import('../d2-container-full/index.vue')
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
