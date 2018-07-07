<template>
  <div class="login-page">
    <div class="layer bg" id="login"></div>
    <div class="layer flex-center">
      <!-- logo部分 -->
      <div class="logo-group">
        <img
          src="@/assets/image/logo/d2admin.png"
          alt="logo">
      </div>
      <!-- 表单部分 -->
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
            <el-form-item prop="code">
              <el-input type="text" v-model="formLogin.code" placeholder="- - - -">
                <template slot="prepend">验证码</template>
                <template slot="append">
                  <img
                    class="login-code"
                    src="@/assets/image/demo/login-code.png">
                </template>
              </el-input>
            </el-form-item>
            <el-button @click="submit" type="primary" class="button-login">登录</el-button>
          </el-form>
        </el-card>
      </div>
      <!-- 帮助按钮 -->
      <el-button type="info" class="button-help">
        需要帮助
        <i class="fa fa-question-circle"></i>
      </el-button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
require('particles.js')
// 配置地址
// https://vincentgarreau.com/particles.js/#default
import config from './config/default'
import Cookies from 'js-cookie'
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      formLogin: {
        username: 'admin',
        password: 'admin',
        code: 'v9am'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    // 初始化例子插件
    particlesJS('login', config)
  },
  methods: {
    ...mapMutations([
      'd2adminUsernameSet'
    ]),
    // 提交登陆信息
    submit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // this.$axios({
          //   method: 'post',
          //   url: '/login',
          //   data: {
          //     username: this.formLogin.username,
          //     password: this.formLogin.password
          //   }
          // })
          //   .then(res => {
          //     // cookie 一天的有效期
          //     const setting = {
          //       expires: 1
          //     }
          //     // 设置 cookie
          //     Cookies.set('uuid', res.uuid, setting)
          //     Cookies.set('token', res.token, setting)
          //     // 设置 vuex
          //     this.d2adminUsernameSet(res.name)
          //     // 跳转路由
          //     this.$router.push({
          //       name: 'index'
          //     })
          //   })
          //   .catch(err => {
          //     console.log('err', err)
          //   })
          // 因为去掉了 mock.js 这里模拟登陆
          setTimeout(() => {
            // cookie 一天的有效期
            const setting = {
              expires: 1
            }
            // 设置 cookie
            Cookies.set('uuid', 'test-user-uuid', setting)
            Cookies.set('token', 'hello-d2-admin', setting)
            // 设置 vuex
            this.d2adminUsernameSet('管理员')
            // 跳转路由
            this.$router.push({
              name: 'index'
            })
          }, 1000)
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>

