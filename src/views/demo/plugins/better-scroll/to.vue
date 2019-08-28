<template>
  <d2-container>
    <template slot="header">滚动定位</template>
    <el-row :gutter="20">
      <el-col :span="8">
        <div ref="wrapper" class="demo-bs-wrapper">
          <div>
            <div v-for="n in 100" :key="n" class="demo-bs-item" :id="`demo-bs-item-${n}`">n : {{n}}</div>
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="d2-mb">
          <p>滚动时间 ms</p>
          <el-slider v-model="time" :min="100" :max="3000"></el-slider>
        </div>
        <div class="d2-mb">
          <el-button-group>
            <el-button @click="handleScrollTo(100)">滚动到100像素位置</el-button>
            <el-button @click="handleScrollTo(300)">滚动到300像素位置</el-button>
          </el-button-group>
        </div>
        <div class="d2-mb">
          <el-button-group>
            <el-button @click="handleScrollBy(50)">向下滚动50像素</el-button>
            <el-button @click="handleScrollBy(-50)">向上滚动50像素</el-button>
          </el-button-group>
        </div>
        <div class="d2-mb">
          <el-button-group>
            <el-button @click="handleScrollToElement(4)">滚动到第四个</el-button>
            <el-button @click="handleScrollToElement(14)">滚动到第十四个</el-button>
            <el-button @click="handleScrollToElement(24)">滚动到第二十四个</el-button>
          </el-button-group>
        </div>
      </el-col>
    </el-row>
    <d2-link-btn
      slot="footer"
      title="文档"
      link="http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/"/>
  </d2-container>
</template>

<script>
// 插件
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      time: 300,
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
    handleScrollTo (y) {
      this.BS.scrollTo(0, -y, this.time)
    },
    handleScrollBy (y) {
      this.BS.scrollBy(0, -y, this.time)
    },
    handleScrollToElement (n) {
      this.BS.scrollToElement(`#demo-bs-item-${n}`, this.time)
    },
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
  height: 400px;
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
