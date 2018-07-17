<template>
  <div class="d2-mb">
    <el-radio-group v-model="lang" @change="handleChange">
      <el-radio-button label="cn">中文</el-radio-button>
      <el-radio-button label="ja">日本語</el-radio-button>
      <el-radio-button label="en">English</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lang: 'cn'
    }
  },
  created () {
    this.lang = this.$i18n.locale
  },
  methods: {
    handleChange (val) {
      this.$i18n.locale = val
    }
  }
}
</script>
