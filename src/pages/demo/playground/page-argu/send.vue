<template>
  <d2-container type="full">
    <el-form :model="sendForm" :rules="rules" label-position="top" ref="sendForm">
      <el-form-item label="username 通过动态路由匹配发送" prop="username">
        <el-input v-model="sendForm.username"></el-input>
      </el-form-item>
      <el-form-item label="userid 通过参数发送" prop="userid">
        <el-input v-model="sendForm.userid"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit('sendForm')">跳转</el-button>
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
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        userid: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    handleSubmit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    }
  }
}
</script>