<template>
  <div class="container-component">
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
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'card'
    }
  }
}
</script>
