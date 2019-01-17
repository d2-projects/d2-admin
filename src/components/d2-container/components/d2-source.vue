<template>
  <div
    v-if="show"
    class="d2-source"
    :class="{ 'd2-source--active': isActive }"
    @click="handleClick">
    <d2-icon name="code"/> SourceCode
  </div>
</template>

<script>
export default {
  props: {
    // 文件路径
    filename: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    show () {
      return (process.env.VUE_APP_BUILD_MODE === 'TRAVIS' || process.env.NODE_ENV === 'development') && this.filename
    }
  },
  mounted () {
    // 一秒后显示按钮
    setTimeout(() => {
      this.isActive = true
    }, 500)
  },
  methods: {
    // 点击按钮的时候跳转到源代码
    handleClick () {
      const file = this.filename.split('?')[0]
      const url = file
        ? `https://github.com/d2-projects/d2-admin/blob/master/${file}`
        : 'https://github.com/d2-projects/d2-admin'
      this.$open(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.d2-source {
  $borderRadius: 4px;
  $paddingLR: 15px;
  $paddingTB: 7px;
  $fontSize: 12px;
  $rightOuter: $paddingLR / 2;
  opacity: 0;
  position: fixed;
  z-index: 9999;
  right: - $borderRadius - $rightOuter;
  bottom: 20px;
  font-size: $fontSize;
  line-height: $fontSize;
  font-weight: bold;
  border-radius: $borderRadius;
  padding: $paddingTB $paddingLR;
  padding-right: $borderRadius + $paddingLR;
  background-color: rgba(#000, .7);
  border: 1px solid #000;
  color: #FFF;
  transition: all .3s;
  @extend %unable-select;
  &.d2-source--active {
    opacity: 1;
  }
  &:hover {
    right: - $borderRadius;
    background-color: rgba(#000, .9);
  }
}
</style>
