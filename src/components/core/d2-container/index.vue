<template>
  <div class="container-component" :class="{responsive}" ref="container">
    <!-- [card] 卡片容器 -->
    <el-card v-if="type === 'card'" shadow="never" class="d2-container-card d2-mr">
      <slot v-if="$slots.header" name="header" slot="header"/>
      <slot/>
    </el-card>
    <!-- [ghost] 隐形的容器 -->
    <div v-if="type === 'ghost'" class="d2-container-ghost">
      <el-card v-if="$slots.header" shadow="never" class="d2-container-ghost-header">
        <slot name="header"/>
      </el-card>
      <slot/>
    </div>
    <!-- [container-full] 填充 -->
    <d2-container-full v-if="type === 'full' && !scroll">
      <slot v-if="$slots.header" name="header" slot="header"/>
      <slot/>
      <slot v-if="$slots.footer" name="footer" slot="footer"/>
    </d2-container-full>
    <!-- [container-full-bs] 填充 滚动优化 -->
    <d2-container-full-bs v-if="type === 'full' && scroll">
      <slot v-if="$slots.header" name="header" slot="header"/>
      <slot/>
      <slot v-if="$slots.footer" name="footer" slot="footer"/>
    </d2-container-full-bs>
  </div>
</template>

<script>
// 插件
import BScroll from 'better-scroll'
// 组件
import d2ContainerFull from './components/d2-container-full.vue'
import d2ContainerFullBs from './components/d2-container-full-bs.vue'
export default {
  name: 'd2-container',
  props: {
    // 容器样式
    type: {
      type: String,
      required: false,
      default: 'card'
    },
    // 滚动优化
    scroll: {
      type: Boolean,
      required: false,
      default: false
    },
    // 是否开启响应式尺寸变化
    responsive: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    'd2-container-full': d2ContainerFull,
    'd2-container-full-bs': d2ContainerFullBs
  },
  data () {
    return {
      BS: null
    }
  },
  mounted () {
    if (this.type === 'card' || this.type === 'ghost') {
      this.scrollInit()
    }
  },
  beforeDestroy () {
    if (this.type === 'card' || this.type === 'ghost') {
      this.scrollDestroy()
    }
  },
  methods: {
    scrollInit () {
      this.BS = new BScroll(this.$refs.container, {
        mouseWheel: true,
        scrollbar: {
          fade: true,
          interactive: false
        }
      })
    },
    scrollDestroy () {
      if (this.BS) {
        this.BS.destroy()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
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
