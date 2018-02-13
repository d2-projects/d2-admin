<template>
  <Container>
    <div>
      <el-radio-group v-model="lang" @change="handleChange">
        <el-radio-button label="CN">中文</el-radio-button>
        <el-radio-button label="EN">English</el-radio-button>
      </el-radio-group>
    </div>
    <p>{{$t('message.hello')}}</p>
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

