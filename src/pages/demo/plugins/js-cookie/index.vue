<template>
  <d2-container>
    <template slot="header">
      <div class="d2-mb">Cookie 读写</div>
      <el-alert
        title="建议"
        type="warning"
        description="建议使用 util 内的 cookies 对象，这样会在存储和读取时统一增加前缀，方便对 cookie 统一管理"
        show-icon>
      </el-alert>
    </template>
    <p class="d2-mt-0">基本读写删</p>
    <el-button type="primary" @click="set('demo-user-name', 'demo-user')">set('demo-user-name', 'normalValue')</el-button>
    <el-button type="info" @click="get('demo-user-name')">get('demo-user-name')</el-button>
    <el-button type="error" @click="remove('demo-user-name')">remove('demo-user-name')</el-button>
    <p>设置有效期</p>
    <el-button type="primary" @click="setExpires('demo-user-pwd', '123456789', 1)">设置 'demo-user-pwd' 有效期为一天</el-button>
    <el-button type="info" @click="get('demo-user-pwd')">get('demo-user-pwd')</el-button>
    <el-button type="error" @click="remove('demo-user-pwd')">remove('demo-user-pwd')</el-button>
    <p>获取所有可以获得的数据</p>
    <el-button type="info" @click="getAll">getAll</el-button>
  </d2-container>
</template>

<script>
import util from '@/libs/util.js'
export default {
  methods: {
    set (name = 'default-name', value = 'default-value') {
      util.cookies.set(name, value)
      this.$message.info(`设置数据 ${name} = ${value}`)
    },
    setExpires (name = 'default-name', value = 'default-value', expires = 1) {
      util.cookies.set(name, value, {
        expires
      })
      this.$message.info(`设置数据 ${name} = ${value} 有效期 ${expires} 天`)
    },
    get (name = 'default-name') {
      const value = util.cookies.get(name)
      this.$message.info(`获取数据 ${name} = ${value}`)
    },
    getAll () {
      const value = util.cookies.getAll()
      console.log(value)
      this.$message.info('结果已经打印到控制台')
    },
    remove (name = 'default-name') {
      util.cookies.remove(name)
      this.$message.info(`删除数据 ${name}`)
    }
  }
}
</script>
