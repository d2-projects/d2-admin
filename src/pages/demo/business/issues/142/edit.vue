<template>
  <d2-container
    type="card"
    class="demo-business-issues-142-edit">
    <template slot="header">编辑 id: {{id}}</template>
    <el-form ref="form" :model="form" label-width="80px" class="demo-business-issues-142-edit--form">
      <el-form-item label="姓名">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="地址">
        <el-input type="textarea" v-model="form.address"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">修改</el-button>
        <el-button @click="handleCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </d2-container>
</template>

<script>
import { mapActions } from 'vuex'
import { get } from '@/api/demo/business/issues/142'
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      form: {
        name: '',
        address: ''
      }
    }
  },
  created () {
    // 自动加载一次表单数据
    this.getFormData()
  },
  methods: {
    ...mapActions('d2admin/page', [
      'close'
    ]),
    // 根据 id 获取数据
    getFormData () {
      get(this.id)
        .then(res => {
          this.form.name = res.name
          this.form.address = res.address
        })
        .catch(err => {
          console.log('err', err)
        })
    },
    // 提交
    handleSubmit () {
      console.log('submit!')
    },
    // 取消编辑
    handleCancel () {
      this.close({
        tagName: this.$route.fullPath,
        vm: this
      })
    }
  }
}
</script>

<style lang="scss">
.demo-business-issues-142-edit {
  .demo-business-issues-142-edit--form {
    max-width: 460px;
    margin: 0px auto;
  }
}
</style>
