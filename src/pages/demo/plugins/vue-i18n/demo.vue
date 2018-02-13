<template>
  <Container>
    <div>
      <el-radio-group v-model="lang">
        <el-radio-button label="CN">中文</el-radio-button>
        <el-radio-button label="EN">英语</el-radio-button>
      </el-radio-group>
    </div>
    {{$t('message.hello')}}
  </Container>
</template>

<script>
export default {
  data () {
    return {
      lang: ''
    }
  }
}
</script>

