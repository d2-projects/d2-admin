<template>
  <div class="login-page">
    <div class="layer bg" id="login"></div>
    <div class="layer flex-center">
      <!-- logo部分 -->
      <div class="logo-group">
        <img src="./image/logo.png" alt="logo">
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
                  <img class="login-code" src="./image/login-code.png">
                </template>
              </el-input>
            </el-form-item>
            <el-button @click="submit" type="primary" class="button-login">登录</el-button>
          </el-form>
        </el-card>
      </div>
      <!-- 快速登陆按钮 -->
      <el-button type="info" class="button-help" @click="dialogVisible = true">
        快速选择用户（测试功能）
      </el-button>
    </div>
    <el-dialog
      title="快速选择用户"
      :visible.sync="dialogVisible"
      width="400px">
      <el-row :gutter="10" style="margin: -20px 0px -10px 0px;">
        <el-col v-for="(user, index) in users" :key="index" :span="8">
          <div class="user-btn" @click="handleUserBtnClick(user)">
            <d2-icon name="user-circle-o"/>
            <span>{{user.name}}</span>
          </div>
        </el-col>
      </el-row>
    </el-dialog>
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
      // 快速选择用户
      dialogVisible: false,
      users: [
        {
          name: '管理员',
          username: 'admin',
          password: 'admin'
        },
        {
          name: '编辑',
          username: 'editor',
          password: 'editor'
        },
        {
          name: '用户1',
          username: 'user1',
          password: 'user1'
        }
      ],
      // 表单
      formLogin: {
        username: 'admin',
        password: 'admin',
        code: 'v9am'
      },
      // 校验
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
      'd2adminUserInfoSet',
      'd2adminLoginSuccessLoad'
    ]),
    /**
     * @description 接收选择一个用户快速登陆的事件
     * @param {object} user 用户信息
     */
    handleUserBtnClick (user) {
      this.formLogin.username = user.username
      this.formLogin.password = user.password
      this.submit()
    },
    /**
     * @description 提交表单
     */
    // 提交登陆信息
    submit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 开始请求登录接口
          this.$axios({
            method: 'post',
            url: '/login',
            data: {
              username: this.formLogin.username,
              password: this.formLogin.password
            }
          })
            .then(res => {
              // cookie 一天的有效期
              const setting = {
                expires: 1
              }
              // 设置 cookie 一定要存 uuid 和 token 两个 cookie，整个系统依赖这两个数据进行校验和存储
              Cookies.set('uuid', res.data.uuid, setting)
              Cookies.set('token', res.data.token, setting)
              // 设置 vuex 用户信息
              this.d2adminUserInfoSet({
                name: res.data.name
              })
              // 用户登陆后从数据库加载一系列的设置
              this.d2adminLoginSuccessLoad()
              // 跳转路由
              this.$router.push({
                name: 'index'
              })
            })
            .catch(err => {
              console.group('登陆结果')
              console.log('err: ', err)
              console.groupEnd()
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
@import './style.scss';
</style>
