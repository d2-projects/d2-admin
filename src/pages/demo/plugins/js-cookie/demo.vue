<template>
  <Container type="ghost">
    <el-card class="mb">
      <p slot="title">基本读写删</p>
      <el-button type="primary" @click="set('test-user-name', 'test-user')">set('test-user-name', 'normalValue')</el-button>
      <el-button type="info" @click="get('test-user-name')">get('test-user-name')</el-button>
      <el-button type="error" @click="remove('test-user-name')">remove('test-user-name')</el-button>
    </el-card>
    <el-card class="mb">
      <p slot="title">设置有效期</p>
      <el-button type="primary" @click="setExpires('test-user-pwd', '123456789', 1)">设置 'test-user-pwd' 有效期为一天</el-button>
      <el-button type="info" @click="get('test-user-pwd')">get('test-user-pwd')</el-button>
      <el-button type="error" @click="remove('test-user-pwd')">remove('test-user-pwd')</el-button>
    </el-card>
    <el-card class="mb">
      <p slot="title">获取所有可以获得的数据</p>
      <el-button type="info" @click="getAll">getAll</el-button>
    </el-card>
  </Container>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  methods: {
    set (name = 'default-name', value = 'default-value') {
      Cookies.set(name, value)
      this.$Message.info(`设置数据 ${name} = ${value}`)
    },
    setExpires (name = 'default-name', value = 'default-value', expires = 1) {
      Cookies.set(name, value, {
        expires
      })
      this.$Message.info(`设置数据 ${name} = ${value} 有效期 ${expires} 天`)
    },
    get (name = 'default-name') {
      const value = Cookies.get(name)
      this.$Message.info(`获取数据 ${name} = ${value}`)
    },
    getAll () {
      const value = Cookies.get()
      console.log(value)
      this.$Message.info('结果已经打印到控制台')
    },
    remove (name = 'default-name') {
      Cookies.remove(name)
      this.$Message.info(`删除数据 ${name}`)
    }
  }
}
</script>

