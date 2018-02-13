<template>
  <div class="dd-mb">
    <el-radio-group v-model="lang" @change="handleChange">
      <el-radio-button label="CN">中文</el-radio-button>
      <el-radio-button label="JA">日本語</el-radio-button>
      <el-radio-button label="EN">English</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lang: 'CN'
    }
  },
  methods: {
    handleChange (val) {
      this.$i18n.locale = val
    }
  }
}
</script>

