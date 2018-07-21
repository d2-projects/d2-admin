<template>
  <div class="container-component" ref="container">
    <!-- [card] 卡片容器 -->
    <el-card v-if="type === 'card'" shadow="never" class="d2-container-card d2-mr">
      <slot v-if="$slots.header" name="header" slot="header"/>
      <slot/>
    </el-card>
    <!-- [ghost] 隐形容器 -->
    <d2-container-ghost v-if="type === 'ghost' && !scroll">
      <slot v-if="$slots.header" name="header" slot="header"/>
      <slot/>
      <slot v-if="$slots.footer" name="footer" slot="footer"/>
    </d2-container-ghost>
    <!-- [ghost] 隐形容器 滚动优化 -->
    <d2-container-ghost-bs v-if="type === 'ghost' && scroll">
      <slot v-if="$slots.header" name="header" slot="header"/>
      <slot/>
      <slot v-if="$slots.footer" name="footer" slot="footer"/>
    </d2-container-ghost-bs>
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
import d2ContainerGhost from './components/d2-container-ghost.vue'
import d2ContainerGhostBs from './components/d2-container-ghost-bs.vue'
export default {
  name: 'd2-container',
  props: {
    // 容器样式
    type: {
      type: String,
      required: false,
      default: 'full'
    },
    // 滚动优化
    scroll: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    'd2-container-full': d2ContainerFull,
    'd2-container-full-bs': d2ContainerFullBs,
    'd2-container-ghost': d2ContainerGhost,
    'd2-container-ghost-bs': d2ContainerGhostBs
  },
  data () {
    return {
      BS: null
    }
  },
  mounted () {
    if (this.type === 'card') {
      this.scrollInit()
    }
  },
  beforeDestroy () {
    if (this.type === 'card') {
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
