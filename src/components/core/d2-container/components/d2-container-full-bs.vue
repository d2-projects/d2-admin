<template>
  <div class="d2-container-full-bs">
    <div v-if="$slots.header" class="d2-container-full-bs__header" ref="header">
      <slot name="header"/>
    </div>
    <div class="d2-container-full-bs__body" ref="wrapper">
      <div style="padding: 20px 0px;">
        <slot/>
      </div>
    </div>
    <div v-if="$slots.footer" class="d2-container-full-bs__footer" ref="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
// 插件
import BScroll from 'better-scroll'

export default {
  name: 'd2-container-full-bs',
  data () {
    return {
      BS: null
    }
  },
  mounted () {
    this.scrollInit()
  },
  beforeDestroy () {
    this.scrollDestroy()
  },
  methods: {
    scrollInit () {
      this.BS = new BScroll(this.$refs.wrapper, {
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
