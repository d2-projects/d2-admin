<template>
  <div class="d2-demo-article">
    <div v-if="!long" class="d2-demo-article__control">
      <el-switch
        v-model="isLong"
        active-text="长内容"
        inactive-text="短内容"/>
    </div>
    <d2-markdown v-show="isLong" :source="sourceLong"/>
    <d2-markdown v-show="!isLong" :source="sourceShort"/>
  </div>
</template>

<script>
import sourceLong from '../md/long.md'
import sourceShort from '../md/short.md'
export default {
  props: {
    // 指定为长文本
    long: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      sourceLong,
      sourceShort,
      isLong: false
    }
  },
  created () {
    this.isLong = this.long
  }
}
</script>

<style lang="scss" scoped>
.d2-demo-article {
  transition: opacity .3s;
  .d2-demo-article__control {
    padding: 8px 16px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #f4f4f5;
  }
}
</style>
