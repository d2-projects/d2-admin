<template>
  <d2-container
    ref="container"
    type="card"
    :scroll-delay="scrollDelay"
    @scroll="handleScroll">
    <template slot="header">
      <el-form
        :inline="true"
        size="mini">
        <el-form-item
          label="滚动距离"
          class="d2-mb-0">
          <el-input
            :value="scrollTop"
            style="width: 120px;">
            <template slot="append">px</template>
          </el-input>
        </el-form-item>
        <el-form-item
          label="事件延迟(ms)"
          class="d2-mb-0">
          <el-input-number
            v-model="scrollDelay"
            :min="100"
            :max="2000"
            :step="100"
            style="width: 110px;"/>
        </el-form-item>
        <el-form-item class="d2-mb-0">
          <el-button
            v-if="scrollTop >= 55"
            type="primary"
            @click="handleScrollToTop">
            回到顶部
          </el-button>
        </el-form-item>
      </el-form>
    </template>
    <el-alert type="success" title="请向下滚动" center class="d2-mb-10"/>
    <d2-demo-article
      v-for="i in 10"
      :key="i"
      :style="articleStyle"
      long/>
    <template slot="footer">
      <el-form
        :inline="true"
        size="mini">
        <el-form-item class="d2-mb-0">
          <el-button @click="handleScrollBy">相对滚动 (0, 30) 像素</el-button>
        </el-form-item>
        <el-form-item class="d2-mb-0">
          <el-button @click="handleScrollTo">滚动到 (0, 100) 像素位置</el-button>
        </el-form-item>
        <el-form-item class="d2-mb-0">
          <el-button @click="handleScrollTop">滚动到垂直位置 100</el-button>
        </el-form-item>
      </el-form>
    </template>
  </d2-container>
</template>

<script>
import d2DemoArticle from './components/d2-demo-article'
export default {
  components: {
    'd2-demo-article': d2DemoArticle
  },
  data () {
    return {
      scrollDelay: 100,
      scrollTop: 0
    }
  },
  computed: {
    articleStyle () {
      return {
        opacity: this.scrollTop > 55 ? '1' : '.1'
      }
    }
  },
  methods: {
    handleScroll (e) {
      this.scrollTop = e.target.scrollTop
    },
    handleScrollToTop () {
      this.$refs.container.scrollToTop()
    },
    handleScrollBy () {
      this.$refs.container.$children[0].$refs.body.scrollBy(0, 30)
    },
    handleScrollTo () {
      this.$refs.container.$children[0].$refs.body.scrollTo(0, 100)
    },
    handleScrollTop () {
      this.$refs.container.$children[0].$refs.body.scrollTop = 100
    }
  }
}
</script>
