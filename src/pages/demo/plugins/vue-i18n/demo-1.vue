<template>
  <Container>
    <PageHeader
      slot="header"
      title="示例1"
      url="http://kazupon.github.io/vue-i18n/en/">
    </PageHeader>
    <div class="dd-mb">
      <el-radio-group v-model="lang" @change="handleChange">
        <el-radio-button label="CN">中文</el-radio-button>
        <el-radio-button label="EN">English</el-radio-button>
      </el-radio-group>
    </div>
    <el-button>{{$t('message.hello')}}</el-button>
  </Container>
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

