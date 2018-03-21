<template>
  <div class="dd-card-full" :style="cardStyle">
    <div v-if="$slots.header" class="dd-card-full__header" ref="header">
      <slot name="header"></slot>
    </div>
    <div class="dd-card-full__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 定位 上 右 下 左
    top: {
      type: Number,
      required: false,
      default: 0
    },
    right: {
      type: Number,
      required: false,
      default: 0
    },
    bottom: {
      type: Number,
      required: false,
      default: 0
    },
    left: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      headerHeight: 0
    }
  },
  mounted () {
    this.headerHeight = this.$slots.header ? this.$refs.header.offsetHeight : 0
  },
  computed: {
    cardStyle () {
      return {
        top: `${this.top}px`,
        right: `${this.right}px`,
        bottom: `${this.bottom}px`,
        left: `${this.left}px`
      }
    },
    bodyStyle () {
      return {
        top: `${this.headerHeight}px`
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.dd-card-full {
  position: absolute;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
  }
  .dd-card-full__header {
    position: absolute;
    width: 100%;
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
  }
  .dd-card-full__body {
    position: absolute;
    padding: 20px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    overflow: auto;
  }
}
</style>
