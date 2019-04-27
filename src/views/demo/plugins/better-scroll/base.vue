<template>
  <d2-container>
    <template slot="header">基础用法</template>
    <div ref="wrapper" class="demo-bs-wrapper">
      <div>
        <div v-for="n in 30" :key="n" class="demo-bs-item">n : {{n}}</div>
      </div>
    </div>
  </d2-container>
</template>

<script>
import BScroll from 'better-scroll'
export default {
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
        click: true,
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
.demo-bs-wrapper {
  height: 200px;
  width: 300px;
  position: relative;
  overflow: hidden;
  border: 1px solid $color-border-1;
  border-radius: 4px;
  .demo-bs-item {
    line-height: 40px;
    padding-left: 10px;
    border-bottom: 1px solid $color-border-4;
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
