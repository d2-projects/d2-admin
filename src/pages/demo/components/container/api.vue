<template>
  <d2-container
    ref="container"
    :type="containerType"
    :scroll-delay="scrollDelay"
    @scroll="e => { scrollTop = e.target.scrollTop }">
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
            @click="$refs.container.scrollToTop">
            回到顶部
          </el-button>
        </el-form-item>
      </el-form>
    </template>
    <el-alert
      type="success"
      title="请向下滚动"
      class="d2-mb-10"
      center/>
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
          <el-button @click="$refs.container.scrollBy(0, 30)">相对滚动 (0, 30) 像素</el-button>
        </el-form-item>
        <el-form-item class="d2-mb-0">
          <el-button @click="$refs.container.scrollTo(0, 100)">滚动到 (0, 100) 像素位置</el-button>
        </el-form-item>
        <el-form-item class="d2-mb-0">
          <el-button @click="$refs.container.scrollTop(100)">滚动到垂直位置 100</el-button>
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
      containerType: 'full',
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
  watch: {
    containerType (val, oldVal) {
      let top = this.scrollTop
      // 因为 ghost 模式下的容器没有 20px 的 padding
      // 为了保持垂直位置 需要重新计算定位高度
      if (oldVal === 'ghost') top += 20
      if (val === 'ghost') top -= 20
      this.$nextTick(() => this.$refs.container.scrollTo(0, top))
    }
  }
}
</script>
