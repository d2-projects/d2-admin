<template>
  <div class="d2-container-full">
    <div v-if="$slots.header" class="d2-container-full__header" ref="header">
      <slot name="header"/>
    </div>
    <div class="d2-container-full__body" ref="wrapper">
      <div style="padding: 20px 0px;">
        <slot/>
      </div>
    </div>
    <div v-if="$slots.footer" class="d2-container-full__footer" ref="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'd2-container-full',
  data () {
    return {
      BS: null
    }
  },
  mounted () {
    this.BS = new BScroll(this.$refs.wrapper, {
      mouseWheel: true,
      scrollbar: {
        fade: true,
        interactive: false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
// [组件] d2-container-full
.d2-container-full {
  position: absolute;
  top: 0px;
  right: 20px;
  bottom: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .d2-container-full__header {
    padding: 20px;
  }
  .d2-container-full__body {
    flex-grow: 1;
    padding: 0px 20px;
    overflow: auto;
    position: relative;
  }
  .d2-container-full__footer {
    padding: 20px;
  }
}
</style>
