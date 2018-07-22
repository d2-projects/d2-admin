<template>
  <div>
    <div class="d2-demo-article-control">
      <el-switch
        v-model="isLong"
        active-text="长内容"
        inactive-text="短内容">
      </el-switch>
    </div>
    <d2-markdown v-show="isLong" :source="long"/>
    <d2-markdown v-show="!isLong" :source="short"/>
  </div>
</template>

<script>
import long from '../md/long.md'
import short from '../md/short.md'
export default {
  data () {
    return {
      long,
      short,
      isLong: false
    }
  }
}
</script>

<style lang="scss" scoped>
.d2-demo-article-control {
  padding: 8px 16px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #f4f4f5;
}
</style>
