<template>
  <d2-container type="card">
    <el-form :model="sendForm" :rules="rules" label-position="top" ref="sendForm">
      <el-form-item label="username 通过动态路由匹配发送" prop="username">
        <el-input v-model="sendForm.username" style="width: 300px;"/>
      </el-form-item>
      <el-form-item label="userid 通过参数发送" prop="userid">
        <el-input v-model="sendForm.userid" style="width: 300px;"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit('sendForm')">跳转到接收页面</el-button>
      </el-form-item>
    </el-form>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      sendForm: {
        username: 'FairyEver',
        userid: '001'
      },
      rules: {
        username: [
          { required: true, message: '请输入要发送的用户名', trigger: 'blur' }
        ],
        userid: [
          { required: true, message: '请输入要发送的用户ID', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push({
            name: 'demo-playground-page-argu-get',
            params: {
              username: this.sendForm.username
            },
            query: {
              userid: this.sendForm.userid
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
