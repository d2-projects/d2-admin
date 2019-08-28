<template>
  <d2-container
    ref="container"
    :type="containerType"
    :better-scroll="betterScroll"
    :scroll-delay="scrollDelay"
    @scroll="({x, y}) => { scrollTop = y }">
    <template slot="header">
      <el-form
        :inline="true"
        size="mini">
        <el-form-item
          label="布局类型"
          class="d2-mb-0">
          <el-radio-group v-model="containerType">
            <el-radio-button label="full"></el-radio-button>
            <el-radio-button label="card"></el-radio-button>
            <el-radio-button label="ghost"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="滚动距离"
          class="d2-mb-0">
          <el-input
            :value="scrollTop"
            style="width: 130px;">
            <template slot="append">px</template>
          </el-input>
        </el-form-item>
        <el-form-item
          v-if="!betterScroll"
          label="事件延迟(ms)"
          class="d2-mb-0">
          <el-input-number
            v-model="scrollDelay"
            :min="10"
            :max="2000"
            :step="100"
            style="width: 110px;"/>
        </el-form-item>
        <el-form-item class="d2-mb-0">
          <el-button
            v-if="scrollTop >= 55"
            type="primary"
            @click="$refs.container.scrollToTop">
            回到顶部
          </el-button>
        </el-form-item>
      </el-form>
    </template>
    <el-alert
      type="success"
      :title="`${betterScroll ? '此示例开启了 BetterScroll ' : ''}请向下滚动`"
      class="d2-mb-10"
      center/>
    <d2-demo-article
      v-for="i in 10"
      :key="i"
      :style="articleStyle"
      long/>
    <el-form
      slot="footer"
      :inline="true"
      size="mini">
      <el-form-item class="d2-mb-0">
        <el-button @click="$refs.container.scrollBy(0, 30)">相对滚动 (0, 30) 像素</el-button>
      </el-form-item>
      <el-form-item class="d2-mb-0">
        <el-button @click="$refs.container.scrollTo(0, 100)">滚动到 (0, 100) 像素位置</el-button>
      </el-form-item>
      <el-form-item class="d2-mb-0">
        <el-button @click="$refs.container.scrollTop(100)">滚动到垂直位置 100</el-button>
      </el-form-item>
    </el-form>
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
      containerType: 'full',
      scrollDelay: 10,
      scrollTop: 0
    }
  },
  computed: {
    // 是否开启 better scroll
    betterScroll () {
      return this.$route.query.bs === 'true'
    },
    // 根据滚动位置返回文章的样式
    articleStyle () {
      return {
        opacity: this.scrollTop > 55 ? '1' : '.1'
      }
    }
  }
}
</script>
