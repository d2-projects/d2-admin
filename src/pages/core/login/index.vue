<template>
  <div class="login-page">
    <div class="layer bg" id="login"></div>
    <div class="layer flex-center">
      <div class="logo-group">
        <img src="@/assets/image/logo/w500.png" alt="logo">
      </div>
      <div class="form-group">
        <el-card>
          <el-form ref="loginForm" label-position="top" :rules="rules" :model="formLogin">
            <el-form-item  prop="username">
              <el-input type="text" v-model="formLogin.username" placeholder="用户名">
                <i slot="prepend" class="fa fa-user-circle-o"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="formLogin.password" placeholder="密码">
                <i slot="prepend" class="fa fa-keyboard-o"></i>
              </el-input>
            </el-form-item>
            <el-button @click="submit" type="primary" class="button-login">登陆</el-button>
          </el-form>
        </el-card>
        <el-button type="info" class="button-help">
          需要帮助
          <i class="fa fa-question-circle"></i>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
require('particles.js')
// 配置地址
// https://vincentgarreau.com/particles.js/#default
import config from './config/default'
export default {
  data () {
    return {
      formLogin: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    // 初始化例子插件
    particlesJS('login', config)
  },
  methods: {
    // 提交登陆信息
    submit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$http({
            method: 'post',
            url: '/login',
            data: {
              username: this.formLogin.username,
              password: this.formLogin.password
            }
          })
            .then (res => {
              if (res.data.code === 0) {
                this.$message.success(res.data.msg)
                setTimeout(() => {
                  this.$router.push('index')
                }, 300);
              } else {
                this.$message.error(res.data.msg)
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

<style lang="scss">
@import '~@/assets/style/public.scss';
.login-page {
  background-color: #EDF4FA;
  height: 100%;
  position: relative;
  // 层
  .layer {
    position: absolute;
    height: 100%;
    width: 100%;
    &.flex-center {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  // logo
  .logo-group {
    margin-top: -100px;
    img {
      width: 100px;
    }
  }
  // 登陆表单
  .form-group {
    width: 300px;
    .el-card {
      box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    }
    .button-login {
      width: 100%;
    }
  }
  // 帮助按钮
  .button-help {
    width: 100%;
    margin-top: $margin;
  }
  // 背景
  .bg {
    canvas {
      display: block;
      margin: 0px;
      padding: 0px;
    }
  }
}
</style>

